const moment = require('moment');
moment().format();



const data = {
    "_id": {
        "$oid": "58ab996d54d0930a8b9fc704"
    },
    "email": "test123@user.com",
    "password": "$2a$10$31o4D4Yq9EmxCJjrm1l9iOY3QY3PNWaJFwjcWW.dd4r6nVqdQe6rS",
    "goals": {
        "goalDays": 5,
        "goalBooks": 5
    },
    "eventArray": [
        {
            "date": "2017-02-21",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-21",
            "counter": 1,
            "commentArray": [
                "test"
            ]
        },
        
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 3,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-22",
            "counter": 3,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-02-27",
            "counter": 0,
            "commentArray": [
                "test",
                "test"
            ]
        },
        
        {
            "date": "2017-02-27",
            "counter": 3,
            "commentArray": []
        },
        {
            "date": "2017-02-27",
            "counter": 0,
            "commentArray": []
        },
        {
            "date": "2017-02-27",
            "counter": 2,
            "commentArray": []
        },
        {
            "date": "2017-02-27",
            "counter": 4,
            "commentArray": []
        },
        {
            "date": "2017-02-28",
            "counter": 3,
            "commentArray": []
        },
        {
            "date": "2017-02-21",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-01",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-02",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-03",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-04",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-05",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
        {
            "date": "2017-03-06",
            "counter": 2,
            "commentArray": [
                "test"
            ]
        },
    ],
    "__v": 0
}

// returns an object with {date: count of books read}
const getGoalData = function(data) {
    const newObj = {}
    for (var i = 0; i < data.length; i++) {
        if(newObj.hasOwnProperty(data[i].date)) {
            newObj[data[i].date] = newObj[data[i].date] + data[i].counter
        } else {
            newObj[data[i].date] = data[i].counter
        }
        
    }
    return newObj;
}

// returns start date pass in the consolidated object from getGoalData
const getMinDate = function(data) {
	const newData = Object.keys(data);
    let minDate = newData.reduce(function(prev, curr){
		if (moment(curr) < prev || prev === undefined) {
			return moment(curr);
		} else {
			return prev;
		}
	}, undefined)
	return minDate;
}

// returns end date pass in the consolidated object from getGoalData
const getMaxDate = function(data) {
	const newData = Object.keys(data);
    let maxDate = newData.reduce(function(prev, curr){
		if (moment(curr) > prev || prev === undefined) {
			return moment(curr);
		} else {
			return prev;
		}
	}, undefined)
	return maxDate;
}

// calculates total days pass in the consolidated object from getGoalData
const getTotalDays = function(data) {
	return getMaxDate(data).diff(getMinDate(data), 'days') + 1
}

//calculates total reading days pass in the consolidated object from getGoalData
const getReadingDays = function(data) {
    return Object.keys(data).length
}

// pass in the consolidated object from getGoalData
const getDailyGoal = function(data, goal) {
    var counter = 0;
    for (var date in data) {
        if (data[date] >= goal) {
            counter++;
        }
    }
    return {
        goalDays: counter,
        totalDays: Object.keys(data).length,
        ratioDays: (counter / Object.keys(data).length)
    }
}

// pass in the consolidated object from getGoalData
const getWeeklyGoal = function(data, goal) {

    let goalWeeks = 0;
    let minDate = getMinDate(data);
    let maxDate = getMaxDate(data);
    let totalDays = getTotalDays(data);
    let totalWeeks = Math.floor(totalDays / 7);
    let daysArray = Object.keys(data);

    if (totalWeeks === 0) {
        return {goalWeeks: 0, 
            totalWeeks: 0,
            ratioWeeks: 0
        }
    }

    for (var w = 0; w < totalWeeks; w++) {
        let thisWeek = 0;
        for (var d = 0; d < 7; d++) {
            if(daysArray.includes(minDate.format("YYYY-MM-DD"))) {
                thisWeek++
            }
            minDate.add(1, 'days')
        }   
        if (thisWeek >= goal) {
            goalWeeks++
        }
    }
    return {goalWeeks: goalWeeks, 
            totalWeeks: totalWeeks,
            ratioWeeks: (goalWeeks/totalWeeks)
        }
}
    

console.log(getGoalData(data.eventArray));
console.log(getMinDate(getGoalData(data.eventArray)));
console.log(getMaxDate(getGoalData(data.eventArray)));
console.log(getTotalDays(getGoalData(data.eventArray)));
console.log(getReadingDays(getGoalData(data.eventArray)));
console.log(getDailyGoal(getGoalData(data.eventArray),4))
console.log(getWeeklyGoal(getGoalData(data.eventArray),3))



