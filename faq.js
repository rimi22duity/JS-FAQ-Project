// variables

const accordion = document.getElementsByClassName('content-container');

for (i = 0; i < accordion.length; i++) {
    console.log('I am here');
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
};