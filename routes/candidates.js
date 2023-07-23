const router = require('express').Router()
const Candidate = require('../models/Candidate')

// create candidate
router.post('/', async (req, res) =>{
    const newCandidate = new Candidate(req.body)
    try{
        await newCandidate.save()
        res.status(200).json('new candidate added')
    }catch(err){
        res.status(500).json(err)
    }
})
// get a candidate
router.get('/:id', async (res, res) =>{
    try{
        const singleCandidate = await Candidate.findById(req.params.id)
        res.status(200).json(singleCandidate)
    }catch(err){
        res.status(500).json(err)
    }
})
// update a candidate
router.put('/:id', async(req, res) =>{
    const singleCandidate = await Candidate.findById(req.params.id)
    try{
        await singleCandidate.updateOne({
            $set: req.body,
        })
    }catch(err){
        res.status(500).json(err)
    }
})
// delete a candidate
router.delete('/:id', async(req, res)=>{
    try{
        await Candidate.findByIdAndDelete(req.params.id)
        res.status(200).json('candidate has been deleted')
    }catch(err){
        res.status(500).json(err)
    }
})