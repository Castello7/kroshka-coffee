'use strict';
// Canonical Russian copy stays separate from displayed translations and menu IDs.
const translations = [
['Перейти к содержимому','Skip to content',"Asosiy mazmunga o'tish"],
['Крошка — главная','Kroshka — home','Kroshka — bosh sahifa'],
['Основная навигация','Main navigation','Asosiy navigatsiya'],
['Меню','Menu','Menyu'],['Ваш кофе','Your coffee','Sizning qahvangiz'],['В гости','Visit us','Mehmonga keling'],
['КОФЕЙНЯ ПО СОСЕДСТВУ','YOUR NEIGHBOURHOOD CAFÉ','YONINGIZDAGI QAHVAXONA'],
['Маленькие','Little','Kichik'],['радости.','joys.','quvonchlar.'],['Каждый день.','Every day.','Har kuni.'],
['Любимый кофе, ещё тёплый круассан','Your favourite coffee, a warm croissant',"Sevimli qahva, hali issiq kruassan"],
['и место, где можно никуда не спешить.','and a place to take your time.',"va shoshilishga hojat bo'lmagan joy."],
['Посмотреть меню','Explore the menu',"Menyuni ko'rish"],['Найти свой кофе','Find your coffee',"Qahvangizni toping"],
['В нашей чашке','In our cup','Bizning finjonda'],['Шоколад · орех · карамель','Chocolate · hazelnut · caramel',"Shokolad · yong'oq · karamel"],
['Знакомьтесь с зерном','Meet our beans','Donlar bilan tanishing'],
['Кофе с молочной пеной в керамической чашке','Latte art in a ceramic coffee cup','Sopol finjondagi sutli qahva'],
['ПОДСКАЗКА БАРИСТА','A LITTLE HELP FROM YOUR BARISTA','BARISTADAN TAVSIYA'],
['Какой кофе','Which coffee','Qaysi qahva'],['вам по вкусу?','feels like you?',"sizga yoqadi?"],
['Выберите, что любите.','Tell us what you like.',"Yoqtirgan ta’mingizni tanlang."],
['Мы подскажем, с какой чашки начать.','We’ll suggest your first cup.',"Qaysi finjondan boshlashni tavsiya qilamiz."],
['Какой вкус вам ближе?','What kind of flavour?',"Qanday ta’mni yoqtirasiz?"],
['Яркий','Bold','Yorqin'],['Кофе на первом плане','Coffee comes first',"Qahva ta’mi birinchi o'rinda"],
['Сбалансированный','Balanced','Muvozanatli'],['Кофе и мягкость','Coffee meets smoothness',"Qahva va mayinlik"],
['Нежный','Gentle','Mayin'],['Молочный и обволакивающий','Soft and milky','Sutli va yumshoq'],
['Какое молоко?','Which milk?','Qanday sut?'],['Обычное','Dairy','Oddiy sut'],['Овсяное','Oat','Suli suti'],['Миндальное','Almond','Bodom suti'],['Без молока','No milk','Sutsiz'],
['Добавим сладости?','Something sweet?',"Biroz shirinlik qo'shamizmi?"],['Без сиропов','No syrup','Siropsiz'],['Хочется десертного','A dessert-like cup',"Shirinroq bo'lsin"],
['Можно менять ответы — ваша чашка меняется вместе с ними.','Change your choices and your cup changes with them.',"Tanlovlarni o'zgartirsangiz, qahvangiz ham o'zgaradi."],
['Рекомендация бариста','Barista’s recommendation','Barista tavsiyasi'],['ВАША ЧАШКА / 01','YOUR CUP / 01','SIZNING FINJONINGIZ / 01'],
['Начните с этого','Start here','Shundan boshlang'],['Молоко','Milk','Sut'],['Объём','Size','Hajm'],['Ваша чашка','Your cup','Sizning finjoningiz'],
['Найти в меню','Find it on the menu','Menyudan topish'],['А к нему','On the side','Yoniga esa'],
['Классический круассан','Classic croissant','Klassik kruassan'],
['Хрустящий, масляный. Тот самый первый укус.','Crisp and buttery. That perfect first bite.',"Qarsildoq va sariyog'li. O'sha ilk luqma."],
['Пряная корица и сливочная глазурь. Немного десерта к вашей чашке.','Warm cinnamon and creamy icing. A sweet little pairing.',"Xushbo'y dolchin va qaymoqli glazur. Qahvangiz yoniga shirinlik."],
['Рекомендация по вкусу. Заказ примем в кофейне.','A flavour suggestion. Order at the café.',"Ta’mingizga mos tavsiya. Buyurtmani qahvaxonada qabul qilamiz."],
['МЕНЮ','THE MENU','MENYU'],['По любви.','Made with care.',"Mehr bilan."],['И по вкусу.','To your taste.',"Ta’bingizga mos."],
['Классику готовим бережно.','We give the classics our care.',"Klassik ichimliklarni mehr bilan tayyorlaymiz."],
['С новым — с удовольствием экспериментируем.','And love trying something new.',"Yangiliklarni esa zavq bilan sinab ko'ramiz."],
['Категории меню','Menu categories','Menyu toifalari'],['Кофе','Coffee','Qahva'],['Особенное','Specials','Maxsus'],['Выпечка','Bakery','Pishiriqlar'],
['Эспрессо','Espresso','Espresso'],['Американо','Americano','Amerikano'],['Капучино','Cappuccino','Kapuchino'],['Флэт уайт','Flat white','Flet uayt'],['Латте','Latte','Latte'],
['Раф ванильный','Vanilla raf','Vanilli raf'],['Латте солёная карамель','Salted caramel latte','Tuzli karamelli latte'],['Матча латте','Matcha latte','Matcha latte'],['Какао','Cocoa','Kakao'],['Фильтр дня','Today’s filter coffee','Kun filtri'],
['Круассан классический','Classic croissant','Klassik kruassan'],['Круассан миндальный','Almond croissant','Bodomli kruassan'],['Булочка с корицей','Cinnamon bun','Dolchinli bulochka'],['Баскский чизкейк','Basque cheesecake','Bask chizkeyki'],['Печенье с шоколадом','Chocolate cookie','Shokoladli pechenye'],
['любимый','a favourite','sevimli'],['нежный','gentle','mayin'],['из печи','freshly baked','yangi pishgan'],
['Маленький, крепкий, с характером · 30 мл','Small, bold, full of character · 30 ml',"Kichik, kuchli, o'ziga xos · 30 ml"],
['Чистый вкус любимого зерна · 200 мл','The pure taste of our beans · 200 ml',"Sevimli donlarning sof ta’mi · 200 ml"],
['Эспрессо и нежная молочная пена · 250 мл','Espresso and silky milk foam · 250 ml','Espresso va mayin sutli ko‘pik · 250 ml'],
['Больше кофе, чуть меньше молока · 180 мл','More coffee, a little less milk · 180 ml','Ko‘proq qahva, biroz kamroq sut · 180 ml'],
['Мягкий и молочный, для долгих разговоров · 300 мл','Soft and milky, for long conversations · 300 ml','Mayin va sutli, uzoq suhbatlar uchun · 300 ml'],
['Сливочный, с натуральной ванилью · 300 мл','Creamy, with natural vanilla · 300 ml','Qaymoqli, tabiiy vanil bilan · 300 ml'],
['Домашняя карамель и щепотка соли · 300 мл','House caramel and a pinch of salt · 300 ml','Uy karameli va bir chimdim tuz · 300 ml'],
['Японская матча и молоко на выбор · 300 мл','Japanese matcha with your choice of milk · 300 ml','Yapon matchasi va tanlagan sutingiz · 300 ml'],
['Тёмный шоколад, молоко и уют · 300 мл','Dark chocolate, milk and comfort · 300 ml','Qora shokolad, sut va iliqlik · 300 ml'],
['Спросите бариста, что завариваем сегодня · 250 мл','Ask your barista what we’re brewing today · 250 ml','Bugun nima damlanayotganini baristadan so‘rang · 250 ml'],
['Слоёное тесто и настоящее сливочное масло · 80 г','Flaky pastry and real butter · 80 g','Qatlamli xamir va haqiqiy sariyog‘ · 80 g'],
['Миндальный крем и хрустящие лепестки · 110 г','Almond cream and crisp almond flakes · 110 g','Bodom kremi va qarsildoq bodom yaproqlari · 110 g'],
['Мягкая, пряная, со сливочной глазурью · 120 г','Soft and spiced, with creamy icing · 120 g','Yumshoq, xushbo‘y, qaymoqli glazur bilan · 120 g'],
['Нежная середина и карамельная корочка · 130 г','A soft centre and caramelised crust · 130 g','Mayin ichi va karamelli qobiq · 130 g'],
['Крупные кусочки тёмного шоколада · 70 г','Generous chunks of dark chocolate · 70 g','Yirik qora shokolad bo‘laklari · 70 g'],
['Овсяное или миндальное молоко к напитку + 8 000 сум','Oat or almond milk + 8,000 UZS','Suli yoki bodom suti + 8 000 so‘m'],
['Выпечку можно взять с собой. Спросите бариста о составе и аллергенах.','Take your pastry to go. Ask your barista about ingredients and allergens.','Pishiriqlarni olib ketishingiz mumkin. Tarkib va allergenlar haqida baristadan so‘rang.'],
['Свежая выпечка к утреннему кофе','Fresh pastries with morning coffee','Ertalabki qahva uchun yangi pishiriqlar'],
['ИДЕАЛЬНАЯ ПАРА','THE PERFECT PAIR','AJOYIB JUFTLIK'],['Кофе +','Coffee +','Qahva +'],['что-нибудь слоёное.','something flaky.','qatlamli pishiriq.'],
['Хрустящая корочка, нежная середина.','A crisp crust, a tender centre.','Qarsildoq qobiq, mayin ich.'],['Печём каждое утро.','Baked fresh every morning.','Har tong yangi pishiramiz.'],
['С ЧЕГО ВСЁ НАЧИНАЕТСЯ','WHERE IT ALL BEGINS','HAMMASI SHUNDAN BOSHLANADI'],['Зерно с','Beans with','Donlardagi'],['тёплым характером.','a warm character.','iliq xarakter.'],
['Для эспрессо мы выбрали понятный, уютный вкус. Он хорош сам по себе и не теряется в молоке.','Our espresso beans have a familiar, comforting flavour. Lovely on their own, just as good with milk.','Espresso uchun tanish va yoqimli ta’mni tanladik. O‘zi ham mazali, sutda ham ta’mini yo‘qotmaydi.'],
['ЭСПРЕССО / ДОМАШНИЙ ПРОФИЛЬ','ESPRESSO / HOUSE PROFILE','ESPRESSO / UY PROFILI'],['Бразилия','Brazil','Braziliya'],['100% арабика','100% arabica','100% arabika'],['Средняя обжарка','Medium roast','O‘rtacha qovurilgan'],
['ЧТО МОЖНО ПОЧУВСТВОВАТЬ','WHAT YOU MIGHT TASTE','SEZISHINGIZ MUMKIN BO‘LGAN TA’MLAR'],['Шоколад','Chocolate','Shokolad'],['Лесной орех','Hazelnut','Funduk'],['Карамель','Caramel','Karamel'],
['Это оттенки вкуса самого зерна — мы не добавляем их в чашку. Если хочется познакомиться с кофе ближе, попросите бариста приготовить эспрессо.','These are natural flavour notes in the beans, not added ingredients. Ask your barista for an espresso to get to know them.','Bular donning tabiiy ta’m tuslari — biz ularni finjonga qo‘shmaymiz. Qahvani yaxshiroq his qilish uchun baristadan espresso so‘rang.'],
['Уютный интерьер кофейни с естественным светом','A cosy café interior in natural light','Tabiiy yorug‘likdagi shinam qahvaxona'],['О КОФЕЙНЕ','OUR CAFÉ','QAHVAXONA HAQIDA'],
['Место маленькое.','A little place.','Kichik bir joy.'],['Тепла —','With plenty of','Iliqlik esa —'],['много.','warmth.','bisyor.'],
['«Крошка» — это столик у окна, аромат свежемолотого кофе и бариста, который запомнит, как вы любите.','Kroshka is a table by the window, the aroma of freshly ground coffee and a barista who remembers your usual.','Kroshka — deraza yonidagi stol, yangi maydalangan qahva ifori va sizga qanday qahva yoqishini eslab qoladigan barista.'],
['Мы выбираем зерно у небольших обжарщиков, печём по утрам и верим: хороший день часто начинается с простых вещей.','We choose beans from small roasters, bake each morning and believe a good day often starts with simple things.','Kichik qovuruvchilardan don tanlaymiz, ertalab pishiramiz va ishonamiz: yaxshi kun ko‘pincha oddiy narsalardan boshlanadi.'],
['Забегайте за кофе.','Drop by for coffee.','Qahva uchun kirib o‘ting.'],['Оставайтесь за настроением.','Stay for the feeling.','Yaxshi kayfiyat uchun qoling.'],
['В ГОСТИ','COME OVER','MEHMONGA KELING'],['Увидимся','See you','Ko‘rishamiz'],['за чашкой?','over a cup?','bir finjon ustida?'],
['Одному, с друзьями или с любимой книгой.','On your own, with friends or your favourite book.','Yolg‘iz, do‘stlar yoki sevimli kitobingiz bilan.'],
['У нас для вас найдётся место.','There’s a place for you here.','Sizga ham joy topiladi.'],['ГДЕ МЫ','FIND US','MANZILIMIZ'],
['Ташкент, ул. Соседская, 12','12 Sosedskaya Street, Tashkent','Toshkent, Sosedskaya ko‘chasi, 12'],
['Вход со двора, под зелёной вывеской.','Enter from the courtyard, under the green sign.','Kirish hovlidan, yashil peshlavha ostida.'],
['Скопировать адрес','Copy address','Manzilni nusxalash'],['Адрес скопирован','Address copied','Manzil nusxalandi'],
['Ташкент, ул. Соседская, 12 — выделите и скопируйте адрес.','12 Sosedskaya Street, Tashkent — select and copy this address.','Toshkent, Sosedskaya ko‘chasi, 12 — manzilni belgilab nusxalang.'],
['КОГДА МЫ','OPENING HOURS','ISH VAQTI'],['Понедельник — пятница','Monday — Friday','Dushanba — juma'],['Суббота — воскресенье','Saturday — Sunday','Shanba — yakshanba'],
['Кофе с собой — с первой чашки до закрытия.','Coffee to go, from our first cup to closing time.','Olib ketiladigan qahva — ochilishdan yopilguncha.'],
['Большой день.','A big day.','Katta kun.'],['Маленькая кофейня.','A little café.','Kichik qahvaxona.'],['Наверх ↑','Back to top ↑','Yuqoriga ↑'],['Крошка','Kroshka','Kroshka'],['крошка','kroshka','kroshka'],['крошка.','kroshka.','kroshka.'],
['Кофе и неспешные утра','Coffee and unhurried mornings','Qahva va shoshilmas tonglar'],
['ИЗ МЕНЮ КРОШКИ','FROM THE KROSHKA MENU','KROSHKA MENYUSIDAN'],['Закрыть описание','Close description','Tavsifni yopish'],['В чашке','In the cup','Finjonda'],['Базовая цена','Base price','Asosiy narx'],
['Молоко и пожелания к напитку обсудим с бариста.','Ask your barista about milk and personal touches.','Sut va istaklaringizni barista bilan kelishamiz.'],
['Подобрать под мой вкус','Find my kind of coffee','Ta’mimga mosini topish'],['О напитке','About this drink','Ichimlik haqida'],
['Короткая чашка с плотным вкусом. Хороший способ познакомиться с зерном без молока и сиропов.','A small cup with a rich flavour. Get to know our beans without milk or syrup.','Kichik finjonda to‘liq ta’m. Donni sut va siropsiz his qilishning yaxshi usuli.'],
['Чистый кофейный вкус в более большой чашке. Для тех, кому хочется спокойно пить кофе и чувствовать его характер.','Pure coffee flavour in a longer cup. Take your time and enjoy the character of the beans.','Kattaroq finjondagi sof qahva ta’mi. Shoshilmay ichib, qahva xarakterini his qilish uchun.'],
['Баланс эспрессо и нежной молочной пены. Кофе чувствуется, а вкус остаётся мягким.','Espresso balanced with silky milk foam. The coffee shines through, while the flavour stays soft.','Espresso va mayin sutli ko‘pik muvozanati. Qahva sezilib turadi, ta’mi esa yumshoq qoladi.'],
['Выразительный кофе с тонким слоем молочной пены. Для тех, кто любит молоко, но хочет чувствовать эспрессо.','Bold coffee with a fine layer of milk foam. For milk lovers who want to taste the espresso.','Yupqa sutli ko‘pik ostidagi yorqin qahva. Sutni yaxshi ko‘rib, espressoni ham his qilmoqchi bo‘lganlar uchun.'],
['Большая мягкая чашка, в которой молоко выходит на первый план. Для неспешного утра и долгого разговора.','A big, gentle cup with milk taking the lead. Made for slow mornings and long conversations.','Sut ta’mi ustun bo‘lgan katta, mayin finjon. Shoshilmas tong va uzoq suhbatlar uchun.'],
['Сливочная текстура и мягкий аромат ванили. Напиток для настроения «сегодня можно немного десерта».','A creamy texture and gentle vanilla aroma. For days that call for a little dessert.','Qaymoqli tuzilma va mayin vanil ifori. Biroz shirinlik istalgan kunlar uchun.'],
['Молочная чашка с домашней карамелью и щепоткой соли. Сладость остаётся деликатной, а кофе — узнаваемым.','A milky cup with house caramel and a pinch of salt. Gently sweet, with coffee you can still taste.','Uy karameli va bir chimdim tuzli sutli finjon. Shirinligi me’yorida, qahva ta’mi esa aniq.'],
['Мягкий чайный вкус с молоком. Когда хочется сменить привычную чашку кофе на что-то другое.','Gentle tea flavour with milk. Something different when you feel like a change from coffee.','Sut bilan mayin choy ta’mi. Odatdagi qahva o‘rniga boshqacha narsa ichgingiz kelganda.'],
['Шоколадная чашка для дня, которому нужно немного тепла. Приготовим на обычном или растительном молоке.','A chocolate cup for a day that needs some warmth. Made with dairy or plant milk.','Biroz iliqlik kerak bo‘lgan kun uchun shokoladli finjon. Oddiy yoki o‘simlik sutida tayyorlaymiz.'],
['Кофе, заваренный без молока. Зерно меняется — бариста расскажет, что в чашке сегодня.','Coffee brewed without milk. The beans change — your barista will tell you what’s in today’s cup.','Sutsiz damlangan qahva. Donlar o‘zgarib turadi — bugungi finjon haqida barista aytib beradi.'],
['Сладость предлагаем добавить выпечкой, чтобы сохранить чистый вкус кофе.','For sweetness, add a pastry and keep the coffee flavour pure.','Qahvaning sof ta’mini saqlash uchun shirinlikni pishiriq bilan qo‘shishni tavsiya qilamiz.'],
['Эспрессо, горячая вода','Espresso, hot water','Espresso, issiq suv'],['Эспрессо, молоко, молочная пена','Espresso, milk, milk foam','Espresso, sut, sutli ko‘pik'],['Двойной эспрессо, молоко','Double espresso, milk','Ikki espresso, sut'],['Эспрессо, молоко','Espresso, milk','Espresso, sut'],['Эспрессо, сливки, ваниль','Espresso, cream, vanilla','Espresso, qaymoq, vanil'],['Эспрессо, молоко, солёная карамель','Espresso, milk, salted caramel','Espresso, sut, tuzli karamel'],['Матча, молоко','Matcha, milk','Matcha, sut'],['Шоколад, молоко','Chocolate, milk','Shokolad, sut'],['Кофе, вода','Coffee, water','Qahva, suv'],
['Язык сайта','Site language','Sayt tili'],['Включить тёмную тему','Switch to dark theme','Tungi mavzuni yoqish'],['Включить светлую тему','Switch to light theme','Yorug‘ mavzuni yoqish'],['ваша чашка','your cup','sizning finjoningiz'],['сум','UZS','so‘m']
];
translations.push(['О кофейне','About the café','Qahvaxona haqida'],['Посмотреть мою чашку','See my cup','Finjonimni ko‘rish'],['Растительное молоко включено в цену.','Plant-based milk is included in the price.','O‘simlik suti narxga kiritilgan.']);
const dictionary = new Map(translations.map(([ru,en,uz])=>[ru,{ru,en,uz}]));
let language = 'ru';
try { const saved=localStorage.getItem('kroshka-language'); if(['ru','uz','en'].includes(saved)) language=saved; } catch {}
function translate(source) {
 if(language==='ru') return source;
 const value=source.trim();let translated=dictionary.get(value)?.[language];
 if(!translated && value.startsWith('О напитке: ')) translated=translate('О напитке')+': '+translate(value.slice(11));
 if(!translated && /\d+ мл$/.test(value)) translated=value.replace(/мл$/,'ml');
 if(!translated && /\d+ сум$/.test(value)) translated=value.replace(/сум$/,language==='en'?'UZS':'so‘m');
 if(!translated && value.includes(' Сладость предлагаем добавить выпечкой')) {const index=value.indexOf(' Сладость'); translated=translate(value.slice(0,index))+' '+translate(value.slice(index+1));}
 if(!translated)return source;
 return source.match(/^\s*/)[0]+translated+source.match(/\s*$/)[0];
}
const nodeSources = new WeakMap();
const attributeSources = new WeakMap();
function translateDocument() {
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:node=>node.parentElement?.closest('script,style,select,[translate="no"]')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
 let node;
 while((node=walker.nextNode())) {
  let record=nodeSources.get(node);
  if(!record)record={source:node.nodeValue,last:node.nodeValue};
  else if(node.nodeValue!==record.last)record.source=node.nodeValue;
  const next=translate(record.source);if(node.nodeValue!==next)node.nodeValue=next;
  record.last=next;nodeSources.set(node,record);
 }
 document.querySelectorAll('[aria-label],img[alt]').forEach(element=>{
  const records=attributeSources.get(element)||{};
  ['aria-label','alt'].forEach(key=>{if(!element.hasAttribute(key))return;const current=element.getAttribute(key);let record=records[key];if(!record)record={source:current,last:current};else if(current!==record.last)record.source=current;const next=translate(record.source);if(current!==next)element.setAttribute(key,next);record.last=next;records[key]=record;});
  attributeSources.set(element,records);
 });
 document.documentElement.lang=language;
 document.documentElement.style.setProperty('--recommended-label','"'+translate('ваша чашка')+'"');
 document.title=language==='ru'?'Крошка — кофе и неспешные утра':language==='en'?'Kroshka — coffee and unhurried mornings':'Kroshka — qahva va shoshilmas tonglar';
 const meta=document.querySelector('meta[name=description]');
 meta.content=language==='ru'?'Крошка — кофейня по соседству. Найдите кофе по своему вкусу, посмотрите меню и загляните в гости.':language==='en'?'Kroshka is your neighbourhood café. Find your kind of coffee, explore the menu and come over.':'Kroshka — yoningizdagi qahvaxona. Ta’mingizga mos qahvani toping, menyuni ko‘ring va mehmonga keling.';
}
const languageControl=document.querySelector('.language-control');
const languageTrigger=document.getElementById('site-language');
const languageOptions=document.getElementById('language-options');
const languageButtons=[...languageOptions.querySelectorAll('button')];
function syncLanguageControl(){
 languageTrigger.querySelector('.language-code').textContent=language.toUpperCase();
 languageButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
}
function closeLanguageMenu(restoreFocus=false){
 languageOptions.hidden=true;languageTrigger.setAttribute('aria-expanded','false');
 if(restoreFocus)languageTrigger.focus();
}
function openLanguageMenu(focusOption=false){
 languageOptions.hidden=false;languageTrigger.setAttribute('aria-expanded','true');
 if(focusOption)languageButtons.find(button=>button.dataset.language===language).focus();
}
languageTrigger.addEventListener('click',()=>{if(languageOptions.hidden)openLanguageMenu();else closeLanguageMenu();});
languageTrigger.addEventListener('keydown',event=>{if(['ArrowDown','ArrowUp'].includes(event.key)){event.preventDefault();openLanguageMenu(true);}});
languageButtons.forEach(button=>button.addEventListener('click',()=>{
 language=button.dataset.language;
 try{localStorage.setItem('kroshka-language',language);}catch{}
 syncLanguageControl();translateDocument();closeLanguageMenu(true);
}));
languageControl.addEventListener('keydown',event=>{
 if(event.key==='Escape'){event.preventDefault();closeLanguageMenu(true);}
 const index=languageButtons.indexOf(document.activeElement);
 if(index<0)return;
 let next;
 if(event.key==='ArrowDown')next=(index+1)%languageButtons.length;
 if(event.key==='ArrowUp')next=(index+languageButtons.length-1)%languageButtons.length;
 if(event.key==='Home')next=0;
 if(event.key==='End')next=languageButtons.length-1;
 if(next!==undefined){event.preventDefault();languageButtons[next].focus();}
});
document.addEventListener('click',event=>{if(!languageControl.contains(event.target))closeLanguageMenu();});
languageControl.addEventListener('focusout',event=>{if(!languageControl.contains(event.relatedTarget))closeLanguageMenu();});
syncLanguageControl();
let scheduled=false;
const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;queueMicrotask(()=>{scheduled=false;translateDocument();});}});
observer.observe(document.body,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:['aria-label','alt']});
const themeToggle=document.getElementById('theme-toggle');
function applyTheme(theme){
 document.documentElement.dataset.theme=theme;
 themeToggle.setAttribute('aria-pressed',String(theme==='dark'));
 const label=theme==='dark'?'Включить светлую тему':'Включить тёмную тему';
 attributeSources.delete(themeToggle);themeToggle.setAttribute('aria-label',label);
 document.querySelector('meta[name=theme-color]').content=theme==='dark'?'#101412':'#faf8f2';
 translateDocument();
}
themeToggle.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('kroshka-theme',theme);}catch{}applyTheme(theme);});
const systemTheme=matchMedia('(prefers-color-scheme: dark)');
systemTheme.addEventListener('change',event=>{let saved;try{saved=localStorage.getItem('kroshka-theme');}catch{}if(!saved)applyTheme(event.matches?'dark':'light');});
applyTheme(document.documentElement.dataset.theme||'light');
