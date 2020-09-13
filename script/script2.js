 var all = document.getElementById('all');
 	var btn = document.getElementById('btn'); 
 	var clear = document.getElementById('clear');
    
    btn.onclick = ()=>{
    	all.style.display = 'block'; 
    };
    clear.onclick = ()=>{
    	all.style.display = 'none'; 
    };
    
 	var left  = document.getElementById('left');
 	var right = document.getElementById('right');
 	var rect  = document.getElementById('rect');
	
    left.value  = '#ffffff';
    right.value = '#000000';
	
    var colorr1 = '#fff';
    var colorr2 = '#000';
    var re;
    re = 'linear-gradient(to right,'+ colorr1 +','+ colorr2 +')';
    rect.style.backgroundImage = re;
        
    left.oninput = ()=>{
    	colorr1 = ''+left.value;
        re = 'linear-gradient(to right,'+ colorr1 +','+ colorr2 +')';
    	rect.style.backgroundImage = re;
			document.body.style.background = re;
			document.getElementById('playStop').style.color = colorr1;  
			document.getElementById('back').style.color     = colorr1;
			document.getElementById('next').style.color     = colorr1;
			document.getElementById('text1').style.color    = colorr1;
			document.getElementById('text2').style.color    = colorr1;
			localStorage.setItem('colorText' ,  colorr1);
			localStorage.setItem('COLOR_RADIO' , re);
			
    };
    right.oninput = ()=>{
    	colorr2 = ''+right.value;
        re = 'linear-gradient(to right,'+ colorr1 +','+ colorr2 +')';
    	rect.style.backgroundImage = re; 
			document.body.style.background = re;  
			localStorage.setItem('COLOR_RADIO' , re); 
    };