function scroll() {
    if (document.querySelector('.contact').getBoundingClientRect().y < 100) {
        document.querySelector('.scroll').innerHTML = '<span class="line">___</span> Scroll';
        document.querySelector('.scroll').style.marginRight = '0';
    } else if (window.scrollY > document.querySelector('section').offsetHeight - 300) {
        document.querySelector('.scroll').innerHTML = '<span class="line">___</span> Scroll <span class="line">___</span>';
        document.querySelector('.scroll').style.marginRight = '-34px';
    } else {
        document.querySelector('.scroll').innerHTML = 'Scroll <span class="line">___</span>';
        document.querySelector('.scroll').style.marginRight = '0';
    }
}

window.addEventListener('scroll', () => {
    scroll();
});

scroll();

new Glide('.glide', { autoplay: 2000 }).mount()
new Glide('.glide2', { autoplay: 2000 }).mount()
new Glide('.glide3', { autoplay: 2000 }).mount()
new Glide('.glide4', { autoplay: 2000 }).mount()

// Add scroll animation for about section
const aboutSection = document.querySelector('section.about .main-container');
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

if (aboutSection) {
  observer.observe(aboutSection);
}

document.addEventListener('DOMContentLoaded', function() {
    const typeString = "來聊聊您所需要的服務";
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