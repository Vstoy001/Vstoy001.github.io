(function () {
    angular.module('pageApp')
        .controller('main', Main);

    function Main($scope) {
        $scope.test = 'hi';
    }
})();