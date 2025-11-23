new Glide('.glide', { autoplay: 2000 }).mount()
new Glide('.glide2', { autoplay: 2000 }).mount()
new Glide('.glide3', { autoplay: 2000 }).mount()

// Add scroll animation for about section
const heroSection = document.querySelector('#hero');
const aboutSection = document.querySelector('#about');
const contactSection = document.querySelector('#contact');

const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

function baffleAbout() {
  let b = baffle('.intro-1').start();
  b.reveal(1500);

  let b2 = baffle('.intro-2').start();
  b2.reveal(2500);

  let b3 = baffle('.intro-3').start();
  b3.reveal(4000);

  let b4 = baffle('.intro-4').start();
  b4.reveal(5500);
}

function gsapAnimate() {
  gsap.registerPlugin(SplitText);
  gsap.set("h1", { opacity: 1 });
  let split = SplitText.create("#heading", { type: "chars" });
  gsap.from(split.chars, {
    y: 30,
    autoAlpha: 0,
    stagger: 0.1
  });

  gsap.set("h4", { opacity: 1 });
  let split2 = SplitText.create(".title", { type: "chars" });
  gsap.from(split2.chars, {
    y: 20,
    autoAlpha: 0,
    stagger: 0.03,
    delay: 0.7
  });

  gsap.to(".cta", { opacity: 1, delay: 2, duration: 3, ease: "power2.out" });

}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'hero') {
        gsapAnimate();
      }
      if (entry.target.id === 'about') {
        baffleAbout();
      }
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

if (heroSection) {
  observer.observe(heroSection);
}

if (aboutSection) {
  observer.observe(aboutSection);
}

if (contactSection) {
  observer.observe(contactSection);
}

document.addEventListener('DOMContentLoaded', function() {
    const typeString = "來聊聊您所需要的服務，期待與您合作一起創造優質的網站。";
    const typewriterElement = document.querySelector(".typewriter");
    let index = 0;
    const typingSpeed = 150;
    let hasAnimated = false;

    function typeWriter() {
        if (index < typeString.length) {
            typewriterElement.textContent += typeString.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Start observing the typewriter element
    if (typewriterElement) {
        observer.observe(typewriterElement);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
