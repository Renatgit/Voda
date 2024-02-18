document.getElementById('menu-btn').addEventListener("click", showMenu);
document.getElementById('menu-btn-open').addEventListener("click", showMenu);
function showMenu() {
    let menu = document.getElementById('menu-btn');
    let menuContainer = document.getElementById('bar-menu');
    let line1 = document.getElementById('line-oneActive');
    let line2 = document.getElementById('line-twoActive');
    let line3 = document.getElementById('line-threeActive');
    let line1_main = document.getElementById('line-one');
    let line2_main = document.getElementById('line-two');
    let line3_main = document.getElementById('line-three');

    if (menuContainer.classList == 'bar-menu--closed') {
        menuContainer.classList.add('-active');
        line1.classList.remove('-active');
        line2.classList.remove('-active');
        line3.classList.remove('-active');
        line1_main.classList.remove('line-one');
        line2_main.classList.remove('line-two');
        line3_main.classList.remove('line-three');
        line1_main.classList.add('line-oneActive');
        line2_main.classList.add('line-twoActive');
        line3_main.classList.add('line-threeActive');
    } else {
        menuContainer.classList.remove('-active');
        line1.classList.add('-active');
        line2.classList.add('-active');
        line3.classList.add('-active');
        line1_main.classList.add('line-one');
        line2_main.classList.add('line-two');
        line3_main.classList.add('line-three');
        line1_main.classList.remove('line-oneActive');
        line2_main.classList.remove('line-twoActive');
        line3_main.classList.remove('line-threeActive'); 
    }
}

//Block_animations

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            // else {
            //     animItem.classList.remove('_active');
            // }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}