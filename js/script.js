/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 * objects having properties of quote, source(author of the quotes), citation(name of the book), year (it was published), and interesting tags
***/
let quotes = [
    {
        quote: "We all were sea-swallow'd, though some cast again. And by that destiny to perform an act. Whereof what's past is prologue; what to come, In yours and my discharge.",
        source: 'William Shakespeare',
        citation: 'The Tempest',
        year: 1623,
        tags: 'Drama'
    },
    {
        quote: "Cowards die many times before their deaths; The valiant never taste of death but once. Of all the wonders that I yet have heard, It seems to me most strange that men should fear; Seeing that death, a necessary end, Will come when it will come.",
        source: 'William Shakespeare',
        citation: 'Julius Caesar',
        year: 1599,
        tags: 'Greek'
    },
    {
        quote:"So we beat on, boats against the current, borne back ceaselessly into the past.",
        source: "F. Scott Fitzgerald",
        citation: "The Great Gatsby",
        year:1925
    },
    {
        quote:"Love is simply the name for the desire and pursuit of the whole.",
        source:"Plato",
        citation:"The Symposium",
        year: "385 BC"
    },
    {
        quote:"Despite so many ordeals, my advanced age and the nobility of my soul make me conclude that all is well.",
        source: "Albert Camus",
        citation: "The Myth of Sisyphus",
        year: 1942
    }

];


/***
 * `getRandomQuote` function
 takes an array (in this case the quotes array), get the length of the array and multiply it by a random number between 0 to 1 to get a random number from 0 to the length of the array.
 finaly use arr[randomNumber] to find the object correspond to that randomNumber (index)
***/

function getRandomQuote(){
    let randomNumber = Math.floor(Math.random()*quotes.length);
    return quotes[randomNumber];
};



/* create random color and assign it to the background Color
acknowlegde the usage of document.body.style.background = randomColor
from: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
*/
function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*256);
    return randomNumber;
}
function getRandomColor(){
    let randomColor=`rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`;
    document.body.style.background = randomColor;
}



/***
 * `printQuote` function
 1. call the getRandomQuote function to generate a random quote object.
 2. get the objects properties (quote, source, citation, and year) and set it equal to html containing <p> elements.
 3. use if statements to concatenate objects with different properties
 4. finally return html string.
***/



function printQuote(){
    let ranQuote = getRandomQuote();
    let html = `
        <p class="quote"> ${ranQuote.quote} </p>
        <p class="source"> ${ranQuote.source}
        `;

    if ('citation' in ranQuote) {
        html += `<span class="citation"> ${ranQuote.citation} </span>`
    };
    if ('year' in ranQuote) {
        html += `<span class="year"> ${ranQuote.year} </span>`
    };
    if ('tags' in ranQuote){
        html +=`<span class="tags"> ${ranQuote.tags} </span>`
    };

    html +=`</p>`;

    /*
    change the innerHTML to display the message in the browser
    */
    document.getElementById('quote-box').innerHTML = html;

    /*
    change the background color everytime the quote switch
    */
    getRandomColor();
};

/*
this uses a timing method to print a new quote to the page at regular intervals of 10 seconds or 10000milliseconds.
citation: https://www.w3schools.com/jsref/met_win_setinterval.asp
*/

setInterval (printQuote,10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote , false);
