const Temp = require("../models/temp");

module.exports = class TempServcie {
    async fetchTemp() {
        const data = await Temp.find({}).exec();
        return data[0]
    }

    async getTempID() {
        const { id } = await this.fetchTemp();
        return id
    }

    async getTemperatue() {
        const { temperature } = await this.fetchTemp();
        return temperature
    }

    async getFanStatus() {
        const { fan } = await this.fetchTemp();
        return fan
    }

    async getTurnOnBreakpoint() {
        const { turnOn } = await this.fetchTemp();
        return turnOn
    }

    async setTemp(temperature) {
        return Temp.updateOne({}, { temperature }).exec();
    }

    async setFan(fan) {
        return Temp.updateOne({}, { fan }).exec();
    }

    async setTurnOnBreakpoint(turnOn) {
        return Temp.updateOne({}, { turnOn }).exec();
    }
};