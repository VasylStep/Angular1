//1 - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let input = document.querySelector('#sss');
// let cont = document.querySelector('#content');
// input.oninput = () => {
// 	localStorage.setItem('inputValue', input.value);
// 	cont.innerHTML = localStorage.getItem('inputValue');
// }


//5 - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.


//?????Занадто складна задача - навіть по відео не зрозумів шо треба робити і як воно працює 
//-- Зробив тільки HTML форму тої задачі.


//10 -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const text=document.getElementById('text');
// const arrow_left=document.getElementById('arrow_left');
// const arrow_right=document.getElementById('arrow_right');
// const save=document.getElementById('save');

// save.onclick =()=>{
// 	localStorage.setItem(length+1, value);
// }
// arrow_left.onclick = () => {                     // не працює ліва кнопка - не знаю чому бо не розумію тих циклів.
// 	arrow_right.style.visibility = 'visible';     // праву кнопку навіть не пробував -- бо нема змісту пробувати
// 	let index;
// 	for (const key in localStorage) {
// 		if (localStorage.hasOwnProperty(key)) {
// 			if (localStorage.getItem(key)===text.value) {
// 				index=key;
// 			}
// 		}
// 	}
// 	if (index==='1') {
// 		arrow_left.style.visibility='hidden';
// 		return;
// 	}
//   }



//14 - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
//в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта






// let input = document.querySelector('#sss');
// let cont = document.querySelector('#content');

// input.oninput = () =>{
// 	localStorage.setItem('inputValue', input.value);

// 	cont.innerHTML = localStorage.getItem('inputValue');
// }


// let user = {
// name: 'Lilia',
// age: 18,
// }
// localStorage.setItem ('user',JSON.stringify (user));
// let item = localStorage.getItem ('user');
// console.log (JSON.parse(item));

// console.log ('localStorage.getItem()',localStorage.getItem())


let input = document.querySelector('#sss');
let cont = document.querySelector('#content');
// input.oninput = () => {
// 	localStorage.setItem('inputValue', input.value);
// 	cont.innerHTML = localStorage.getItem('inputValue');
// }



input.onclick=()=>{
	for(let symbol of someText.value){
		 let random = Math.floor(Math.random() * (max - min + 1)) + min;

		 setTimeout(()=>{
			  document.write(symbol);
		 }, random)
	}
	
}