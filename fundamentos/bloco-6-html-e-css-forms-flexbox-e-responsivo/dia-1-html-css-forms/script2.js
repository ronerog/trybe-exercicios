const button = document.querySelector('#button')

function prevent(event) {
event.preventDefault();
}

button.addEventListener('click', prevent)