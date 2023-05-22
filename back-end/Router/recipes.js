const router = require("express").Router();
const Recipe = require("../Model/Recipes");
router.get("/:id", async (req, res)=>{
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;