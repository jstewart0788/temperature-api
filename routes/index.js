const express = require('express');
const Temperature = require('../services/temp');

const router = express.Router();
const temperature = new Temperature();

router.get('/temperature', async (req, res) => {
    try {
        const temp = await temperature.fetchTemp()
        res.json({ temp });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!" })
    }
})

router.post('/temperature', async ({ body: { temp } }, res) => {
    try {
        const res = await temperature.setTemp(temp)
        res.json({ msg: " Temperature Set!", res });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err: err })
    }
})

router.get('/fan', async (req, res) => {
    try {
        const fan = await temperature.getFanStatus()
        res.json({ fan });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!" })
    }
})

router.post('/fan', async ({ body: { fan } }, res) => {
    try {
        const res = await temperature.setFan(fan)
        res.json({ msg: " Fan Set!", res });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err: err })
    }
})

router.get('/turnon', async (req, res) => {
    try {
        const turnOn = await temperature.getTurnOnBreakpoint()
        res.json({ turnOn });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!" })
    }
})

router.post('/turnon', async ({ body: { turnOn } }, res) => {
    try {
        const res = await temperature.setTurnOnBreakpoint(turnOn)
        res.json({ msg: "Turn On Breakpoint Set!", res });
    }
    catch (err) {
        res.status(500).json({ msg: " Error Occured!", err: err })
    }
})

module.exports = router;