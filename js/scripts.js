function changeColor(button, color) {   
    document.getElementById(button).addEventListener('click', function() {
        var buttons = document.querySelectorAll('#color-buttons button'),
            mainColorButtons = document.getElementsByClassName('main-color');
        
        for (var i = 0, size = buttons.length; i < size; i++) {
            buttons[i].classList.remove('selected');
        }
      
        for (var i = 0, size = mainColorButtons.length; i < size; i++) {
            mainColorButtons[i].style.background = color;
        }
      
        this.classList.add('selected');
    });
}

changeColor("btn-hazelnut", "#d1af94");
changeColor("btn-blue", "#22264b");
changeColor("btn-olive", "#AB8F46");