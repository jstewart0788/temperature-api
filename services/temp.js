const Temp = require("../models/temp");

module.exports = class TempServcie {
    async fetchTemp() {
        const data = await Temp.find({}).exec();
        return data[0]
    }

    async getTempID() {
        const { id } = await fetchTemp();
        return id
    }

    async getTemperatue() {
        const { temperature } = await fetchTemp();
        return temperature
    }

    async getFanStatus() {
        const { fan } = await fetchTemp();
        return fan
    }

    async getTurnOnBreakpoint() {
        const { turnOn } = await fetchTemp();
        return turnOn
    }

    async setTemp(temperature) {
        const id = await getTempID();
        return Temp.updateOne({ id }, { temperature }).exec();
    }

    async setFan(fan) {
        const id = await getTempID();
        return Temp.updateOne({ id }, { fan }).exec();
    }

    async setTurnOnBreakpoint(turnOn) {
        const id = await getTempID();
        return Temp.updateOne({ id }, { turnOn }).exec();
    }
};