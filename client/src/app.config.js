// app.config.js
angular.module('core').config(AppConfig);

function AppConfig($stateProvider, $urlRouterProvider, PATH) {
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/:word',
		controller: 'homeController',
		controllerAs: 'ctrl',
		views: {
			'header': {
				templateUrl: PATH.views + 'homeHeader.html',
			},
			'search': {
				templateUrl: PATH.views + 'mainSearch.html',
			},
			'popup': {
				templateUrl: PATH.views + 'popup.html',
				//controller: 'searchController'
			},
			"@" : { //absolute target to unamed ui-view of home
				templateUrl: PATH.views + 'content.html',
			} 
		}
	});
}

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'PATH'];