import aboutImg from '../public/images/about-image.png';

const aboutPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');

  const img = document.createElement('img');
  img.src = aboutImg;
  img.alt = 'store-img';
  img.draggable = false;

  const textDiv = document.createElement('div');
  textDiv.classList.add('about-text');

  const heading = document.createElement('h1');
  heading.textContent = 'ABOUT US';

  const description = document.createElement('p');
  description.textContent = 'At Orodata Resto, we focus on the warmth and comfort found in freshly baked bread paired with a good cup of coffee. Inspired by Japanese flavors and simplicity, our menu brings together soft milk breads, sweet pastries, and rich brews that turn everyday moments into something special.';

  textDiv.append(heading, description)
  aboutDiv.append(img, textDiv);
  content.append(aboutDiv);

  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};

export default aboutPage;
