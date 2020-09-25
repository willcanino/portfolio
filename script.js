let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
    event.preventDefault();
    console.log('Button clicked');
}

submitButton.addEventListener('click', clickListener);
