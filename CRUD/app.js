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

const list3 =  document.createElement("li");
list3.textContent = "Halwa";

const list4 = document.createElement("li");
list4.textContent = "Paneer";

// Note : when an element is already present 

// const unorderedElement = document.createElement("ul");

const unorderedElement = document.getElementById("listing");

// append : insert in last position

// unorderedElement.append(list);
// unorderedElement.append(list2);

// we can also give multiple elements 

unorderedElement.append(list,list2);

// prepend : insert in first position
unorderedElement.prepend(list3,list4);

// unorderedElement.prepend(list4);

// console.log(unorderedElement);

// dir ke andar child check krna ho toh immediate parent ko select krna hoga console.log me jaise body ke andar child hai toh document.body

// Inserting element at a particular position -> using after , before

unorderedElement.after()

list.after(list4);
list3.before(list2);

// now , list elements array ke format me store hai so we access that using index 

// Doubt 

unorderedElement.children[0].after(list4);

// How to add list items to an existing list



const arr = ["Mango" , "Apple" , "Banana", "Orange"]

// not a good practice ->  ui ke liye sahi nhi hai kyoki har baar jab element add hoga utne baar ui me hit hoga 

// for(fruit of arr){
//     console.log(fruit);

//     // creating a new list to add fruits of arr 

//     const listItems = document.createElement("li");
//     listItems.textContent = fruit;
//     unorderedElement.append(listItems);
// }

// creating fragment

const fragment = document.createDocumentFragment();

for(fruit of arr){
 console.log(fruit);

// creating a new list to add fruits of arr 

const listItems = document.createElement("li");
    listItems.textContent = fruit;
    // adding list items in fragment to avoid hitting multiple times in ui
  fragment.append(listItems);
 }

 // adding fragment items in unorderedElement

 unorderedElement.append(fragment);


 // Delete 
// using remove();

const s1 = document.getElementById("first");
s1.remove();


// parent.children -> list of children dedega 
// parent.children[index] -> list of children me se uss index ka children dedega 

let month = document.getElementById("months");
console.log(month.children[2]);

// para agar parent.childnode krenge toh node list dega jisme text bhi include hoga -> text mtlb value nhi par space  \n , space ke liye show krega 

// agar 3 listitem hai aur do baar line change hui toh nodelist me 5 items honge 

// other way to insert or

// insertAdjacentElement("beforebegin",lister);
// ("beforeend")
// ("afterbegin")
// ("afterend")


const lister = document.createElement("li");
lister.textContent = "Mango";

month.insertAdjacentElement("beforebegin",lister);




