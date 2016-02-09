var resume = require('./../resume.json');

var _ = require('underscore');
var moment = require('moment');
require('./vendor/moment-precise-range.js');

module.exports = angular.module('appHome', []);

angular.module('appHome')
  .controller('MainController', function ($scope) {


    if (resume.languages) {
        resume.basics.languages = _.pluck(resume.languages, 'language').join(', ');
    }

    _(resume.basics.profiles).each(function(profile) {
        profile.label = profile.network.toLowerCase();
    });

    _.each(resume.work, function(workInfo) {
        var startDate = moment(workInfo.startDate);
        var endDate = workInfo.endDate;

        if (startDate) {
            endDate = endDate ? moment(endDate) : moment();
            workInfo.duration = moment.preciseDiff(startDate, endDate);
        }
    });

    if (resume.interests) {
        resume.interests.list = _.pluck(resume.interests, 'name').join(', ');
    }

    $scope.resume = resume;
  });
