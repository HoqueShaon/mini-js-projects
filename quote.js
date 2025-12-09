document.getElementById('random-back').addEventListener('click', function(){
    window.location.href = 'front.html'
})

const quotes =[
    "The only thing we have to fear is fear itself",
    "The only way to do great work is to love what you do." ,
    "You must be the change you wish to see in the world.",
    "It always seems impossible until it's done." ,
    "Do what you can, with what you have, where you are.",
    "Imagination is more important than knowledge.",
    "To be, or not to be: that is the question.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "In three words I can sum up everything I've learned about life: it goes on."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

function generateQuote(){
    const randomIdx = Math.floor(Math.random() * quotes.length )
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
}