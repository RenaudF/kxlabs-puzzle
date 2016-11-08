App.register('q2', function(){
	return {
		factorial: function factorial(n){
			if (n<3) return n;
			else return n*factorial(n-2);
		}
	}
});