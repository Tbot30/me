
checkBox = document.getElementById('checkboxID').addEventListener('click', event => {
	if(event.target.checked) {
		document.body.style.backgroundColor = 'white';
	}
    else{
        document.body.style.backgroundColor = 'darkgrey';
    }
});