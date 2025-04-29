ScrollReveal({
  //reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

//target elements, and specify options to create reveal animations
//   ScrollReveal().reveal('.project-heading', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.heading-text', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.appear-left', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.appear-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.appear-bottom', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.appear-top', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.divider-right', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.divider-left', { delay: 500, origin: 'left' });


window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    document.getElementById("navbar").style.background = "rgb(6, 8, 17)";
  }
  
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");
  
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
  