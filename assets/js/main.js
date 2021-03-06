/*===== TOGGLE MENU =====*/
const showMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId),
    menu = document.getElementById(menuId);

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*===== CLICK LINK AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== SCROLL SECTIONS TO ACTIVATE LINK =====*/
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        // grab all anchor that with the current sectionId
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__scroll', { delay: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 400 });
sr.reveal('.about__subtitle', { delay: 300 });
sr.reveal('.about__text', { delay: 400 });
sr.reveal('.about__social-icon', { delay: 500, interval: 200 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 });
sr.reveal('.skills__img', { delay: 400 });

/*SCROLL RESUME*/
sr.reveal('.resume__year', { interval: 200 });
sr.reveal('.resume__place', { delay: 50, interval: 200 });
sr.reveal('.resume__title', { interval: 200 });
sr.reveal('.resume__description', {
  delay: 50,
  interval: 200,
});

/*SCROLL PROJECTS*/
sr.reveal('.projects__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__description', {});
sr.reveal('.contact__subtitle', { delay: 200 });
sr.reveal('.contact__text', { delay: 200 });
