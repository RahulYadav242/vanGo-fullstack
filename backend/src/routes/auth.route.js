import express from 'express'
const router=express.Router()
import {signup,login,logout,updateProfile,checkAuth} from '../controllers/auth.controller.js'
import {protectRoute} from '../middleware/auth.middleware.js'
import Van from '../models/van.js'



router.post('/signup',signup) 
router.post('/login',login)
router.post('/logout',logout)
router.put('/update-profile',protectRoute,updateProfile)
router.get('/check',protectRoute,checkAuth)
router.get("/vans", async (req, res) => {
  try {
    const vans = await Van.find();
    res.json({ vans });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/vans/:id", async (req, res) => {
    try {
        const van = await Van.findOne({ id: req.params.id });
        if (!van) {
            return res.status(404).json({ error: "Van not found" });
        }
        res.json(van);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});



export default router