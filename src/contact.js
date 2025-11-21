import locationMap from '../public/images/location-map.png'

const contactPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contactDiv');

  const leftSide = document.createElement('div');
  leftSide.classList.add('left');

  const contactInfo = [
    { heading: 'Operating Hours', text: 'Open daily: 8:00AM - 9:30PM' },
    { heading: 'Landline', text: '(03) 1234-5678' },
    { heading: 'Email Address', text: 'odorataresto@odorata.com' }
  ];

  contactInfo.forEach(info => {
    const heading = document.createElement('h1');
    heading.textContent = info.heading;

    const paragraph = document.createElement('p');
    paragraph.textContent = info.text;

    leftSide.append(heading, paragraph);
  });

  const rightSide = document.createElement('div');
  rightSide.classList.add('right');

  const textDiv = document.createElement('div');
  textDiv.classList.add('text');

  const locationHeading = document.createElement('h1');
  locationHeading.textContent = 'Location';

  const locationText = document.createElement('p');
  locationText.textContent = 'Visit us and discover a warm, inviting space made for slow moments and good food. Your next favorite bread-and-coffee spot is just around the corner.';

  const locationImage = document.createElement('img');
  locationImage.src = locationMap; 
  locationImage.alt = 'location map';

  contactDiv.append(leftSide, rightSide);
  textDiv.append(locationHeading, locationText);
  rightSide.append(textDiv, locationImage);
  content.append(contactDiv);

  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
};

export default contactPage;
