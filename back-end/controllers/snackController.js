const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");
const { checkName } = require("../validations/checkSnacks");
const confirmHealth = require("../confirmHealth")

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({ error: "Server Error." });
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack) {
    res.json({ payload: snack, success: true });
  } else {
    res
      .status(404)
      .json({ payload: "not found", success: false, error: "Snack not found" });
  }
});

snacks.post("/", checkName, async (req, res) => {
  const createdSnack = await createSnack(req.body);
  if (createdSnack.id) {
    res.json({ payload: createdSnack, success: true });
  } else {
    res.status(422).json({ error: "Could not create snack." });
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.json({ payload: deletedSnack, success: true });
  } else {
    res
      .status(404)
      .json({
        payload: "not found",
        success: false,
        error: "Snack not found.",
      });
  }
});

snacks.put("/:id", checkName, async (req, res) => {
  const { id } = req.params;
//   const editedSnack = req.body
  const updatedSnack = await updateSnack(req.body, id);
//   editedSnack.is_healthy = confirmHealth(editedSnack)
  if (updatedSnack.id) {
    res.status(200).json({ payload: updatedSnack, success: true });
  } else {
    res.status(404).json({ error: "Update Unsuccessful." });
  }
});

module.exports = snacks;
