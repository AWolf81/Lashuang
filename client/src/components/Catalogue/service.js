// service.js
angular.module('awCatalogueModule')
.factory('catalogDataService', CatalogService);

function CatalogService($http) {

	return {
		getDict: function() {
			return $http.get('data/dict.json');
		},
		getPos: function() {
			return $http.get('data/pos.json');
		}
	}
}

CatalogService.$inject = ['$http'];