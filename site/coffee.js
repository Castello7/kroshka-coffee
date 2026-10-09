'use strict';
const drinkProfiles = {
'Эспрессо': {story:'Короткая чашка с плотным вкусом. Хороший способ познакомиться с зерном без молока и сиропов.',composition:'Эспрессо',volume:'30 мл'},
'Американо': {story:'Чистый кофейный вкус в более большой чашке. Для тех, кому хочется спокойно пить кофе и чувствовать его характер.',composition:'Эспрессо, горячая вода',volume:'200 мл'},
'Капучино': {story:'Баланс эспрессо и нежной молочной пены. Кофе чувствуется, а вкус остаётся мягким.',composition:'Эспрессо, молоко, молочная пена',volume:'250 мл'},
'Флэт уайт': {story:'Выразительный кофе с тонким слоем молочной пены. Для тех, кто любит молоко, но хочет чувствовать эспрессо.',composition:'Двойной эспрессо, молоко',volume:'180 мл'},
'Латте': {story:'Большая мягкая чашка, в которой молоко выходит на первый план. Для неспешного утра и долгого разговора.',composition:'Эспрессо, молоко',volume:'300 мл'},
'Раф ванильный': {story:'Сливочная текстура и мягкий аромат ванили. Напиток для настроения «сегодня можно немного десерта».',composition:'Эспрессо, сливки, ваниль',volume:'300 мл'},
'Латте солёная карамель': {story:'Молочная чашка с домашней карамелью и щепоткой соли. Сладость остаётся деликатной, а кофе — узнаваемым.',composition:'Эспрессо, молоко, солёная карамель',volume:'300 мл'},
'Матча латте': {story:'Мягкий чайный вкус с молоком. Когда хочется сменить привычную чашку кофе на что-то другое.',composition:'Матча, молоко',volume:'300 мл'},
'Какао': {story:'Шоколадная чашка для дня, которому нужно немного тепла. Приготовим на обычном или растительном молоке.',composition:'Шоколад, молоко',volume:'300 мл'},
'Фильтр дня': {story:'Кофе, заваренный без молока. Зерно меняется — бариста расскажет, что в чашке сегодня.',composition:'Кофе, вода',volume:'250 мл'}
};
const finder = document.getElementById('coffee-finder');
const milkLabels = {regular:'Обычное',oat:'Овсяное',almond:'Миндальное',none:'Без молока'};
let recommendation;
try {
 const saved=JSON.parse(localStorage.getItem('kroshka-coffee')||'null');
 if(saved)for(const [key,allowed] of Object.entries({taste:['bold','balanced','soft'],milk:['regular','oat','almond','none'],sweet:['no','yes']})){
  if(allowed.includes(saved[key]))finder.querySelector('input[name="'+key+'"][value="'+saved[key]+'"]').checked=true;
 }
}catch{}
function updateRecommendation() {
 const values = Object.fromEntries(new FormData(finder));
 panel.querySelectorAll('.is-recommended').forEach(row=>row.classList.remove('is-recommended'));
 let name = values.milk === 'none' ? (values.taste === 'bold' ? 'Эспрессо' : 'Американо') : values.sweet === 'yes' ? 'Латте солёная карамель' : {bold:'Флэт уайт',balanced:'Капучино',soft:'Латте'}[values.taste];
 const category = name === 'Латте солёная карамель' ? 'special' : 'coffee';
 const item = menu[category].find(row => row[0] === name);
 const price = Number(item[2].replaceAll(' ','')) + (['oat','almond'].includes(values.milk) ? 8000 : 0);
 recommendation = {name,category,price,milk:values.milk};
 document.getElementById('result-name').textContent = name;
 document.getElementById('result-description').textContent = drinkProfiles[name].story + (values.milk === 'none' && values.sweet === 'yes' ? ' Сладость предлагаем добавить выпечкой, чтобы сохранить чистый вкус кофе.' : '');
 document.getElementById('result-extra').hidden=!['oat','almond'].includes(values.milk);
 document.getElementById('result-milk').textContent = milkLabels[values.milk];
 document.getElementById('result-volume').textContent = drinkProfiles[name].volume;
 const priceElement = document.getElementById('result-price');
 priceElement.replaceChildren(document.createTextNode(price.toLocaleString('ru-RU')+' '));
 const currency = document.createElement('small');currency.textContent='сум';priceElement.append(currency);
 document.getElementById('result-pair').textContent = values.sweet === 'yes' ? 'Булочка с корицей' : 'Классический круассан';
 document.getElementById('result-pair-note').textContent = values.sweet === 'yes' ? 'Пряная корица и сливочная глазурь. Немного десерта к вашей чашке.' : 'Хрустящий, масляный. Тот самый первый укус.';
}
finder.addEventListener('change',()=>{
 try{localStorage.setItem('kroshka-coffee',JSON.stringify(Object.fromEntries(new FormData(finder))));}catch{}
 updateRecommendation();
 const result=document.getElementById('coffee-result');
 result.classList.remove('is-updating');
 requestAnimationFrame(()=>requestAnimationFrame(()=>result.classList.add('is-updating')));
});
finder.addEventListener('submit',event=>event.preventDefault());
updateRecommendation();
document.getElementById('find-in-menu').addEventListener('click',()=>{
 selectCategory(document.getElementById('tab-'+recommendation.category));
 const row = Array.from(panel.querySelectorAll('.menu-item')).find(element=>element.dataset.name === recommendation.name);
 if(row){row.classList.add('is-recommended');row.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});row.querySelector('button').focus({preventScroll:true});}
});
const dialog = document.getElementById('drink-dialog');
let dialogTrigger;
function openDrink(name,button){
 const profile=drinkProfiles[name];const item=Object.values(menu).flat().find(row=>row[0]===name);
 if(!profile||!item)return;
 dialogTrigger=button;
 document.getElementById('drink-title').textContent=name;
 document.getElementById('drink-story').textContent=profile.story;
 document.getElementById('drink-composition').textContent=profile.composition;
 document.getElementById('drink-size').textContent=profile.volume;
 document.getElementById('drink-price').textContent=item[2]+' сум';
 dialog.showModal();
 document.getElementById('close-drink').focus();
}
function addDrinkButtons(){
 const selected=tabs.find(tab=>tab.getAttribute('aria-selected')==='true');
 Array.from(panel.querySelectorAll('.menu-item')).forEach((row,index)=>{
  const name=menu[selected.dataset.category][index][0];row.dataset.name=name;
  if(!drinkProfiles[name]||row.querySelector('.drink-info'))return;
  const button=document.createElement('button');button.type='button';button.className='drink-info';button.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 11v6m0-10v1"/></svg>';button.setAttribute('aria-label','О напитке: '+name);button.addEventListener('click',()=>openDrink(name,button));row.append(button);
 });
}
panel.addEventListener('menu-rendered',addDrinkButtons);
addDrinkButtons();
document.getElementById('close-drink').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(dialogTrigger?.isConnected)dialogTrigger.focus({preventScroll:true});});
document.getElementById('dialog-to-finder').addEventListener('click',()=>{dialogTrigger=null;dialog.close();document.getElementById('finder').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});finder.querySelector('input:checked').focus({preventScroll:true});});

document.querySelector('.finder-result-link').addEventListener('click',()=>document.getElementById('coffee-ticket').focus({preventScroll:true}));
