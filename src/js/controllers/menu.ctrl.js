starter.controllers.controller('MenuController', function($scope, $timeout, Menu, ionicMaterialInk) {
	$scope.menus = Menu.all();
	$scope.itemsPerRow = 3;

	// Set Ink
	ionicMaterialInk.displayEffect();
});
