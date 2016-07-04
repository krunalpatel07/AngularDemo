var appDirectives = angular.module('appDirectives',[]);

appDirectives.directive('testExample',function(){
	return {
		restrict : 'AE',
		template : '<div>from directives</div>',
		replace	: true,
		link : function(scope,el,attr){
			el.on('click',function(){
				alert('test');
			});
			console.log(scope);
			console.log(el);
			console.log(attr);
		}
	};
});
