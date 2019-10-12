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
        const id = await this.getTempID();
        return Temp.updateOne({ id }, { temperature }).exec();
    }

    async setFan(fan) {
        const id = await this.getTempID();
        return Temp.updateOne({ id }, { fan }).exec();
    }

    async setTurnOnBreakpoint(turnOn) {
        const id = await this.getTempID();
        return Temp.updateOne({ id }, { turnOn }).exec();
    }
};