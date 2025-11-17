const greeting = function () {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  
  h1.textContent = 'Hello World!';
  h1.style.fontSize = '2rem';
  h1.style.color = '#FFFFFF';

  div.appendChild(h1);
  
  return div;
};

export default greeting;