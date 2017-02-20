(function () {
    var app = angular.module("pageApp", []);
    app.factory("appData", ['$http', function ($http) {
            var obj = {};
            obj.data = function () {
                return $http.get('js/data.json');
            };
            return obj;
        }]);
    app.controller('firstController', ['$scope', 'appData', function ($scope, appData) {
            appData.data().then(function (data) {
                $scope.info = data;
                $scope.sections = $scope.info.data.sections;
                $scope.users = $scope.info.data.users;
                $scope.parentIdx = '';
                $scope.innerParentIdx = '';
                $scope.username = 'Dr. Halima';
                $scope.image = 'halima';
                $scope.memberFor = '5 months';
                $scope.activityLevel = 'imgs/activity_sum.jpg';
                $scope.lastSeen = 'Saturday afternoon';
                $scope.getNameAsking = function (parentIdx) {
                    for (var i = 0; i < $scope.users.length; i++) {
                        if ($scope.users[i].name === $scope.sections[parentIdx].asking) {
                            $scope.username = $scope.users[i].name;
                            $scope.image = $scope.users[i].img;
                            $scope.memberFor = $scope.users[i].memberFor;
                            $scope.activityLevel = $scope.users[i].activityLevel;
                            $scope.lastSeen = $scope.users[i].lastSeen;
                        }
                    }
                };
                $scope.getNameComment = function (parentIdx, innerParentIdx) {
                    for (var i = 0; i < $scope.users.length; i++) {
                        if ($scope.users[i].name === $scope.sections[parentIdx].commented[innerParentIdx]) {
                            $scope.username = $scope.users[i].name;
                            $scope.image = $scope.users[i].img;
                            $scope.memberFor = $scope.users[i].memberFor;
                            $scope.activityLevel = $scope.users[i].activityLevel;
                            $scope.lastSeen = $scope.users[i].lastSeen;
                        }
                    }
                };
                $scope.getNameAnswered = function (parentIdx) {
                    for (var i = 0; i < $scope.users.length; i++) {
                        if ($scope.users[i].name === $scope.sections[parentIdx].answered) {
                            $scope.username = $scope.users[i].name;
                            $scope.image = $scope.users[i].img;
                            $scope.memberFor = $scope.users[i].memberFor;
                            $scope.activityLevel = $scope.users[i].activityLevel;
                            $scope.lastSeen = $scope.users[i].lastSeen;
                        }
                    }
                };

            });
        }]);
    app.controller('secondController', ['$scope', 'appData', function ($scope, appData) {
            appData.data().then(function (data) {
                $scope.info = data;
                $scope.oneQS = $scope.info.data.oneQuestionSection;
                console.log($scope.oneQS, $scope.oneQS.asking);

            });
        }]);
    //headers
    app.directive('headerbase', function () {
        return{
            templateUrl: 'htmls/header_all.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('headersingle', function () {
        return{
            templateUrl: 'htmls/header_single.html',
            replace: false,
            restrict: 'AEC'
        };
    });
    //modal
    app.directive('mymodal', function () {
        return{
            templateUrl: 'htmls/modal.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('mymodalraw', function () {
        return{
            templateUrl: 'htmls/modalraw.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    //sections
    app.directive('sectionbase', function () {
        return{
            templateUrl: 'htmls/section_all.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('section1', function () {
        return{
            templateUrl: 'htmls/section1.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('section2', function () {
        return{
            templateUrl: 'htmls/section2.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('section3', function () {
        return{
            templateUrl: 'htmls/section3.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    //sections elements
    app.directive('response', function () {
        return{
            templateUrl: 'htmls/response.html',
            replace: true,
            restrict: 'AEC'
        };
    });
    app.directive('headingPhotoDiv', function () {
        return{
            templateUrl: 'htmls/heading_photo_div.html',
            replace: true,
            restrict: 'AEC'
        };
    });

})();
