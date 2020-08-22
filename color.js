		var Links = {setColor: function(color, activecolor) {
		// --- original code ---
		// var alist = document.querySelectorAll('li>a');
		// var i = 0
		// while (i<alist.length) {
		// alist[i].style.color = color;
		// i += 1}
		// --- Using jQuery as follows ---
		$('li>a').css('color', color)
		document.querySelector('#active').style.color = activecolor;
		}
	}
		
		var Body = {
			setBackgroundcolor: function(color) {
		// --- original code ---
		//document.querySelector('body').style.backgroundColor=color;
		$('body').css('backgroundColor', color)
		},
			setColor: function(color) {
		// --- original code ---
		//document.querySelector('body').style.color=color;
		$('body').css('color', color)	} 
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