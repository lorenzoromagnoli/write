write.controller('appCtrl', ['$rootScope', '$scope', '$location',
  function($rootScope, $scope,$location) {

    $scope.isDocOpen=false;

    $scope.doc={};
    $scope.doc.title =" ";
    $scope.doc.sourceCode=". . . ";


    angular.element(document).ready(function () {
      var location=$location.url().substring(1);;

      if (location==""){

      }else{
        $scope.isDocOpen=true;
        $scope.changeLocation(location);
      }


    });




    $scope.changeLocation=function(url){
      console.log ($location.url());
      console.log (url);
      $location.path('/'+url);
      $scope.openFile(url);
    }


    $scope.openFile=function(fileName){
      $scope.isDocOpen=true;
      $scope.doc.title=fileName;

      sharejs.open(fileName, 'text', function(error, doc) {
         doc.attach_textarea(pad);
      });

    }



  }
]);
