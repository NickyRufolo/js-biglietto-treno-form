function validation(){
    let price = 0.21;
    let ValueKm = document.getElementById(`km`).value;
    let ValueAge = document.getElementById(`eta`).value;
    let passengerName = document.getElementById(`passenger`).value;
        console.log(ValueKm);
        console.log(ValueAge);
        console.log(passengerName);
    let KmPrice = ValueKm * price;
        console.log(KmPrice)
    let discount;
        if (ValueAge == "minorenne") {
            discount = 20;
            document.getElementById('ticket').innerHTML = KmPrice.toFixed(2) - ((KmPrice * discount) / 100) + `$`; //* kmprice - (price * valueKm) * (20 / 100);} //*
        } else if (ValueAge == "Over-65") {
            discount = 40;
            document.getElementById('ticket').innerHTML = KmPrice.toFixed(2) - ((KmPrice * discount) / 100) + `$`;
        }  else if(ValueAge == "maggiorenne") {
            discount = 0 
            document.getElementById('ticket').innerHTML = KmPrice.toFixed(2) + `$`;
        }
        //controllo quali campi ho lasciato vuoti
        if (passengerName == `` || ValueAge == `` || ValueKm == ``) {
            //codice che si attiva solo se tutti gli input sono vuoti
            console.log(`compila tutto!`)
            document.getElementById(`compila`).innerHTML = `Compila tutto!`;

        } 

        // stampa - Id dato durante la stampa 
        document.getElementById(`passengernome`).innerHTML = passengerName;
        document.getElementById(`carrozza`).innerHTML = Math.floor(Math.random() * 10) +1;
        document.getElementById(`CodiceCP`).innerHTML = Math.floor(Math.random() * 100000) +1;        
        }
        
        function resetta(){
            location.reload();
        }
        
