var app = angular.module('LaShuang', ['ngFileUpload']);

app.service('globalData', function () {
	var _searchable = false;
	var _incPop = false;
    var _uploadedImageName = '';
    var _uploadedImage = {};
    
	this.searchable = _searchable;
	this.incPop = _incPop;
    this.uploadedImageName = _uploadedImageName;
	this.uploadedImage = _uploadedImage;
});

// #1 Scope => controller = switchTemplate
app.controller('switchTemplate',function ($scope, globalData) {
    $scope.switcher = {
        getInclude: function () {
			var searched = globalData.searchable; //Important Variable
			if(searched){
				return 'includes/dictContent.html';
			}
			return 'includes/mainSearch.html';
		},
		includePopup: function () {
			var included = globalData.incPop; //Important Variable
			if(included){
				return 'includes/addNewVocabulary.html';
			}
			return '';
		},
        fundation: function () {
            //Fundation function
        }
    };
});

// #2 Scope => ng-include


// #3 Scope => controller = pageLoad
app.controller('pageLoad', function ($scope, $http) {
    $scope.scriptHandler = {
		isMobile : function () {
			var isNotMobile = (function () {
				var check = false;
				(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true} )(navigator.userAgent || navigator.vendor || window.opera);
                return check;
			})();
			switch (isNotMobile) {
				case true:
					$scope.scriptHandler.progressBtn();
					break;
				case false:
					break;
				default:
					return false;
			}
		},
		getBrowser : function () {
			//return  navigator ? navigator.userAgent.toLowerCase() : "other";
			if (navigator.userAgent.indexOf("Chrome") != -1) {
				return 'Chrome';
			}
			else if (navigator.userAgent.indexOf("Opera") != -1) {
				return 'Opera';
			}
			else if (navigator.userAgent.indexOf("Firefox") != -1) {
				return 'Firefox';
			}
			else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
				return 'IE';
			}
			else {
				return 'unknown';
			}
			//
		},
		addClassTo : function (claName) {
			$(claName).addClass('moz');
		},
		progressBtn : function () {
			var progressBar = new ProgressBar.Circle('.uploadProgressBtn', {
				strokeWidth: 5,
				color: "#666",
				fill: "#000",
				trailColor: "#666",
				trailWidth: 5,
				text: {
					value: ' ',
					color: 'transparent',
					className: 'progressbarText',
					autoStyle: false
				},
				duration: 1200,
				easing: "easeOut"
			});
			
			progressBar.animate(1, {
				duration: 2000,
				easing: "easeInOut",
			}, function() {
				//console.log('Animation has finished');
			});
		},
        showSearchInputVal : function () {
            var searchInput = $('#searchWrapper .input');
            searchInput.keyup(function () {
				var strLength = searchInput.val().length;
				if (strLength > 0) {
					console.log("Typed!!!");
                    
                    //searchHandler.readJSON();
                    
					$('.uploadBar').hide();
					$('.ajaxResultWrapper').slideDown('fast');
				} else if (strLength == 0) {
					$('.ajaxResultWrapper').slideUp('fast', function () {
						$('.uploadBar').show();
					});
				}
			});
        },
        requiredFunc : function () {
            $("[data-toggle='tooltip']").tooltip();
            // ##1 - Bind the upload btn
            $('#searchWrapper .upload').click(function () {
                $('#searchWrapper .uploadBtn').click();
            });
            
            $('#searchWrapper .uploadMobile').click(function () {
                $('#searchWrapper .uploadBtn').click();
            });

            $('.ajaxResultWrapper').hide();

            $('.input').on('focus', function () {
                $('.searchIcon .icon').addClass('focus');
            });

            $('.input').on('focusout', function () {
                $('.searchIcon .icon').removeClass('focus');
            });
            
            // Magnific Popup
            $('a.popup').magnificPopup({
                type: 'inline',
                midClick: true,
                closeBtnInside: true,
                closeOnBgClick: false,
                closeOnContentClick: false,
                mainClass: 'laPop mfp-fade',
                removalDelay: 300,
				fixedBgPos: true,
				callbacks: {
					open: function () {
						// Will fire when this exact popup is opened
						// this - is Magnific Popup object
					},
					close: function () {
						// Will fire when popup is closed
					},
					updateStatus: function (data) {
						console.log('Status changed', data);
						// "data" is an object that has two properties:
						// "data.status" - current status type, can be "loading", "error", "ready"
						// "data.text" - text that will be displayed (e.g. "Loading...")
						// you may modify this properties to change current status or its text dynamically
					},
					parseAjax: function (mfpResponse) {
						// mfpResponse.data is a "data" object from ajax "success" callback
						// for simple HTML file, it will be just String
						// You may modify it to change contents of the popup
						// For example, to show just #some-element:
						// mfpResponse.data = $(mfpResponse.data).find('#some-element');

						// mfpResponse.data must be a String or a DOM (jQuery) element

						console.log('Ajax content loaded:', mfpResponse);
					},
					ajaxContentAdded: function () {
						// Ajax content is loaded and appended to DOM
						console.log(this.content);
					}
				}
            });
        },
		pageload : function () {
			// #0 - Running the required functions

			// #2 - Check if open the site on Mobile or not
			$scope.scriptHandler.isMobile();
            $scope.scriptHandler.requiredFunc();
			$scope.scriptHandler.showSearchInputVal();
//			$http.get("../includes/ajax/test.php").success(function (data) {
//				$scope.tasks = data;
//				console.log($scope.tasks);
//			});
		}
	};
    //END OF Handler
    $scope.scriptHandler.pageload();
});



app.controller('MyCtrl', ['$scope', 'Upload', 'globalData', function ($scope, Upload, globalData) {
    
    $('.img').hide();
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    
    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                globalData.uploadedImage = file;
    console.log("Images is " +  globalData.uploadedImage);
                Upload.upload({
                    url: '../includes/uploader.php',
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + " Data is " + data);
                    //$('.img').show();
					globalData.searchable = true;
                    globalData.uploadedImageName = config.file.name;
                    console.log("globalData.uploadedImageName is " +  globalData.uploadedImageName );
					
                });
            }
        }
    };
}]);



app.controller('showUploadInfo', ['$scope', 'Upload', 'globalData', function ($scope, Upload, globalData) {
    $scope.fileNamed = globalData.uploadedImageName;
    console.log("$scope.files is " + $scope.fileNamed);
    $scope.file = globalData.uploadedImage;
    console.log("$scope.file is " + $scope.file);
    $('.img').show();
    $('.name').append($scope.fileNamed);
    
}]);

app.controller('MyCtrl1', ['$scope', 'Upload', 'globalData', function ($scope, Upload, globalData) {
    
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: '../includes/uploader.php',
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name );
                    $('.img').show();
					globalData.searchable = true;
					
                });
            }
        }
    };
    
}]);