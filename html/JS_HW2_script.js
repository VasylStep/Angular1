
// //2з 5 числових значень

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// //3 з 5 стічкових значень

// let cars = ['Вольво', 'Мерседес', 'Тойота', 'Рено', 'Пежо'];
// console.log(cars);

// //4 з 5 значень стрічкового, числового та булевого типу
// let array = [20, 'Рено', true, 50, false];
// console.log(array);

// //5 -- Створити пустий масив. Наповнити його будь-якими значеннями 
// // звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = [];
// emptyArray[0] = 10;
// emptyArray[1] = 30;
// emptyArray[2] = 'Тойота'
// emptyArray[3] = false;
// emptyArray[4] = true;
// console.log(emptyArray);

//7 - За допомогою циклу for і document.write() вивести 
// 10 блоків div c довільним текстом всередині

// //???Не розумію шо таке $ і не розумію чого косі лапки працюють 
// //а прямі не пряцюють в тому виразі???


// let worldDiv = ['LOREM ipsum', 'dolor sit amet', 'consectetur adipisicing elit.', 'Aliquam ut alias ipsum eaque!', 'Quo necessitatibus', 'minus asperiores', 'illum beatae', 'facere ad facilis!', 'Rem, deleniti! ', 'Consectetur sint saepe error sit harum.'];

// for (let i = 0; i < worldDiv.length; i++) {
//    document.write(`<div> ${worldDiv[i]} </div>`);

// };

// //8 - За допомогою циклу for і document.write() вивести 10 блоків div c 
// //довільним текстом і індексом всередині

// let worldDiv2 = ['LOREM ipsum', 'dolor sit amet', 'consectetur adipisicing elit.', 'Aliquam ut alias ipsum eaque!', 'Quo necessitatibus', 'minus asperiores', 'illum beatae', 'facere ad facilis!', 'Rem, deleniti! ', 'Consectetur sint saepe error sit harum.'];

// for (let i = 0; i < worldDiv2.length; i++) {
//    document.write(i);
//    document.write(`<div> ${worldDiv2[i]} </div>`);
//    document.write ('<br>');


// };
// //9 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// let worldDiv3 = ['Lorem', 'ipsum', 'dolor','sit','amet','consectetur','adipisicing','elit','Corporis','saepe ',       
//    'hi','c perspiciatis','nemo','repudiandae','maxime','id','voluptate','rerum','explicabo ','optio'];    

// while (i<worldDiv3.length) {

//    document.write (`<h1> ${worldDiv3[i]} <h1>`)
//    document.write ('<br>');
//    i++
// };

// //10- За допомогою циклу while вивести в документ 20 блоків h1 c довільним 
// //текстом і індексом всередині.
// let k=0;
// let worldDiv4 = ['Lorem', 'ipsum', 'dolor','sit','amet','consectetur','adipisicing','elit','Corporis','saepe ',       
//    'hi','c perspiciatis','nemo','repudiandae','maxime','id','voluptate','rerum','explicabo ','optio'];    

// while (k<worldDiv3.length) {
//    document.write(k);
//    document.write (`<h1> ${worldDiv4[k]} <h1>`)
//    document.write ('<br>');
//    k++

// };
//11--- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayDesk = [10,20,30,40,50,60,70,80,90,100,];

// for (let index = 0; index < arrayDesk.length; index++) {
//    console.log( arrayDesk[index]);

// }
// //12 -- - Створити масив з 10 строкрових елементів. Вивести в 
// //консоль всі його елементи в циклі.

// let arrayWorld = ['Створити','масив','з','десять','строкрових',
// 'елементів','.','Вивести','в','консоль'];
// for (let index = 0; index < arrayWorld.length; index++) {
//    console.log( arrayWorld[index]);

// }
//13 - Створити масив з 10 елементів будь-якого типу. 
//Вивести в консоль всі його елементи в циклі.

// let arrayWorld2 = ['Створити','масив','з',true,'строкрових',
// 'елементів','.',10,'20',30];
// for (let index = 0; index < arrayWorld2.length; index++) {
//    console.log( arrayWorld2[index]);

// };

//14 - Створити масив з 10 елементів числового, стірчкового і булевого типу. 
//За допомогою if та typeof вивести тільки булеві елементи
// let arrayWorld3 = ['Створити', 'масив', 'з', true, 'строкрових',
//    'елементів', 10, 20, 3, false, true];
// for (let i = 0; i<arrayWorld3.length; i++) {
//    if(typeof arrayWorld3[i] === 'boolean') {
//       console.log(arrayWorld3[i]);
//    }
// }

//15- Створити масив з 10 елементів числового, стірчкового і булевого типу. 
//За допомогою if та typeof вивести тільки числові елементи
// let arrayWorld4= ['Створити', 'масив', 'з', true, 'строкрових',
//    'елементів', 10, 20, 3, false, true];
// for (let i = 0; i<arrayWorld4.length; i++) {
//    if(typeof arrayWorld4[i] === 'number') {
//       console.log(arrayWorld4[i]);
//    }
// }

//16 - Створити масив з 10 елементів числового, стрічкового і булевого типу. 
//За допомогою if та typeof вивести тільки рядкові елементи

// let arrayWorld5= ['Створити', 'масив', 'з', true, 'строкрових',
//    'елементів', 10, 20, 3, false, true];
// for (let i = 0; i<arrayWorld5.length; i++) {
//    if(typeof arrayWorld5[i] === 'string') {
//       console.log(arrayWorld5[i]);
//    }
// }

//17 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) 
//через звернення до конкретних індексів. 
//Вивести в консоль всі його елементи в циклі.

// let arrayWorld6=[];
// arrayWorld6[1]='Створити';
// arrayWorld6[2]='масив';
// arrayWorld6[3]='з';
// arrayWorld6[4]=true;
// arrayWorld6[5]='строкрових';
// arrayWorld6[6]='елементів';
// arrayWorld6[7]=true;
// arrayWorld6[8]=20;
// arrayWorld6[9]=false;
// arrayWorld6[10]=10;
// for (let index = 0; index < arrayWorld6.length; index++) {
//    console.log (arrayWorld6[index]);

// }
//18 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку 
//через console.log та document.write
// for (let index = 0; index < 10; index++) {
//    console.log(index);

//    document.write (index);   
// }

//19--- Створити цикл for на 100 ітерацій з кроком 1. 
//Вивести поточний номер кроку через console.log та document.write
// for (let index = 0; index < 100; index++) {
//       console.log(index);

//       document.write (index);   
// }

//20--- Створити цикл for на 100 ітерацій з кроком 2. 
//Вивести поточний номер кроку через console.log та document.write

// for (let index = 0; index < 100; index+=2) {
//       console.log(index);

//       document.write (index);   
// }

//21--- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. 
//через console.log + document.write

// for (let index = 0; index < 100; index++) {

//    if (index%2===0) {

//       console.log(index);

//       document.write (index);

//    }

// }

//23- Створити цикл for на 100 ітерацій. 
//Вивести тільки не парні кроки. через console.log + document.write

// for (let index = 0; index < 100; index++) {

//    if (index%2===1) {

//       console.log(index);

//       document.write (index);

//    }

// }

//24--- Відтворити роботу годинника, 
//відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let minute = 1; minute < 2; minute++) {

//    for (let second = 1; second < 60; second++) {

//       console.log (`${minute}:${second}`);  
//    }

// }

// //25 - Відтворити роботу годинника,
// // відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let hour = 0; hour < 3; hour++) {
//    for (let minute = 0; minute < 60; minute++) {
//       if (hour === 2 && minute === 20) {
//          break;
//       }
//       for (let second = 0; second < 60; second++) {
//          console.log(`${hour}h:${minute}m:${second}s`);
//       }
//    }
// }

//додатково
//27- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//  let array5 = [ 'a', 'b', 'c'];
//  for (let index = 0; index < array5.length; index++) {
//     console.log (array5[index]);
//     document.write(array5[index]);

//  }

// //28-- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let array5 = [ 'a', 'b', 'c'];
// let i=0;
// while (i<array5.length) {
//     console.log (array5[i]);
//     document.write(array5[i]);
//     i++;
// }

//29- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let array5 = [ 'a', 'b', 'c'];

// for ( let i of array5) {

//    console.log (i);
//    document.write(i);


// }

// //30 

// let array5 = [ 'a', 'b', 'c'];
// for (let i in array5) {
//       console.log (i);
//    document.write(i);
// }

//37 - - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

// let array5 = ['a', 'b', 'c'];
// for (let index = 1; index <= 3; index++) {
//     array5.push (index);
// }
// console.log(array5); 

//38  -- - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
//Зроблено без сортування -- шо є недобре ну але умова виконана.

// let array7 = [1,2,3];
// array7 [0]=3;
// array7[2]=1;
// console.log (array7);

//39 --- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

// let array7 = [1,2,3];

// for (let index = 4; index <= 6; index++) {
//     array7.push (index);
// }
// console.log(array7); 

//40 -- - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let array7 = [1, 2, 3];
// array7.unshift(4,5,6);
// console.log (array7);

document.write ('sdfsdf');










