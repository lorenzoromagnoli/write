write.controller('editorCtrl', ['$rootScope', '$scope',
  function($rootScope, $scope) {

    $scope.doc={}
    $scope.doc.title="newFile";
    $scope.doc.sourceCode=". . . ";

  }
]);
