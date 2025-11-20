import heroImage from '../public/images/hero-picture.png';
import storePicture from '../public/images/store-picture.png';
import pfpQuote from '../public/images/neki-pfp.png';
import portraitFood from '../public/images/potrait-food.png';
import landscapeFood from '../public/images/landscape-food.png';
import square1Food from '../public/images/square-1-food.png';
import square2Food from '../public/images/square-2-food.png';

const homePage = () => {
  const content = document.querySelector('.content');
  content.innerHTML = ''; 

  // Hero Section
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');

  const cta = document.createElement('div');
  cta.classList.add('call-to-action');

  const h1a = document.createElement('h1');
  h1a.textContent = 'Fresh Bread';

  const h1b = document.createElement('h1');
  h1b.textContent = 'and Coffee';

  const h2 = document.createElement('h2');
  h2.textContent = 'Experience fresh, artisan bread paired with rich, thoughtfully brewed coffee. Simple comfort, made with care.';

  const ctaButton = document.createElement('button');
  ctaButton.classList.add('cta-button');
  ctaButton.textContent = 'View our Menu';

  cta.append(h1a, h1b, h2, ctaButton);

  const heroImg = document.createElement('img');
  heroImg.src = heroImage;
  heroImg.alt = 'hero-picture';
  heroImg.draggable = false;

  heroSection.append(cta, heroImg);

  // Quote Section
  const quoteSection = document.createElement('section');
  quoteSection.classList.add('quote-section');

  const storeImg = document.createElement('img');
  storeImg.src = storePicture;
  storeImg.alt = 'store-picture';
  storeImg.width = 600;
  storeImg.height = 400;
  storeImg.draggable = false;

  const quoteCard = document.createElement('article');
  quoteCard.classList.add('quote-card');

  const quoteP = document.createElement('p');
  quoteP.textContent = '“Orodata Resto always delivers fresh bread, great coffee, and a cozy experience.”';

  const quotePfp = document.createElement('img');
  quotePfp.src = pfpQuote;
  quotePfp.alt = 'pfp-quote';
  quotePfp.width = 60;
  quotePfp.height = 60;

  const quoteName = document.createElement('p');
  quoteName.textContent = 'Neki Minaj';

  quoteCard.append(quoteP, quotePfp, quoteName);
  quoteSection.append(storeImg, quoteCard);
};

export default homePage;
