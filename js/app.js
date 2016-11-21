const app = angular.module("cv", []); 
app.controller("contentController", ($scope) => {
    $scope.languages = cvmodel.languages;
});

app.directive("awesomeIcon",() => {
	return {
		template: '<h2><i class="fa fa-code" aria-hidden="true"></i> Languages</h2>'
	}
});