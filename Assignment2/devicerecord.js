'use strict';

const State = require('./ledger-api/state.js');

class DeviceRecord extends State {

    constructor(obj) {
        super(DeviceRecord.getClass(), [obj.device_serial, obj.price]);
        Object.assign(this, obj);
    }

    //Helper Functions for reading and writing attributes
    getDevice_Serial() { return this.device_serial }
    setDevice_Serial(newDevice_Serial) { return this.device_serial = newDevice_Serial }
    getPrice() { return this.price }
    setPrice(newPrice) { return this.price = newPrice }
    getManufacturing_date() { return this.manufacturing_date }
    setManufacturing_date(newManufacturing_date) { return this.manufacturing_date = newManufacturing_date }
    getcompany() { return this.company }
    setcompany(newcompany) { return this.company = newcompany }
    getdevicetype() { return this.company }
    setdevicetype(newdevicetype) { return this.device_type = newdevicetype }

    //TASK 2 - Write a getter and a setter for a field called last_update

    //Helper functions

    static fromBuffer(buffer) {
        return DeviceRecord.deserialize(Buffer.from(JSON.parse(buffer)));
    }

    toBuffer() {
        return Buffer.from(JSON.stringify(this));
    }

    static deserialize(data) {
        return State.deserializeClass(data, DeviceRecord);
    }

    static createInstance(device_serial, price, manufacturing_date, company, device_type) {
        return new DeviceRecord({ device_serial, price, manufacturing_date, company, device_type });
    }

    static getClass() {
        return 'edu.asu.devicerecord';
    }


}

module.exports = DeviceRecord;
