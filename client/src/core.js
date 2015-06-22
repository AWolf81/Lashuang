// core.js

angular.module('core', ['core.viewControllers'])
.constant('PATH', {
	//includes: function() { return this.base + 'includes/'},
	views: 'src/views/',
	components: 'src/components/'
})
/*.constant('INCLUDES', {
	mainSearch: 'mainSearch.html',
	dict: 'dictContent.html',
	addNewVoc: 'addNewVocabulary.html'
})*/
/* switcher not needed done with ui-router views
.factory('switchTemplateFactory', function (PATH, INCLUDES) {
    return {
        getInclude: function () {
			var searched = false; //Important Variable
			if(searched){
				return PATH.includes() + INCLUDES.dict;
			}
			return PATH.includes() + INCLUDES.mainSearch;
		},
		includePopup: function () {
			var incPop = false; //Important Variable
			if(incPop){
				return PATH.includes() + INCLUDES.addNewVoc;
			}
			return '';
		},
        fundation: function () {
            //$scope.switcher.includePopup();
        }
    };
    //$scope.switcher.fundation();
});
*/
// initialize sub modules here 
angular.module('core.viewControllers', ['awCatalogueModule']);