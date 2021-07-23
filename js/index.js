
// Menu Button
var header = document.getElementById('header');
var menuButton = document.getElementById('menu-btn')
var headerHeight = header.clientHeight;

menuButton.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    header.style.height = isClosed ? 'auto':null;
    // console.log(isClosed);
}

menuItems = document.querySelectorAll('#nav li a[href*="#"]');
// console.log(menuItems)
menuItems.forEach(item => {
    item.onclick = (event)=>{
        var isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains("subnav");
        // console.log(item.nextElementSibling)
        
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
            // item.style.borderTop = '1px solid #fff';
            // item.style.borderBottom = '1px solid #fff';
        }
    }
});


// Header when scroll down
window.onscroll = () => {
    if (window.innerWidth >= 740) {
        var navItems = document.querySelectorAll('#nav > li > a');
        // console.log(navItems);
        if (window.pageYOffset > 100) {
            navItems.forEach( item => {
                item.classList.add("scroll-change");
            })
        } else {
            navItems.forEach( item => {
                item.classList.remove("scroll-change");
            })
        }
    }
}


// Modal popup

const listBuyBtns = document.querySelectorAll('.js-buy-btn')

for (const buyBtn of listBuyBtns) {
    buyBtn.addEventListener('click', () => modal.classList.add('open'))
}

const modal = document.querySelector('.js-modal')

const closeModal = document.querySelector('.js-modal-close')
closeModal.addEventListener('click', () => modal.classList.remove('open'))

modal.addEventListener('click', () => modal.classList.remove('open'))

const modalContainer = document.querySelector('.js-modal-container')
modalContainer.addEventListener('click', (event) => event.stopPropagation())

