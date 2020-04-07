// https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=mad&to_currency=usd&apikey=2HDE6OJEER5BBMM3

const API_URL = 'https://www.alphavantage.co/';
const API_KEY = '2HDE6OJEER5BBMM3';


function log(a) { console.log(a); }


async function convertCurency(fromC){

    let from = 'from_currency=' + document.getElementById('c1').value;
    let to = 'to_currency=' + document.getElementById('c2').value;

    if (fromC === 'from c2'){
        from = 'from_currency=' + document.getElementById('c2').value;
        to = 'to_currency=' + document.getElementById('c1').value;
    }
    
    try {
        const json = await (await fetch(`${API_URL}query?function=CURRENCY_EXCHANGE_RATE&${from}&${to}&apikey=${API_KEY}`)).json();
        
        const rate = parseFloat(json["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
        log(rate);

        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
    
        if (fromC === 'from c1'){
            document.getElementById('number2').value = number1 * rate;
        }
        else{
            document.getElementById('number1').value = number2 * rate;
        }
    
        document.getElementById('status').textContent = "";
    } catch (err) {
        log(err);
        document.getElementById('status').textContent = "Veuillez réessayer dans 10 secondes";
    }
}