var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("texbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    var Content=event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    speak();

}
function speak(){
    var sintences=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value ;
    var traducion=new SpeechSynthesisUtterance(speak_data);
    sintences.speak(traducion);
    Webcam.attach(camera);
}
Webcam.set({width:360,height:250,image_format:'png',png_quality:90});
camera=document.getElementById("camera");