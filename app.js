var textInput = document.querySelector('.text-input');
var processButton = document.querySelector('.process-btn');
var divOutput = document.querySelector('.output')

// https://api.funtranslations.com/translate/morse.json

var serverURL  = "https://api.funtranslations.com/translate/minion.json"

var serverURL = 'https://api.funtranslations.com/translate/morse.json'


function constructURL(text){
        return serverURL +"?"+"text="+text 
}

function errorHandler(error){
    console.log('error occured', error);
    alert('error occured!')
}

function process(){

    var textboxValue = textInput.value;
    fetch(constructURL(textboxValue)).then(response => response.json()).then(json => 
        divOutput.innerText = json.contents.translated)
        .catch(errorHandler)
    
    // divOutput.innerText = `${textboxValue}`;
    // console.log(textboxValue);

}


processButton.addEventListener('click', process);