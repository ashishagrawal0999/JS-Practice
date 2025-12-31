// create element

const newElement = document.createElement("h2");
newElement.textContent = "Strike is Coming";
newElement.id = "second";

// console.dir(newElement); 
// dir is showing the object of newElement

// select element
const element = document.getElementById("first");

// element.after(newElement);
element.before(newElement);


const newElement2 = document.createElement("h3");
newElement2.textContent = "Diwali AaRhi Hai";
newElement2.id = "third";

// correct way to add class 
newElement2.classList.add("holi");
newElement2.classList.add("diwali");

console.log(newElement2);

element.after(newElement2);

// adding styles

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "45px";


// get attribute : used with console.log
// elementname.getAttribute("attribute jiski value chahiye")

console.log(newElement2.getAttribute("class"));

// setting a new attribute
// done by user

// attribute , its value 

console.log(newElement2.setAttribute("hello","Heyyy"));

// creating list item 


const list = document.createElement("li");
list.textContent = "Milk"

const list2 = document.createElement("li");
list2.textContent = "Cherry"

// Note : when an element is already present 

// const unorderedElement = document.createElement("ul");

const unorderedElement = document.getElementById("listing");

unorderedElement.append(list);
unorderedElement.append(list2);

console.log(unorderedElement);


