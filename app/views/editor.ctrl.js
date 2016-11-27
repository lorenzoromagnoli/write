write.controller('editorCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    $scope.doc={}
    $scope.doc.title="newFile";
    $scope.doc.sourceCode=". . . ";


    sharejs.open('home', 'text', function(error, doc) {
       doc.attach_textarea(pad);
   });

  }
]);
