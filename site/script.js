'use strict';
const menu = {
coffee: [
['Эспрессо','Маленький, крепкий, с характером · 30 мл','22 000'],
['Американо','Чистый вкус любимого зерна · 200 мл','26 000'],
['Капучино','Эспрессо и нежная молочная пена · 250 мл','32 000','любимый'],
['Флэт уайт','Больше кофе, чуть меньше молока · 180 мл','34 000'],
['Латте','Мягкий и молочный, для долгих разговоров · 300 мл','35 000']],
special: [
['Раф ванильный','Сливочный, с натуральной ванилью · 300 мл','42 000','нежный'],
['Латте солёная карамель','Домашняя карамель и щепотка соли · 300 мл','40 000'],
['Матча латте','Японская матча и молоко на выбор · 300 мл','42 000'],
['Какао','Тёмный шоколад, молоко и уют · 300 мл','34 000'],
['Фильтр дня','Спросите бариста, что завариваем сегодня · 250 мл','30 000']],
bakery: [
['Круассан классический','Слоёное тесто и настоящее сливочное масло · 80 г','24 000','из печи'],
['Круассан миндальный','Миндальный крем и хрустящие лепестки · 110 г','32 000'],
['Булочка с корицей','Мягкая, пряная, со сливочной глазурью · 120 г','28 000'],
['Баскский чизкейк','Нежная середина и карамельная корочка · 130 г','38 000'],
['Печенье с шоколадом','Крупные кусочки тёмного шоколада · 70 г','18 000']]
};
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panel = document.getElementById('menu-panel');
function selectCategory(tab, focus = false) {
  tabs.forEach(item => { const selected = item === tab; item.setAttribute('aria-selected', String(selected)); item.tabIndex = selected ? 0 : -1; });
  panel.setAttribute('aria-labelledby', tab.id);
  panel.classList.remove('menu-changing');
  requestAnimationFrame(() => { requestAnimationFrame(() => panel.classList.add('menu-changing')); });
  panel.replaceChildren(...menu[tab.dataset.category].map(([name,description,price,badge]) => {
    const row = document.createElement('div'); row.className = 'menu-item';
    const detail = document.createElement('div'); const title = document.createElement('h3'); title.textContent = name;
    if(badge) { const tag = document.createElement('span'); tag.className = 'tiny-label'; tag.textContent = badge; title.append(tag); }
    const descriptionElement = document.createElement('p'); descriptionElement.textContent = description; detail.append(title,descriptionElement);
    const cost = document.createElement('span'); cost.textContent = price + ' '; const currency = document.createElement('small'); currency.textContent = 'сум'; cost.append(currency); row.append(detail,cost); return row;
  }));
  panel.dispatchEvent(new Event('menu-rendered'));
  document.querySelector('.menu-footnote').textContent = tab.dataset.category === 'bakery' ? 'Выпечку можно взять с собой. Спросите бариста о составе и аллергенах.' : 'Овсяное или миндальное молоко к напитку + 8 000 сум';
  if(focus) tab.focus();
}
tabs.forEach((tab,index) => { tab.addEventListener('click',() => selectCategory(tab)); tab.addEventListener('keydown',event => { let next; if(event.key==='ArrowRight') next=(index+1)%tabs.length; if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length; if(event.key==='Home') next=0; if(event.key==='End') next=tabs.length-1; if(next!==undefined){event.preventDefault();selectCategory(tabs[next],true);} }); });
document.getElementById('year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .menu-layout, .about-image, .about-copy, .visit-section > div').forEach(element => {
    element.classList.add('reveal');
    if(element.getBoundingClientRect().top > window.innerHeight) element.classList.add('is-pending');
    observer.observe(element);
  });
}
