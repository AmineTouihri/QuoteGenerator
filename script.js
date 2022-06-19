// fetchin data 

let Quotes=[];
let Quote="";

const author=document.getElementById('author');
const quoteText=document.getElementById('quote');
const newQuoteBtn=document.getElementById('new-quote');
const twitterBtn=document.getElementById('twitter');
const quoteContainer=document.getElementById('quote-container');
const loader=document.getElementById('loader');


const DefultAuth='someOne'

function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

//complete fetching the data from the api 
function complete(){

    loader.hidden=true;
    quoteContainer.hidden=false;
}


function newQuotes(){
    loading();
    Quote=Quotes[Math.floor(Math.random()*Quotes.length)]
    console.log(Quote);
    if(Quote.author!=null){
        author.textContent=Quote.author
    }
    else  {author.textContent=DefultAuth;}
   
    quoteText.textContent=Quote.text
    complete();
}

async function getQuotes(){
    loading();

try {
    const TabQuotes=await fetch('https://type.fit/api/quotes');
    Quotes=await TabQuotes.json();
   // console.log(Quotes);
    newQuotes();
    complete();
    

} catch (error) {
    console.log(error);
}

}

function twittQuote(){
    const url=`https://twitter.com/intent/tweet?text=${quoteText.textContent} by -- ${author.textContent}--`;
    window.open(url,'_blank');
}

//event listner 
 
twitterBtn.addEventListener('click',twittQuote);

getQuotes();
newQuoteBtn.addEventListener('click',newQuotes)