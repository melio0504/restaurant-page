import heroImage from '../public/images/hero-picture.png'

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
