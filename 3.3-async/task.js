class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id) {
        if (id == undefined) {
            throw new Error('Не ввели ID');
        } else if (this.alarmCollection.some(alarm => alarm.id == id)) {
            throw new Error('Звонок с таким ID уже есть');
        }
        this.alarmCollection.push({
            id,
            time,
            callback
        });

    }
    removeClock(id) {
        let newAlarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        let removeStatus = newAlarmCollection.length < this.alarmCollection.length ? true : false;
        this.alarmCollection = newAlarmCollection;
        console.log(removeStatus);
        return removeStatus;
    }
    getCurrentFormattedTime () {
        let currentDate = new Date();
        let currentTime = currentDate.getHours() + ':' + currentDate.getMinutes();
        return currentTime;
    }
    start () {
        function checkClock (alert) {
            if(alert.time == currentTime) {
                callback();
            } else if (this.timerId == undefined) {
                this.timerId = setInterval();
                this.alarmCollection.forEach(function (alert) {
                    checkClock(alert);
                })
            } 
        }
       

        

    }

    stop () {
        if (this.timerId !== '') {
            this.timerId.clearInterval();
        }
    }

    printAlarms () {
        this.alarmCollection.forEach(alarm => console.log(alarm.id + '' + alarm.time));
    }

    clearAlarms () {
        this.alarmCollection = [];
    }



}


const newAlarmClock = new AlarmClock();

newAlarmClock.addClock(434, 'gngg', 22);
newAlarmClock.addClock(874, 'gfgg', 322);
newAlarmClock.addClock(5344, 'gsgg', 422);
newAlarmClock.removeClock(322);
newAlarmClock.removeClock(322);
newAlarmClock.removeClock(422);
newAlarmClock.getCurrentFormattedTime();