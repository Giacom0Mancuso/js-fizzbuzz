

let Num100 = [];

for (let i = 0; i <= 100; i++) {
    if(i % 3 == 0){
        if(i % 5 == 0){
            nuovoVincente = "FizzBuzz";
            Num100.push(nuovoVincente);
            }
    else{
        let nuovoVincente = "fizz";
        Num100.push(nuovoVincente);
    }
    }
    if(i % 5 == 0){
    nuovoVincente = "buzz";
    Num100.push(nuovoVincente);
    }
    else{
    nuovoVincente = i;
    Num100.push(nuovoVincente);
    }
}


for (let i = 0; i < Num100.length; i++) {
    console.log(Num100[i]);
}
