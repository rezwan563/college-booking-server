const router = require('express').Router()
const Candidate = require('../models/Candidate')
const Review = require('../models/Review')

// create a review
router.post('/', async(req, res) =>{
    const newReview = new Review(req.body)
    try{
await newReview.save()
res.status(200).json('review added successfully')
    }catch(err){
        res.status(500).json(err)
    }
})
// get a  review
router.get('/:id', async (req, res) =>{
    try{
        const singleReview = await Review.findById(req.params.id)
        res.status(200).json(singleReview)
    }catch(err){
        res.status(200).json(err)
    }
})
// get all reviews
router.get('/', async(req, res) =>{
    try{
const allReviews = await Review.find()
res.status(200).json(allReviews)
    }catch(err){
        res.status(500).json(err)
    }
})
// update a review
router.put('/:id', async(req, res) =>{
    const singleReview = await Review.findById(req.params.id)
    try{
        await singleReview.updateOne({
            $set: req.body.desc,
        })
        res.status(200).json('review has been updated')
    }catch(err){
        res.status(500).json(err)
    }
})
// delete a review
router.delete('/:id', async(req, res) =>{
    try{
       await Review.findByIdAndDelete(req.params.id)
       res.status(200).json("review deleted")
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;