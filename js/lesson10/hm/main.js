// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
//   чтобы при клике на кнопку исчезал элемент с id="text".

// const div = document.createElement('div');
// div.classList.add('text');
// div.innerText = 'hello world';
//
// div.onclick = function () {
//     this.style.display = 'none';
// };
//
//
// document.body.appendChild(div);

//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// const button = document.createElement('button');
// button.innerText = 'Hide me';
// button.onclick = function (){
//     this.style.display = 'none';
// }
// document.body.appendChild(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//   та повідомити про це користувача
//
// const input = document.createElement('input');
// input.name = 'age';
// input.type = 'number';
// const button = document.createElement('button');
// button.innerText = 'submit';
// button.onclick = function (){
//     if(input.value < 18){
//         console.log('your age less then 18');
//     }else{
//         console.log('your age more then 18');
//     }
//     console.log(input.value);
// }
//
// document.body.append(input,button);

//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let flag = true;
// const menu = document.createElement('div');
// const openMenu = document.createElement('div');
// openMenu.innerText = 'Click me to open Menu';
//
// const menuLines = document.createElement('div');
// menuLines.style.display = 'none';
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = 'first menu line';
// const li2 = document.createElement('li');
// li2.innerText = 'second menu line';
//
// openMenu.onclick = function () {
//     if (flag) {
//         menuLines.style.display = 'block';
//         this.innerText = 'Click me to hide Menu';
//         flag = false;
//     } else {
//         menuLines.style.display = 'none';
//         this.innerText = 'Click me to open Menu';
//         flag = true;
//     }
// }
//
// ul.append(li1, li2);
// menuLines.appendChild(ul);
// menu.append(openMenu, menuLines);
// document.body.appendChild(menu);
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.