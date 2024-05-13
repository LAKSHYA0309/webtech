// function capital(){

//    const count = document.getElementById("#country").value;
//    const ans = document.getElementsByClassName(".ans"); 

//    switch(count){
//     case "U.S.A":
//         ans.textContent = "WASHINGTON DC";
//         break;
//         case "Germany":
//                     ans.textContent = "Berlin";
//                     break;
//                 case "INDIA":
//                     ans.textContent = "NEW DELHI";
//                     break;
//                 case "China":
//                     ans.textContent = "Beijing";
//                     break;
//                 case "Russia":
//                     ans.textContent = "Moscow";
//                     break;
//    }
// }




function capital() {
    const count = document.getElementById("country").value;
    const ans = document.querySelector(".ans");

    switch (count) {
        case "usa":
            ans.textContent = "WASHINGTON DC";
            break;
        case "germany":
            ans.textContent = "Berlin";
            break;
        case "india":
            ans.textContent = "NEW DELHI";
            break;
        case "china":
            ans.textContent = "Beijing";
            break;
        case "russia":
            ans.textContent = "Moscow";
            break;
      ;
    }
}
