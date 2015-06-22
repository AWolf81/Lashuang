// homeController.js
angular.module('core.viewControllers')
.controller('homeController', HomeController);

function HomeController($stateParam) {
	//this.switcher = switchTemplateFactory;
	this.catalogue = [];
	this.word = $stateParam.word || '';
}

HomeController.$inject = ['$stateParam'];