import './styles.css';
import homePage from './home';
import menuPage from './menu';
import aboutPage from './about';
import contactPage from './contact';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const contactBtn = document.querySelector('#contact');

// Always load the home page first
homePage();

homeBtn.addEventListener('click', homePage);
menuBtn.addEventListener('click', menuPage);
aboutBtn.addEventListener('click', aboutPage);
contactBtn.addEventListener('click', contactPage);
