const router = require('express').Router()
const College = require('../models/College')

// create college
router.post('/', async (req, res) =>{
    const newCollege = new College(req.body)
    try{
        await newCollege.save()
        res.status(200).json("new college added")
    }catch(err){
        res.status(500).json(err)
    }
})
// get a college
router.get('/:id', async (res, res) =>{
    try{
        const singleCollege = await College.findById(req.params.id)
        res.status(200).json(singleCollege)
    }catch(err){
        res.status(404).json(err)
    }
})
// get all colleges
router.get('/', async (req, res)=>{
    try{
        const allColleges = await College.find()
        res.status(200).json(allColleges)
    }catch(err){
        res.status(500).json(err)
    }
})
// update college
router.put('/:id', async (req, res) =>{
    try{
        const singleCollege = await College.findById(req.params.id)
        await singleCollege.updateOne({
            $set: req.body
        })
        res.status(200).json('college updated successfully')
    }catch(err){
        res.status(500).json(err)
    }
})
// delete college
router.delete('/:id', async (req, res)=>{
    try{
        await College.findByIdAndDelete(req.params.id)
        res.status(200).json('college has been deleted')
    }catch(err){
        res.status(500).json(err)
    }
})