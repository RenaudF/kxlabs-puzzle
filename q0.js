App.register('q0', function(){
	return {
		rotate: function(c, k){
			for (var i=0; i<k; i++)
				c.unshift(c.pop())
			return c;
		}
	}
});