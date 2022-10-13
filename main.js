let panelsElement = document.querySelectorAll('.panel');

let removeActionClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

panelsElement.forEach(panel =>{
    panel.addEventListener('click',() => {
        removeActionClasses();
        panel.classList.add('active');
    });
});