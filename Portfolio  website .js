
//==================================1
var swiper = new Swiper(".home-holder", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

//=============================2




      //js start
// MENU SHOW Y HIDDEN 
const nevMeanu = document.getElementById('nav__menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close') ;  
        
//MENUE SHOW 

// Volidote if constant exists 
if(navToggle){
       navToggle.addEventListener('click', () =>{
  nevMeanu.classList.add("show-menu")            
  })    
};

// MENU HIDDEN 

// VOLIDAIE IF CONSTANT EXISTS 

if(navClose) {
   navClose.addEventListener('click', () =>{
        nevMeanu.classList.remove('show-menu')
   })
};





//REMOVE MENU MOBILE 

const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
        const navMenu = document.getElementById('nav__menu');

        // When we click on each nav__link we remove the show-menu class
        
        navMenu.classList.remove('show-menu');
}
navlink.forEach(n => n.addEventListener('click',linkAction));

//--------================== ACCORDING SKILLS================----------------
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')


 function toggleSkills(){
         let itemClass = this.parentNode.className

         for( i = 0; i < skillsContent.length; i++){
                 skillsContent[i].className = 'skills__content skills__close'
         }

         if(itemClass === 'skills__content skills__close'){
                 this.parentNode.className = 'skills__content skills__open'
         }
 }  
 
 skillsHeader.forEach((el) =>{
         el.addEventListener('click', toggleSkills)
 })



//=============== Qualificaton Tabs =============
const tabs = document.querySelectorAll('[data-target]'),
      tabContents  = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
        tab.addEventListener('click',() =>{
                const target = document.querySelector(tab.dataset.target)
                tabContents.forEach(tabContent =>{
                        tabContent.classList.remove('qualification__active')
                })
               target.classList.add('qualification__active')

               tabs.forEach(tab =>{
                       tab.classList.remove('qualification__active')
               })
              tab.classList.add('qualification__active') 
        })
})      

// Services Model

const modalViews = document.querySelectorAll('.services__modal'),
       modalBtns = document.querySelectorAll('.services__button'),
       modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
}    

modalBtns.forEach((modalBtn, i)=>{
        modalBtn.addEventListener('click', () =>{
                modal(i)
        })

})


modalClose.forEach((modalCloses)=>{
        modalCloses.addEventListener('click', () =>{
                modalViews.forEach((modalViews)=>{
                  modalViews.classList.remove('active-modal')      
                })
        })
})


/*----------------------------======================== Scroll section active link=======================--------------------------------*/

const section = document.querySelectorAll('section[id]')

function scrollActive(){
        const scrolly = window.pageYOffset

        section.forEach(current => {
                const sectionHeight = current.offsetHeight
                const sectionTop = current.offsetTop - 50;
                sectionTopId = current.getAttribute('id') 


                if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
                        document.querySelector('.nav__menu a[href*=' + sectionId + ']' ).classList.add('active-link')
                }else{
                        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
        } )


} 

window.addEventListener('scroll', scrollActive)
/*================================ CHANGE BACKGROUND HEADER ===========================*/


function scrollHeader(){
        const nav = document.getElementById('header');
        if(this.scrollY >= 80 ) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
} 

window.addEventListener('scroll',scrollHeader)


/*========================================= SHOW SCROLL TOP =======================================*/

function scrollUp(){
        const scrollUp = document.getElementById('scroll-up')

        if(this.scrollY >= 560 ) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uill-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})







