const app = angular.module("cv", []); 

/** Controllers **/

app.controller("contentController", ($scope) => {
	$scope.name = cvmodel.name;
    $scope.languages = cvList(cvmodel.languages);
    $scope.environments = cvList(cvmodel.environments);
    $scope.extensions = cvList(cvmodel.extensions);

    $scope.games = cvList(cvbonus.games);

});

app.controller("modalController", ($scope) => {
	$scope.modals = cvmodals;
	$scope.terminate = cvmodals.btn_terminate;
})

/** Directives **/

app.directive("awesomeIcon",() => {
	return {
		template: `<h2><i class="fa fa-code" aria-hidden="true"></i> Languages</h2>`
	}
});

/** Helper Functions **/

let cvList = (arr) => {
	return arr.join(', ');
}