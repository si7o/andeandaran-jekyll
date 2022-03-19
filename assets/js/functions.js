function onScroll(e) {
    const $headerToHide = document.querySelector('.masthead');   

    const st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        $headerToHide.classList.add('hide');
    } else {        
        $headerToHide.classList.remove('hide');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}

let lastScrollTop;

window.addEventListener('scroll', onScroll);
window.addEventListener('touchmove', onScroll);
