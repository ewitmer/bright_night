const User = require('../models/users');
const moment = require('moment');
moment().format();

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


exports.fetchData = function(req, res, next) {
	// check if user exists
	const id = req.params.id;
	console.log(req.params.id)

	if (!id) {
		return res.status(422).send({error: "You are not logged in"})
	}

	User.findById(id, function(err, user) {
		if (err) { return next(err) } 

		const totalBooks = user.eventArray.reduce((acc, val) => {
    		return acc + val.counter
  		},0);

		const dailyGoals = getDailyGoal(getGoalData(user.eventArray),user.goals.goalBooks);
		const weeklyGoals = getWeeklyGoal(getGoalData(user.eventArray),user.goals.goalDays);



		res.json({ 
			activity: user.eventArray,
			goals: user.goals,
			totalBooks: totalBooks,
			dailyGoals: dailyGoals,
			weeklyGoals: weeklyGoals
		});
	})
}