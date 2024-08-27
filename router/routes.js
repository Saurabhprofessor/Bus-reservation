// const express = require('express');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const {User,List,Userbot} = require('./db');

// const router = express.Router();

// router.get("/", async function (req, res) {
//     try {
//       const data = await List.aggregate([
//         {
//           $match: {
//             category: { $in: ['Text to audio', 'Chat bots', 'Background', 'Text to video'] }
//           }
//         },
//         {
//           $group: {
//             _id: "$category",
//             item: { $push: "$$ROOT" }
//           }
//         },
//         {
//           $unwind: "$item"
//         },
//         {
//           $sort: { "item.count": -1 }
//         },
//         {
//           $group: {
//             _id: "$_id",
//             item: { $push: "$item" }
//           }
//         }
//       ]).exec();
  
//       const listResult = await List.find({}).sort({ count: 'desc' }).exec();
  
//       res.render("home", { data: data, list: listResult });
//     } catch (err) {
//       console.log(err);
//     }
//   });

// router.get('/test',(req,res)=>{
//     res.send('this is working fine')
// })

// module.exports = router;