write.controller('mainCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    $scope.doc={}
    $scope.doc.title="newFile";
    $scope.doc.sourceCode="you are ready to start typing";

    sharejs.open('home', 'text', function(error, doc) {
       doc.attach_textarea(pad);
   });
   
  }
]);
