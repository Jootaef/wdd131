document.addEventListener('DOMContentLoaded', (event) => {
  
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;


});
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/c0b097e48b46162d62e947823e6b23a603ca09c2/full/!320%2C224/0/default"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52548,
      imageUrl: "https://th.bing.com/th/id/OIP.xkJMg0HJO9FrNoV5guPAvwAAAA?rs=1&pid=ImgDetMain"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44400,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
    }
  ];
  
  function displayTemples(temples) {
    const templeContainer = document.getElementById("temple-container");
    templeContainer.innerHTML = ""; 
  
    temples.forEach(temple => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Temple`;
      img.loading = "lazy";
      card.appendChild(img);
  
      const name = document.createElement("h3");
      name.textContent = temple.templeName;
      card.appendChild(name);
  
      const location = document.createElement("p");
      location.textContent = `Location: ${temple.location}`;
      card.appendChild(location);
  
      const dedication = document.createElement("p");
      dedication.textContent = `Dedicated: ${temple.dedicated}`;
      card.appendChild(dedication);
  
      const area = document.createElement("p");
      area.textContent = `Area: ${temple.area} sq ft`;
      card.appendChild(area);
  
      templeContainer.appendChild(card);
    });
  }
  
  function filterOld() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900, January, 1"));
    displayTemples(oldTemples);
  }
  
  function filterNew() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date("2000, January, 1"));
    displayTemples(newTemples);
  }
  
  function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  }
  
  function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  }
  
  function showAll() {
    displayTemples(temples);
  }
  
  document.getElementById("old").addEventListener("click", filterOld);
  document.getElementById("new").addEventListener("click", filterNew);
  document.getElementById("large").addEventListener("click", filterLarge);
  document.getElementById("small").addEventListener("click", filterSmall);
  document.getElementById("all").addEventListener("click", showAll);
  
  showAll();
  