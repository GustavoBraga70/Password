const prompt = require('prompt-sync')({sigint:true});

let password = prompt("Digite sua senha de 6 dígitos de acesso: ");

if ( password == "fgk37a" ) {
    console.log ("ACESSO LIBERADO!");
}
else {
    console.log ("ACESSO NEGADO!");
}