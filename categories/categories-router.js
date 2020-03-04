const categoriesRouter = require("express").Router();
const categoriesModel = require("./categories-model");
const { requiresRole } = require("../helpers/roles");

categoriesRouter.get("/", async (req, res) => {
  const allAuctions = await categoriesModel.getAll();
  
  res.status(200).json(allAuctions);
});

categoriesRouter.put("/", requiresRole("admin"), async (req, res) => {
  const categoryInfo = req.body;
  const addResult = await categoriesModel.add(categoryInfo);
  
  res.status(200).json(addResult);
});

categoriesRouter.delete("/:categoryId", requiresRole("admin"), async (req, res) => {
  const removeResult = await categoriesModel.remove(req.params.categoryId);
  
  res.status(200).json(removeResult);
});

module.exports = categoriesRouter;