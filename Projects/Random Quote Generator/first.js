const quotes = [ "What doesn't kill us makes us stronger",
"Whatever you are, be a good one",
"You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time."	
]

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click',()=>{

    // selexting random quotes from quotes array
    const index = Math.floor(Math.random()*3);
    quote.textContent = quotes[index];

})