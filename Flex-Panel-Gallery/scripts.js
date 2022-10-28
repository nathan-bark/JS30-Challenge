const panels =document.querySelectorAll('.panel');

function openClass() {
    this.classList.toggle('open');
}

function activeClass(e) {
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', openClass))
panels.forEach(panel => panel.addEventListener('transitionend', activeClass))