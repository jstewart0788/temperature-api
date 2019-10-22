const express = require('express');
const Temperature = require('../services/temp');

const router = express.Router();
const temperature = new Temperature();

router.get('/state', async (req, res) => {
    try {
        const state = await temperature.fetchTemp()
        res.json({ state });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.get('/temperature', async (req, res) => {
    try {
        const temp = await temperature.getTemperatue()
        res.json({ temp });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.post('/temperature', async ({ body: { temp } }, res) => {
    try {
        console.log(temp, 'temp');
        const response = await temperature.setTemp(temp)
        res.json({ msg: " Temperature Set!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.get('/fan', async (req, res) => {
    try {
        const fan = await temperature.getFanStatus()
        res.json({ fan });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.post('/fan', async ({ body: { fan } }, res) => {
    try {
        console.log(fan, 'fan');
        const response = await temperature.setFan(fan)
        res.json({ msg: " Fan Set!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.get('/turnon', async (req, res) => {
    try {
        const turnOn = await temperature.getTurnOnBreakpoint()
        res.json({ turnOn });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

router.post('/turnon', async ({ body: { turnOn } }, res) => {
    try {
        console.log(turnOn, 'turnOn');
        const response = await temperature.setTurnOnBreakpoint(turnOn)
        res.json({ msg: "Turn On Breakpoint Set!", response });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err })
    }
})

module.exports = router;
