const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Happiness depends upon ourselves.",
    "Do what you can, with what you have, where you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Dream big and dare to fail.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Success is getting what you want. Happiness is wanting what you get.",
    "Difficulties in life are intended to make us better, not bitter.",
    "If opportunity doesn’t knock, build a door.",
    "The only way to do great work is to love what you do.",
    "Act as if what you do makes a difference. It does.",
    "You miss 100% of the shots you don’t take.",
    "Opportunities don’t happen. You create them.",
    "Hardships often prepare ordinary people for an extraordinary destiny."
];

function myfunction(){
    let random_quote = Math.floor(Math.random() * quotes.length);
    document.getElementById("container").textContent = quotes[random_quote];
}