const basicDOM = (() => {
  const cssLink = document.createElement('link');
  cssLink.href = 'styles.css';
  cssLink.rel = 'stylesheet';
  document.head.appendChild(cssLink);

  const fontAwesome = document.createElement('script');
  fontAwesome.src = 'https://kit.fontawesome.com/50c63cd074.js';
  fontAwesome.crossOrigin = 'Anonymous';
  document.head.appendChild(fontAwesome)

  //creating header
  const header = document.createElement('header');
  const leftHeader = document.createElement('div');
  leftHeader.classList.add('left-header');
  const rightHeader = document.createElement('div');
  rightHeader.classList.add('right-header');
  header.appendChild(leftHeader);
  header.appendChild(rightHeader);

  const logo = document.createElement('i');
  logo.classList.add('fas', 'fa-sun');
  leftHeader.appendChild(logo)

  const title = document.createElement('h1');
  title.classList.add('title')
  title.textContent = 'Weather';
  leftHeader.appendChild(title);

  //creating search box
  const nav = document.createElement('nav');
  rightHeader.appendChild(nav);
  document.body.appendChild(header);
})();
export default basicDOM;
