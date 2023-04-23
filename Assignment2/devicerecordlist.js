'use strict';

const StateList = require('./ledger-api/statelist.js');

const DeviceRecord = require('./devicerecord.js');

class DeviceRecordList extends StateList {
    constructor(ctx) {
        super(ctx,'edu.asu.devicerecordlist');
        this.use(DeviceRecord);
    }

    async addDRecord(drecord) {
        return this.addState(drecord);
    }

    async getDRecord(drecordKey) {
        return this.getState(drecordKey);
    }

    async updateDRecord(drecord) {
        return this.updateState(drecord);
    }

}

module.exports = DeviceRecordList;
