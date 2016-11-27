var write = angular.module('write', [
									'ngAnimate',
                  'btford.markdown'

									],function($locationProvider){
                      $locationProvider.html5Mode({
                        enabled: true,
                        requireBase: false
                      });
                  });


write.controller('appCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

}]);
