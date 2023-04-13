let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall. - ...
    "`,
    person:`Amrikos Sobal`
},{
    quote:`"The way to get started is to quit talking and begin doing. - ... "`,
    person:`Huas Ilaji`
},{
    quote:`"Your time is limited, so don't waste it living someone else's life. ..
    "`,
    person:`Soba Nuushul`
},{
    quote:`"If life were predictable it would cease to be life, and be without flavor. -
    "`,
    person:`Soun Pari`
},{
    quote:`"“Love your family, work super hard, live your passion.” — ...
    "`,
    person:`Usfo Ihvaj`
},];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})