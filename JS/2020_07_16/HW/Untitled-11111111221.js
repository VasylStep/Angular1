let add = [{ id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
{ id: 2, name: 'petya', age: 30, status: true, address: { city: 'aLviv', street: 'AShevchenko', number: 1 } },
{ id: 3, name: 'kolya', age: 29, status: true, address: { city: 'bLviv', street: 'Shevchenko', number: 1211 } },
{ id: 4, name: 'olya', age: 28, status: false, address: { city: 'cLviv', street: 'Shevchenko', number: 90 } },
{ id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'BShevchenko', number: 115 } },
{ id: 6, name: 'anya', age: 31, status: false, address: { city: 'dLviv', street: 'Shevchenko', number: 2 } },
{ id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
{ id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
{ id: 9, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'CShevchenko', number: 12 } },
{ id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
{ id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } }];



for (const user of add) {
   if (user.address.number === 12) {
      console.log(user.name);
   }
  }




