const changeButton = document.querySelector('body');
changeButton.addEventListener(
    'click', function(event) {
        event.currentTarget.classList.toggle('dark')
    }
)
const changEbutton = document.querySelector('.all');
changEbutton.addEventListener(
    'click', function(event) {
        event.currentTarget.classList.toggle('night')
    }
)
