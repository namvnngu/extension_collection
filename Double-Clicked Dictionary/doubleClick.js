window.addEventListener('dblclick',getWordFromPage)

function getWordFromPage(){
	const word = window.getSelection().toString()

	if (word.length > 0){
		
		//Send to background.js
		chrome.runtime.sendMessage(message = {"text": word})
		
	}
	
}
