const express = require("express");
const router = express.Router();

router.get("/:bookId", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const comments = await db
      .collection("comments")
      .find({ bookId: req.params.bookId })
      .sort({ createdAt: -1 })
      .toArray();
    res.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const db = req.app.locals.db;
    const newComment = {
      ...req.body,
      createdAt: new Date(),
    };
    const result = await db.collection("comments").insertOne(newComment);
    res.status(201).json({ ...newComment, _id: result.insertedId });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
