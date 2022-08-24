const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");
// const { checkName } = require("../validations/checkSnacks");
const confirmHealth = require("../confirmHealth")

function formatSnackName(input) {
  const formattedName = input.split(" ");
  for (let i = 0; i < formattedName.length; i++) {
    formattedName[i].length > 2 && (formattedName[i] = formattedName[i].charAt(0).toUpperCase() + formattedName[i].slice(1).toLowerCase());
  }
  return formattedName.join(" ");
}

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({ error: "Server Error." });
  }
});

snacks.post("/", async (req, res) => {
  if(req.body) { 
    req.body.name = formatSnackName(req.body.name)
    req.body.is_healthy = confirmHealth(req.body)
    req.body.name && !req.body.image && (req.body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image")
    const createdSnack = await createSnack(req.body);
    if (createdSnack.name && createdSnack.image) {
      res.status(200).send({ success: true, payload: createdSnack });
    } else if (createdSnack.name && !createdSnack.image) {
      res.status(200).send({ success: true, payload: req.body });
    };
  };
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params
  const snack = await getSnack(id)
  if (snack) {
    res.json({ payload: snack, success: true });
  } else {
    res
      .status(404)
      .json({ payload: "not found", success: false, error: "Snack not found" });
  };
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

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  if (req.body) { 
  req.body.name = formatSnackName(req.body.name)
  req.body.is_healthy = confirmHealth(req.body)
  req.body.name && !req.body.image && (req.body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image")
  const updatedSnack = await updateSnack(req.body, id);
  res.status(200).json({ payload: updatedSnack, success: true })
  } else {
    res.status(404).json({ error: "Update Unsuccessful." });
  }
});



module.exports = snacks;
