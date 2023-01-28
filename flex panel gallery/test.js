var panels = document.querySelectorAll('.panel');

function toggleOpen(){
    console.log(this);
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(this)
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


