let mic = document.getElementById('mic');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
let recieve = document.querySelector('.recieve');

recognition.onresult=function(e){
    let resultindex = e.resultIndex;
    let trans = e.results[resultindex][0].transcript;
    recieve.innerHTML = trans;
    
}

mic.addEventListener('click', ()=>{
    recognition.start();
    console.log('activated')

})