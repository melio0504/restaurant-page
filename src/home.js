import heroImage from '../public/images/hero-picture.png';
import storePicture from '../public/images/store-picture.png';
import pfpQuote from '../public/images/neki-pfp.png';
import portraitFood from '../public/images/potrait-food.png';
import landscapeFood from '../public/images/landscape-food.png';
import square1Food from '../public/images/square-1-food.png';
import square2Food from '../public/images/square-2-food.png';

const homePage = () => {
  const contentDiv = document.querySelector('#content')
  const heroSection = document.createElement('section');
  const cta = document.createElement('div');

  heroSection.classList.add('hero-section');
  cta.classList.add('call-to-action');

  const header1 = document.createElement('h1');
  const header2 = document.createElement('h1');
  header1.textContent = 'Fresh Bread';
  header2.textContent = 'and Coffee';

  const subheader = document.createElement('h2');
  subheader.textContent = 'Experience fresh, artisan bread paired with rich, thoughtfully brewed coffee. Simple comfort, made with care.';

  const ctaBtn = document.createElement('button');
  ctaBtn.classList.add('cta-button');
  ctaBtn.textContent = 'View our Menu';

  const heroPicture = document.createElement('img');
  heroPicture.src = heroImage;
  heroPicture.alt = 'hero-picture';
  heroPicture.draggable = false;

  contentDiv.appendChild(heroSection);
  heroSection.appendChild(cta);
  heroSection.appendChild(heroPicture);
  cta.appendChild(header1);
  cta.appendChild(header2);
  cta.appendChild(subheader);
  cta.appendChild(ctaBtn);
};

export default homePage;
