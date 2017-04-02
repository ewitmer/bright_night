'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = require('../models/users');
var moment = require('moment');
moment().format();

// returns an object with {date: count of books read}
var getGoalData = function getGoalData(data) {
    var newObj = {};
    for (var i = 0; i < data.length; i++) {
        if (newObj.hasOwnProperty(data[i].date)) {
            newObj[data[i].date] = newObj[data[i].date] + data[i].counter;
        } else {
            newObj[data[i].date] = data[i].counter;
        }
    }
    return newObj;
};

// returns start date pass in the consolidated object from getGoalData
var getMinDate = function getMinDate(data) {
    var newData = (0, _keys2.default)(data);
    var minDate = newData.reduce(function (prev, curr) {
        if (moment(curr) < prev || prev === undefined) {
            return moment(curr);
        } else {
            return prev;
        }
    }, undefined);
    return minDate;
};

// returns end date pass in the consolidated object from getGoalData
var getMaxDate = function getMaxDate(data) {
    var newData = (0, _keys2.default)(data);
    var maxDate = newData.reduce(function (prev, curr) {
        if (moment(curr) > prev || prev === undefined) {
            return moment(curr);
        } else {
            return prev;
        }
    }, undefined);
    return maxDate;
};

// calculates total days pass in the consolidated object from getGoalData
var getTotalDays = function getTotalDays(data) {
    return getMaxDate(data).diff(getMinDate(data), 'days') + 1;
};

//calculates total reading days pass in the consolidated object from getGoalData
var getReadingDays = function getReadingDays(data) {
    return (0, _keys2.default)(data).length;
};

// pass in the consolidated object from getGoalData
var getDailyGoal = function getDailyGoal(data, goal) {
    var counter = 0;
    for (var date in data) {
        if (data[date] >= goal) {
            counter++;
        }
    }
    return {
        goalDays: counter,
        totalDays: (0, _keys2.default)(data).length,
        ratioDays: counter / (0, _keys2.default)(data).length
    };
};

// pass in the consolidated object from getGoalData
var getWeeklyGoal = function getWeeklyGoal(data, goal) {

    var goalWeeks = 0;
    var minDate = getMinDate(data);
    var maxDate = getMaxDate(data);
    var totalDays = getTotalDays(data);
    var totalWeeks = Math.floor(totalDays / 7);
    var daysArray = (0, _keys2.default)(data);

    if (totalWeeks === 0) {
        return { goalWeeks: 0,
            totalWeeks: 0,
            ratioWeeks: 0
        };
    }

    for (var w = 0; w < totalWeeks; w++) {
        var thisWeek = 0;
        for (var d = 0; d < 7; d++) {
            if (daysArray.includes(minDate.format("YYYY-MM-DD"))) {
                thisWeek++;
            }
            minDate.add(1, 'days');
        }
        if (thisWeek >= goal) {
            goalWeeks++;
        }
    }
    return { goalWeeks: goalWeeks,
        totalWeeks: totalWeeks,
        ratioWeeks: goalWeeks / totalWeeks
    };
};

exports.fetchData = function (req, res, next) {
    // check if user exists
    var id = req.params.id;
    console.log(req.params.id);

    if (!id) {
        return res.status(422).send({ error: "You are not logged in" });
    }

    User.findById(id, function (err, user) {
        if (err) {
            return next(err);
        }

        var totalBooks = user.eventArray.reduce(function (acc, val) {
            return acc + val.counter;
        }, 0);

        var dailyGoals = getDailyGoal(getGoalData(user.eventArray), user.goals.goalBooks);
        var weeklyGoals = getWeeklyGoal(getGoalData(user.eventArray), user.goals.goalDays);

        res.json({
            activity: user.eventArray,
            goals: user.goals,
            totalBooks: totalBooks,
            dailyGoals: dailyGoals,
            weeklyGoals: weeklyGoals
        });
    });
};