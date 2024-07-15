/*var sound1= new Audio();
sound1.src="gathividi.mp3";

var sound2= new Audio();
sound2.src="nachmerirani.mp3";

var sound3= new Audio();
sound3.src="Shiddat.mp3";

var sound4= new Audio();
sound4.src="Tanhaai.mp3";

var sound5= new Audio();
sound5.src="BadMunda.mp3";

var sound6= new Audio();
sound6.src="MujhePeene.mp3";

var sound7= new Audio();
sound7.src="AsalMein.mp3";

var sound8= new Audio();
sound8.src="TeraHua.mp3";

var sound9= new Audio();
sound9.src="Moonlight.mp3";

*/
let audio;
let abc;

function pauseAudio(){
    if(audio){
        audio.pause();
      //  audio.currentTime=0;
    }
}

function playAudio(src){
    pauseAudio();
    audio = new Audio();
    audio.src=src;
    audio.play();
}

function stop(src){
    pauseAudio(src);
}