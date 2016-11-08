App.register('q1', function(){
	return {
		findIntegerTripletWithLength: function(n){
			var c = Math.ceil(n/2-1);
			var b = Math.ceil((n-c)/2);
			var a = n-c-b;
			return (function step(){
				c2 = c*c; ab2 = a*a+b*b;
				if(c2 === ab2) return [c,b,a];
				else {
					if (c2>ab2) { c--; a++; c--; b++; }
					else { c++; b--; }
					return step();
				}
			})();
		}
	}
});