const checkName = (req, res, next) => {
  if (req.body.name) {
    req.body.name[0].toUpperCase() + req.body.name.substring(1)
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

module.exports = { checkName };