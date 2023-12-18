const iconToggle = document.querySelector('.toggle_icon');
const navbarMenu = document.querySelector('.menu');
const menuLinks = document.querySelector('.menu_link');
const iconClose = document.querySelector('.close_icon');

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click' , () => {
        navbarMenu.classList.remove('active');
    })
})




/*change background header
function scrollHeader(){
    const header = document.getElementById('header');
    if (this.scrollY >= 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
window.addEventListener('scroll' , scrollHeader);*/



//scroll section active link

const sections = document.querySelectorAll('section[id]');

function activeLink() {
    const yOffset = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;

        let sectionId = section.getAttribute('id');

        if(yOffset > sectionTop && yOffset <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId +']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId +']').classList.remove('active-link');
        }
    })
}


window.addEventListener("scroll" , activeLink());



/*let sections = document.querySelectorAll('section');
let menu = document.querySelectorAll('header .menu a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            menu.forEach(links => {
                links.classList.remove('active-link');
                document.querySelector('header .menu a[href *=' + id +']').classList.add('active-link');
            });
        };
    });
};*/




































