const express = require('express');
const router = express.Router();

const feedbacksData =[];

router.get("/",(req,res)=>{
    res.json(feedbacksData);
});

router.post("/", (req, res) => {
  const { name, message, rate } = req.body;

  // Fix validation
  if (!name || !message || rate < 1 || rate > 5) {
    return res
      .status(400)
      .json({ error: "Name, message, and valid rate (1-5) are required." });
  }

  const newFeedback = {
    id: Math.random().toString(36).slice(2),
    name,
    message,
    rate,
    createdAt: new Date().toString(),
  };

  feedbacksData.push(newFeedback);
  res.status(200).json({ message: "Feedback received", data: newFeedback });
});
  

// Deletion

router.delete("/:id", (req,res)=>{
    const {id} = req.params;
    const index = feedbacksData.findIndex((fb)=> fb.id === id);

    if(index == -1 )
    {
        return res.status(400).json( {error :"Feedback not  Found"});
    }

    feedbacksData.splice(index,1);
});

module.exports = router;