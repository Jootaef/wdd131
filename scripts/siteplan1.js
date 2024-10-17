document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.more-info-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            const extraInfo = this.nextElementSibling;


            if (extraInfo.style.display === 'block') {
                extraInfo.style.display = 'none';
                this.textContent = 'More information'; 
            } else {
                extraInfo.style.display = 'block';
                this.textContent = 'More information';
            }
        });
    });
});