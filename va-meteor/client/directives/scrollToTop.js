angular.module('VA').directive('scrollToTop', [function() { 

		// TO FIX: Scroll bar goes up twice (if scrolling down)
		return { 	

			 restrict: "A", 
			 link:function(scope, elem, attr) { 


			 		console.log(elem)
			 		console.log('dir')
			
					$("html, body").animate({ scrollTop: 0 }, "slow");

			 }


		}
		
}]);
