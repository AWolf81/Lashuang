// directive.js
angular.module('awCatalogueModule', [])
.directive('catalogueDir', CatalogueDirective);

function CatalogueDirective($filter, PATH) {
	return {
		restrict: 'E',
		scope: {
			catalogue: '=',
			filter: '='
		},
		templateUrl: PATH.components + 'Catalogue/catalogueTmpl.html',
		controller: function($scope, catalogDataService) {
			catalogDataService.getDict().then(function(response) {
				console.log(response.data);
				$scope.catalogue = $filter('filter')(response.data.words, {word: $scope.filter});
			});
		},
		link: function(scope, element, attrs) {
			console.log('Hello from catalogue directive!');
		}
	}
}

CatalogueDirective.$inject = ['$filter', 'PATH', 'catalogDataService'];