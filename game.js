var bulls, cows;
function rnd(a, b){
    return Math.floor(Math.random()*(b-a+1+a));
}
function makeNum(){
    var nn = ""; // making nonrepeatable numbers
    for (let i = 0; i < 4; i++){
        do{
            var c = rnd(0, 9)
        }
        while (nn.indexOf(c) >= 0);
        nn = nn + c;
    }
    return nn;
}
function analize(knownNumber, attempt){
    bulls = 0;
    cows = 0;
    for (let i = 0; i < 4; i++){
        if (knownNumber[i] == attempt[i])
        bulls++;
        else if(knownNumber.indexOf(attempt[i]) >= 0)
        cows++;
    }
}
var compNumbers = makeNum();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Input number: ", function(writtenNumber) {
    for (let i = 0; i < 10; i++){
        analize(compNumbers, writtenNumber);
        var result = bulls + " Bulls " + cows + " Cows";
        if(writtenNumber === compNumbers){
            console.log("Numbers entered by computer: "+ compNumbers);
            console.log("You win!");
            break;
        }
        else{
            console.log("Numbers entered by computer: "+ compNumbers);
            console.log("The result is: " + result)
            break;
        }
    }
    rl.close();
});
