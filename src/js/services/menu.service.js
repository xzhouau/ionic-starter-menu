starter.services.factory('Menu', function() {
	// Test data
	var menus = [{
		"id": 1,
		"label": "Kongpao chicken",
		"description": "This is a test",
		"category": "DINNER",
		"price": 19.99,
		"images": [
			"http://ewallpapers-hub.com/wp-content/uploads/2015/03/Chinese-Food-desktop-Wallpaper-HD.jpg",
			"http://www.seriouseats.com/images/20110408-soup-dumpling11.jpg"
		]
	}, {
		"id": 2,
		"label": "Spicy szechuan eggplant",
		"description": "This is a test",
		"category": "DINNER",
		"price": 19.99,
		"images": [
			"http://ewallpapers-hub.com/wp-content/uploads/2015/03/Chinese-Food-desktop-Wallpaper-HD.jpg",
			"http://www.seriouseats.com/images/20110408-soup-dumpling11.jpg"
		]
	}, {
		"id": 3,
		"label": "Yasai yaki ramen",
		"description": "This is a test",
		"category": "DINNER",
		"price": 19.99,
		"images": [
			"http://ewallpapers-hub.com/wp-content/uploads/2015/03/Chinese-Food-desktop-Wallpaper-HD.jpg",
			"http://www.seriouseats.com/images/20110408-soup-dumpling11.jpg"
		]
	}];

	return {
		all: function() {
			return menus;
		},

		get: function(id) {
			angular.forEach(menus, function(menu) {
				if (menu.id === parseInt(id)) {
					return menu;
				}
			})
			return null;
		}
	}
});
