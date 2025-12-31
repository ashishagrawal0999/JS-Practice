let element = document.querySelector('.mydiv');     // element is parent here

let newElement = document.createElement('span');    // newElement is child here 

newElement.textContent = "This is Love Babbar"

element.insertAdjacentElement('beforebegin' , newElement);

// parent.insertAdjacentElement(position , child);

element.insertAdjacentElement('afterbegin' , newElement);
element.insertAdjacentElement('beforend' , newElement);
element.insertAdjacentElement('afterend' , newElement);