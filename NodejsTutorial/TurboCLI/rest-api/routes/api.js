// Full Documentation - https://docs.turbo360.co
const express = require("express");
const router = express.Router();

/*  This is a sample API route. */

const players = [
  
];
const teams = [
  
];

const db = {
  team: teams,
  player: players,
};

router.get("/:resource", (req, res) => {
  const resource = req.params.resource;

  const data = db[resource];
  if (data) {
    res.json({
      confirmation: "success",
      data: players,
    });
  } else {
    res.json({
      confirmation: "fail",
      message: "Invalid request. Resource undefined",
    });
  }
});

// router.get('/player',(req,res)=>{
//   res.json({
//     confirmation:'success',
//     data:players
//   })
// })

// router.get('/team',(req,res)=>{
//   res.json({
//     confirmation: 'success',
//     resource: teams,
//   })
// })

module.exports = router;
