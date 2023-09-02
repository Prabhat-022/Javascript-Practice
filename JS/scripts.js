// console.log(window);

// const ul = document.querySelector('.items');

// // ul.remove();
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerHTML= 'world';

// const Myform = document.querySelector('.my-form');
// const msg = document.querySelector('.msg');
// const inputName = document.querySelector('#name')
// const inputEmail = document.querySelector('#email');
// const btn = document.querySelector('.btn');
// const Users = document.querySelector('.users');

// Myform.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if (inputName.value == '' || inputEmail.value == '') {
//         msg.classList.add('error');
//         msg.innerHTML = "Please enter all fields";

//         setTimeout(() => msg.remove(), 3000);

//     } else {
//         alert('success');
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(
//         `    ${ inputName.value } : ${ inputEmail.value }`
//         ));

//         Users.appendChild(li);

//         // clear fields
//         inputName.value = '';
//         inputEmail.value = '';

//     }
// }

// ==========================================function
function favoriteAnimal() {
    return  " is my favorite animal!"
}

console.log(favoriteAnimal('Dog'))