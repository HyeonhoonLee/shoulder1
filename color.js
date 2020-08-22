		var Links = {setColor: function(color, activecolor) {
		var alist = document.querySelectorAll('li>a');
		var i = 0
		while (i<alist.length) {
		alist[i].style.color = color;
		i += 1}	
		document.querySelector('#active').style.color = activecolor;
		}
	}
		
		var Body = {
			setBackgroundcolor: function(color) {
		document.querySelector('body').style.backgroundColor=color;	
		},
			setColor: function(color) {
		document.querySelector('body').style.color=color;
			} 
	}
		
		function darkwhitehandler(self) {
		var target = document.querySelector('body')
		if (self.value === 'dark mode '){										Body.setBackgroundcolor('black');			
		Body.setColor('white');
		self.value = 'white mode';
			Links.setColor('white', 'steelblue')
}
		else {
		Body.setBackgroundcolor('white');
		Body.setColor('black');
		self.value = 'dark mode ';
			Links.setColor('gray', 'steelblue')
}	
		} 