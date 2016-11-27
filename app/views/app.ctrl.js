write.controller('appCtrl', ['$rootScope', '$scope', '$location',
  function($rootScope, $scope,$location) {

    $scope.isDocOpen=false;

    $scope.changeLocation=function(url){
      console.log ($location.url());
      console.log (url);
      $location.path('/'+url);
      $scope.openFile(url);
    }


    $scope.openFile=function(fileName){
      $scope.isDocOpen=true;

      sharejs.open(fileName, 'text', function(error, doc) {
         doc.attach_textarea(pad);
      });

    }



  }
]);
