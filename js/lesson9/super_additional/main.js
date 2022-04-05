let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

//                                                      =======//=======
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// const newUser = [];
// for (const user of users) {
//     newUser.push(user.address);
// }

//                                                      =======//=======

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// for (const user of users) {
//     const div = document.createElement('div');
//     div.classList.add('user')
//     div.innerText = `Name: ${user.name}
//                      Age: ${user.age}
//                      Status: ${user.status}
//                      Address:
//                      city - ${user.address.city}
//                      country - ${user.address.country}
//                      street - ${user.address.street}
//                      house number - ${user.address.houseNumber}`;
//     const hr = document.createElement('hr');
//     document.body.append(div, hr);
// }

//                                                      =======//=======

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//     const div = document.createElement('div');
//     div.classList.add('user')
//
//     const divName = document.createElement('div');
//     divName.classList.add('name');
//     divName.innerText = `Name: ${user.name}`;
//
//     const divAge = document.createElement('div');
//     divAge.classList.add('age');
//     divAge.innerText = `Age: ${user.age}`;
//
//     const divStatus = document.createElement('div');
//     divStatus.classList.add('status');
//     divStatus.innerText = `Status: ${user.status}`;
//
//
//     const divAddress = document.createElement('div');
//     divAddress.classList.add('address');
//
//     const divAddressCity = document.createElement('div');
//     divAddressCity.classList.add('city');
//     divAddressCity.innerText = `city - ${user.address.city}`;
//
//     const divAddressCountry = document.createElement('div');
//     divAddressCountry.classList.add('country');
//     divAddressCountry.innerText = `country - ${user.address.country}`;
//
//     const divAddressStreet = document.createElement('div');
//     divAddressStreet.classList.add('street');
//     divAddressStreet.innerText = `street - ${user.address.street}`
//
//     const divAddressHouseNumber = document.createElement('div');
//     divAddressHouseNumber.classList.add('house_number');
//     divAddressHouseNumber.innerText = ` house number - ${user.address.houseNumber};`
//
//     divAddress.append(divAddressCity,divAddressCountry,divAddressStreet,divAddressHouseNumber);
//
//
//     div.append(divName,divAge,divStatus,divAddress);
//
//     const hr = document.createElement('hr');
//     document.body.append(div, hr);
// }

//                                                      =======//=======

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// Я одразу так зробив в попередньому завданні, тому пропускаю


