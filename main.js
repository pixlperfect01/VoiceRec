let speech;
let inputs = ["Hi", "Hello"];
function setup(){
  noCanvas();
  let lang = navigator.language || 'en-US';
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  let continuous = true;
  let interim = true;
  speechRec.start(continuous, interim);
  speech = new p5.Speech();
  speech.onLoad = voiceReady;
  speech.started(startSpeaking);
  speech.ended(endSpeaking);
}
function gotSpeech() {
  if (speechRec.resultValue) {
    reply(speechRec.resultString);
  }
}
function reply(a){
  speech.speak(findReply(a));
}
function findReply(a){
  a = a.toLowerCase();
  if(a=="something"){
    return "Are You Dumb?";
  }
  if(a=="Hi"){
    return "Hello";
  }
  if(a=="Hello"){
    return "Hi";
  }
  if(a=="good morning"){
    
  }
  if(inputs.indexOf(a)==-1){
    return "I'm not sure how to respond to that";
  }
}
