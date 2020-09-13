
class Player{
	constructor(){
		var xy = document.getElementById('player');
		xy.style.height = '100vh'; 
		if(screen.width < 500){
			xy.style.width = screen.width + 'px';
		}
		var con = document.getElementById('content');
		con.style.height = '400px';
	}
}
onload = new Player();

	// class buttons  play  puse next back 
class Audio_plyer{
	constructor(){
		this.playStop = document.getElementById('playStop');  
		this.audio = document.getElementById('audio');
		this.title_audio = document.getElementById('title_audio');
		this.isPlay;
		
		playStop.onclick = ()=>{this.play_puse();};
		
		this.names_radio = []; 
		this.names_radio[0] = 'RADIO  قران'; 
		this.names_radio[1] = 'RADIO هلا';	  
		this.names_radio[2] = 'RADIO  سوا'; 
		this.names_radio[3] = 'RADIO  مرايا'; 
		
		this.source_radio = [];	 
		this.source_radio[0] = 'http://live.mp3quran.net:9972/;';   
		this.source_radio[1] = ' http://108.61.34.50:7026/stream';  
		this.source_radio[2] = 'https://mbn-channel-02.akacast.akamaistream.net/7/32/233451/v1/ibb.akacast.akamaistream.net/mbn_channel_02';  
		this.source_radio[3] = 'http://s3.myradiostream.com:15918/;stream.mp3';  
		 

		this.server = 0;
		
		this.setResource();
		
		document.getElementById('next').onclick = ()=>{
			if(this.server < this.source_radio.length-1){
				++this.server;
				this.isPlay = false;
			}else { this.server = 0;}
			localStorage.setItem('save-position' , this.server);
			this.setResource();
		};
		document.getElementById('back').onclick = ()=>{ 
			if(this.server > 0){
				--this.server;
				this.isPlay = false;
			}else {this.server = this.source_radio.length-1;}
			localStorage.setItem('save-position' , this.server);
			this.setResource();
		};
	}
		
		setResource(){
			if(localStorage.getItem('save-position') != null ){
				this.server = localStorage.getItem('save-position');
			} 
			this.audio.src = this.source_radio[this.server];
			this.title_audio.innerHTML = this.names_radio[this.server]; 
			this.play_puse();
		}
		
		play_puse(){
			if(this.isPlay == false){
				this.isPlay = true;
				this.audio.play();
				this.playStop.setAttribute('class' , 'fa fa-stop');
				console.log('play');
			}else{
				this.isPlay = false;
				this.audio.pause();
				this.playStop.setAttribute('class' , 'fa fa-play');
				console.log('stop');
			}
		}
		
}	
onload = new Audio_plyer();

// end class
	
//class Volume 
		class Volume{
			constructor(){ 
				this.audio = document.getElementById('audio');
				this.audio.volume = 50/100 ;
				
				this.voice = document.getElementById('voice');
				voice.onchange = ()=>{
					this.audio.volume = this.voice.value/100;
					console.log(this.voice.value/100);
				};
				
				this.speed = document.getElementById('speed'); 
				this.audio.playbackRate = 1;
				speed.onchange = ()=>{
					this.audio.playbackRate = this.speed.value/100;
				};
				
			}
			
		}
	
	onload = new Volume();
	
	
// end	
	 
// class color

class Color{
	constructor(){
		this.color1 = document.getElementById('color1');
		this.color2 = document.getElementById('color2');
		this.color3 = document.getElementById('color3'); 
		this.color4 = document.getElementById('color4'); 
		this.defualt = document.getElementById('defualt'); 
		this.allcolor = document.getElementById('allcolor');
		
		defualt.onclick   =  ()=>{this.select_color(defualt)};
		color1.onclick    =  ()=>{this.select_color(color1)};
		color2.onclick    =  ()=>{this.select_color(color2)};
		color3.onclick    =  ()=>{this.select_color(color3)};
		color4.onclick    =  ()=>{this.select_color(color4)}; 
		allcolor.oninput =  ()=>{this.select_color(allcolor); console.log(allcolor.value);};
		if(localStorage.getItem('COLOR_RADIO') == null){ this.select_color('#263238');}
		else { this.select_color(localStorage.getItem('COLOR_RADIO'));}
		this.backColor();
	}
	backColor(){
				var colortext = localStorage.getItem('colorText')
				var colorback = localStorage.getItem('COLOR_RADIO')
			  document.getElementById('playStop').style.color = colortext; 
			  document.getElementById('back').style.color     = colortext; 
			  document.getElementById('next').style.color     = colortext; 
			  document.getElementById('text1').style.color    = colortext; 
			  document.getElementById('text2').style.color    = colortext; 
			  document.body.style.background = colorback;
			  document.getElementById('allcolor').value  = colortext;
	}
	select_color(color){ 
		switch(color){
			case color1:
			  document.body.style.background = 'linear-gradient(to right, rgb(9, 101, 179), rgba(0, 156, 255, 0.34))'; 
			  document.getElementById('playStop').style.color = 'rgb(9, 101, 179)';
			  document.getElementById('back').style.color     = 'rgb(9, 101, 179)';
			  document.getElementById('next').style.color     = 'rgb(9, 101, 179)';
			  document.getElementById('text1').style.color    = 'rgb(9, 101, 179)';
			  document.getElementById('text2').style.color    = 'rgb(9, 101, 179)';
			  localStorage.setItem('colorText' ,  'rgb(9, 101, 179)');
			  localStorage.setItem('COLOR_RADIO' , 'linear-gradient(to right, rgb(9, 101, 179), rgba(0, 156, 255, 0.34)) ');
			break;
			case color2:
			  document.body.style.background = 'linear-gradient(to right, rgb(0, 156, 99), rgb(162, 220, 204))'; 
			  document.getElementById('playStop').style.color = 'rgb(0, 156, 99)';
			  document.getElementById('back').style.color     = 'rgb(0, 156, 99)';
			  document.getElementById('next').style.color     = 'rgb(0, 156, 99)';
			  document.getElementById('text1').style.color    = 'rgb(0, 156, 99)';
			  document.getElementById('text2').style.color    = 'rgb(0, 156, 99)';
			  localStorage.setItem('colorText' ,  'rgb(0, 156, 99)');
			  localStorage.setItem('COLOR_RADIO' , 'linear-gradient(to right, rgb(0, 156, 99), rgb(162, 220, 204)) ');
			break;
			case color3: 
			  document.body.style.background = 'linear-gradient(to right, rgba(255, 71, 0, 0.95), rgb(234, 180, 141))'
			  document.getElementById('playStop').style.color = 'rgba(255, 71, 0, 0.95)';  
			  document.getElementById('back').style.color     = 'rgba(255, 71, 0, 0.95)';
			  document.getElementById('next').style.color     = 'rgba(255, 71, 0, 0.95)';
			  document.getElementById('text1').style.color    = 'rgba(255, 71, 0, 0.95)';
			  document.getElementById('text2').style.color    = 'rgba(255, 71, 0, 0.95)';
			  localStorage.setItem('colorText' ,  'rgba(255, 71, 0, 0.95)');
			  localStorage.setItem('COLOR_RADIO' , 'linear-gradient(to right, rgba(255, 71, 0, 0.95), rgb(234, 180, 141)) ');
			break;
			case color4:
			  document.body.style.background= 'linear-gradient(to right, rgb(220, 2, 213), rgb(215, 210, 218))'; 
			  document.getElementById('playStop').style.color = 'rgb(220, 2, 213)';  
			  document.getElementById('back').style.color     = 'rgb(220, 2, 213)';
			  document.getElementById('next').style.color     = 'rgb(220, 2, 213)';
			  document.getElementById('text1').style.color    = 'rgb(220, 2, 213)';
			  document.getElementById('text2').style.color    = 'rgb(220, 2, 213)';
			  localStorage.setItem('colorText' ,  'rgb(220, 2, 213)');
			  localStorage.setItem('COLOR_RADIO' , 'linear-gradient(to right, rgb(220, 2, 213), rgb(215, 210, 218))');
			break;
			case defualt:
			  document.body.style.background= '#263238'; 
			  document.getElementById('playStop').style.color = '#263238';  
			  document.getElementById('back').style.color     = '#263238';
			  document.getElementById('next').style.color     = '#263238';
			  document.getElementById('text1').style.color    = '#263238';
			  document.getElementById('text2').style.color    = '#263238';
			  localStorage.setItem('colorText' ,  '#263238' );
			  localStorage.setItem('COLOR_RADIO' ,  '#263238' );
			break;
			case allcolor:
				let colors = ""+ allcolor.value;
			  document.body.style.background =  colors; 
			  document.getElementById('playStop').style.color = colors;  
			  document.getElementById('back').style.color     = colors;  
			  document.getElementById('next').style.color     = colors;
			  document.getElementById('text1').style.color    = colors;
			  document.getElementById('text2').style.color    = colors;
			  document.getElementById('allcolor').style.color    = colors;
			  localStorage.setItem('colorText' ,  colors);
			  localStorage.setItem('COLOR_RADIO' , colors );
			break;
		} 
		 
	}
}
onload = new Color();
	 
	  
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 