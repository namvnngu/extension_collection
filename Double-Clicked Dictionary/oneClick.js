const searchfield = document.getElementById('searchfield')
const form = document.getElementById('oldform')
const body = document.body

function chooseAWordFromPage(){
	const vocabulary = window.getSelection().toString();
	// const r = ''+window.getSelection();
  	return vocabulary
}

function addVocabulary(vocabulary){
	searchfield.value = vocabulary
}

function submitForm(){
	form.submit()
}

function main(){
	vocabulary = chooseAWordFromPage()
	addVocabulary(vocabulary)
	submitForm()
}
body.addEventListener('dblclick',main)