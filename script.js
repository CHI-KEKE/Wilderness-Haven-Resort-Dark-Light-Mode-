const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const dogmove = document.querySelector('iframe')
const giff = document.querySelector('.giff')

const GreeetingTitle = document.querySelector('.Greeting-title');
const author_part = document.querySelector('.photo-author');
const Greetingsection = document.querySelector('#Greeting')

const friends = document.querySelector('#friends').querySelectorAll('img');
const friendsauthors = document.querySelector('#friends').querySelectorAll('a');

const events = document.querySelectorAll('.event-container')
const eventImgs = document.querySelectorAll(".event-img");
const eventAnchors = document.querySelectorAll(".event-anchor")

const contactImg = document.querySelector('.contact-img')
const textBox = document.querySelector('#text-box');

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

//Theme Toggling
const definetheme = () =>{
  //define theme
  const theme = toggleSwitch.checked ? DARK_THEME : LIGHT_THEME;
  const src = theme === DARK_THEME ? DarkObject : LightObject;

  //entity & dog & toggle icon
  document.documentElement.setAttribute("data-theme", theme);
  theme === DARK_THEME?
  toggleIcon.children[0].classList.replace("fa-sun", "fa-moon"):
  toggleIcon.children[0].classList.replace("fa-moon", "fa-sun");

  dogmove.setAttribute("src", src.dog.link);
  giff.setAttribute("href", src.dog.author);

  //Greeting section
  author_part.textContent = `Photo by ${src.background.author}`;
  author_part.setAttribute("href", src.background.link);
  Greetingsection.style.backgroundImage = `url('img/background_${theme}.avif')`;
  GreeetingTitle.textContent = theme === DARK_THEME? 'Night!':'Morning!';

  //friend section
  for (let i = 0; i < 3; i++) {
    friends[i].setAttribute("src", `img/image${i + 1}_${theme}.avif`);
    friendsauthors[i].setAttribute("href", src[i]);
  }

  //event section
  eventImgs.forEach((image, i) => {
    image.setAttribute("src", `img/event${i+1}_${theme}.avif`);
  });
  eventAnchors.forEach((anchor,i) =>{
    anchor.setAttribute("href",src.event[i].link)
  })
  
  

  //contact section
  contactImg.setAttribute("src", `img/undraw_friends_${theme}.svg`);
};



toggleSwitch.addEventListener('change',definetheme);
