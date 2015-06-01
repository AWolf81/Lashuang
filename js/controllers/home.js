app.controller("homeController", ["$scope", "$rootScope", "$location", "FIREBASE_URL", "$firebaseArray", "pageLoad", "Upload", function ($scope, $rootScope, $location, FIREBASE_URL, $firebaseArray, pageLoad, Upload) {
    
    //initial function running
    pageLoad.iniFunc();
    
    //Get input fileds value
    $scope.checkInput = function () {

        var ref = new Firebase(FIREBASE_URL + "dictionary");
        $scope.dictionary = $firebaseArray(ref);
        //Add query function !!!
        
        $scope.searchWordLength = $('input.input').val().length;
        $scope.resultItems = $('.ajaxResultList li').length;

    };
	//Image Upload function
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
	$scope.log = '';
    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: '../php/uploader.php',
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.progressBar = progressPercentage;
					$('.uploadProgress .bar').css("width", progressPercentage +'%');
					$scope.log = 'Progress: ' + progressPercentage + '%'
                }).success(function (data, status, headers, config) {
                    
                    var _fileName = config.file.name;
                    var _fileNameArr = _fileName.split('.');
                    
                    $rootScope.upluadFileName = _fileNameArr[0];
                    $rootScope.upluadFileFullName = _fileNameArr[0] + '.' + _fileNameArr[1]
                    $rootScope.upluadFile = files[0];
                    console.log("upluadFileName: " + $rootScope.upluadFileName + '; upluadFileFullName: ' + $rootScope.upluadFileFullName);
                    //$location.path('/dict');
                });
            }
        }
    };
}]);