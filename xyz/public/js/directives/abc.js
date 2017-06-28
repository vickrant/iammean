acjvDir.directive('abc', ['$rootScope', '$sce', function($rootScope, $sce) {
    return {
        scope: {
            model: "=txtmodel"
        },
        link: function(scope, element, attrs) {
          console.log(element);
          console.log(attrs);

         

            
        }
    }
}]);


