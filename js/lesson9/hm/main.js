// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const div = document.createElement('div');
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
//
// div.innerText = 'some text there';
//
// div.style.backgroundColor = 'silver';
// div.style.color = 'red';
// div.style.fontSize = '24px';
//
// document.body.appendChild(div);
//
// const div2 = div.cloneNode('true');
//
// document.body.appendChild(div2);


//                                                          ====//=====
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//

// const array = ['Main','Products','About us','Contacts'];
//
// const menu = document.getElementsByClassName('menu')[0];
//
// const ul = document.createElement('ul');
//
// for (const arrEl of array) {
//     const li = document.createElement('li');
//     li.innerText = arrEl;
//     ul.appendChild(li);
// }
//
// menu.appendChild(ul);
// document.body.appendChild(menu);


//                                                          ====//=====

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const arrEl of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `Title: ${arrEl.title} , MonthDuration: ${arrEl.monthDuration}`;
//     document.body.appendChild(div);
// }



//                                                          ====//=====

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const arrEl of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.classList.add('item');
//
//     const h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = arrEl.title;
//     const p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = arrEl.monthDuration;
//     div.append(h1, p);
//     document.body.appendChild(div);
// }