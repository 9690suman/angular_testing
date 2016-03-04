describe("Home Controller", function() {
	
	var $controller;
	
	beforeEach(module('app.movie'));

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	it("vm.helloWorld should be Hello World", function() {
		var homeController = $controller('homeController');
		expect(homeController.helloWorld).toEqual("hello World");
	});
});