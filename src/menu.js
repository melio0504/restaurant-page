import Shokupan from '../public/images/shokupan.png';
import Anpan from '../public/images/anpan.png';
import yakisobaPan from '../public/images/yakisoba-pan.png';
import matchaBread from '../public/images/matcha-bread.png';
import creamPan from '../public/images/cream-pan.png';
import Croisant from '../public/images/croisant.png';

const menuPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  // Header
  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');

  const menuHeaderText = document.createElement('h1');
  menuHeaderText.textContent = 'OUR MENU';

  menuHeader.append(menuHeaderText);

  // Button
  const menuButtonDiv = document.createElement('div');
  menuButtonDiv.classList.add('menu-button');

  const buttonTexts = ['All', 'Bread', 'Coffee', 'Others'];

  buttonTexts.forEach(text => {
    const button = document.createElement('button');
    button.textContent = text;
    menuButtonDiv.append(button);
  })

  // Menu
  const menuItems = [
    {
      name: "Shokupan",
      price: "¥700",
      imageSrc: Shokupan,
      altText: "shokupan"
    },
    {
      name: "Anpan",
      price: "¥500",
      imageSrc: Anpan,
      altText: "anpan"
    },
    {
      name: "Yakisoba Pan",
      price: "¥600",
      imageSrc: yakisobaPan,
      altText: "yakisoba-pan"
    },
    {
      name: "Matcha Bread",
      price: "¥800",
      imageSrc: matchaBread,
      altText: "matcha-bread"
    },
    {
      name: "Cream Pan",
      price: "¥400",
      imageSrc: creamPan,
      altText: "cream-pan"
    },
    {
      name: "Croissant",
      price: "¥500",
      imageSrc: Croisant,
      altText: "croisant"
    }
  ];

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-card');

  menuItems.forEach(item => {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.src = item.imageSrc;
    img.alt = item.altText;
    
    const title = document.createElement('h1');
    title.textContent = item.name;
    
    const price = document.createElement('p');
    price.textContent = item.price;
    
    productCard.append(img, title, price);
    
    menuContainer.append(productCard);
  });


  content.append(menuHeader, menuButtonDiv, menuContainer);
    
};

export default menuPage;
