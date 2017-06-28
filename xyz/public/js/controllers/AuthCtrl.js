acjvCtrl.controller('AuthController', function($scope,$rootScope,authService,toastr) 
{

	$scope.signupformsubmit =function()
	{

		//alert('form data will be subimmited form here');

		var data =	{

			"email": "manninder@gmail.com",
			"password":"sdfdsfsdf"
		};
	    alert('asdasdasd');

	    $rootScope.$emit('SOME_TAG', data);

		// authService.create(data, function(result,cb){
		// 	console.log(result);
		// 	 toastr.success('Hello world!', 'Toastr fun!');
  //           $scope.result = result;
  //       }); 


	}

});