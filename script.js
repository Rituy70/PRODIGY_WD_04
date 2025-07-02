const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const topBtn = document.createElement('button');
topBtn.id = 'backToTop';
topBtn.innerText = '↑ Top';
topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  background-color: #ffd700;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const typingText = ["Software Developer", "AI Enthusiast", "Global Tech Explorer"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  const element = document.querySelector("#hero h1");
  if (!element) return;

  if (isDeleting) {
    currentText = typingText[i].substring(0, j--);
  } else {
    currentText = typingText[i].substring(0, j++);
  }

  element.innerHTML = `Hi, I'm Ritu<br><span style="color:#ffd700;">${currentText}</span>`;

  if (!isDeleting && j === typingText[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();


const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


const toggle = document.createElement("button");
toggle.id = "darkModeToggle";
toggle.innerText = "🌙";
toggle.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ffd700;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  z-index: 1000;
`;
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const topBtn = document.createElement('button');
topBtn.id = 'backToTop';
topBtn.innerText = '↑ Top';
topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  background-color: #ffd700;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
`;
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const typingText = ["Software Developer", "AI Enthusiast", "Global Tech Explorer"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function typeEffect() {
  const element = document.querySelector("#hero h1");
  if (!element) return;

  if (isDeleting) {
    currentText = typingText[i].substring(0, j--);
  } else {
    currentText = typingText[i].substring(0, j++);
  }

  element.innerHTML = `Hi, I'm Ritu<br><span style="color:#ffd700;">${currentText}</span>`;

  if (!isDeleting && j === typingText[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();


const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));


const toggle = document.createElement("button");
toggle.id = "darkModeToggle";
toggle.innerText = "🌙";
toggle.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  background: #ffd700;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  z-index: 1000;
`;
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});