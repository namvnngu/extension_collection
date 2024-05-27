//Receive from doubleClick
chrome.runtime.onMessage.addListener(reciever)

function reciever(request,sender,sendResopnse){
	console.log(request)

	window.word = request.text.replace(/\s+/g,'')


	window.open(`https://www.oxfordlearnersdictionaries.com/definition/english/${word.toLowerCase()}?q=${word}`)
}



