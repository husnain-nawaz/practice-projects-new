// let current = "0";

// function render() {
//   document.getElementById("display").textContent = current;
// }
// export function calcAction(val) {
//   // CLEAR
//   if (val === "C" || val === "CE") {
//     current = "0";
//   }
//   // DELETE LAST
//   else if (val === "Del") {
//     if (current.length > 1) {
//     current = current.slice(0, -1);
//     } else {
//     current = "0";
//     }
//     }
//   // EQUALS
//   else if (val === "=") {
//     try {
//       current = eval(current);
//     } catch {
//       current = "Error";
//     }
//   }
//   // DEFAULT (numbers + operators + dot)
//   else {
//     if (current === "0") {
//       current = val;
//     } else {
//       current += val;
//     }
//   }

//   render();
// }


let current = "0";
function render(){
    document.getElementById("display").textContent = current;
}
export function calcAction(val){
    // c and ce ki value he 0 kr do
    if(val === "C" || val === "CE"){
        current = "0";
    }
    // delete last digits
    else if(val === "Del"){
        if(current.length>1){
            current = current.slice(0,-1)
        }
        else{
            current = "0";
        }
    }
    // Equal operation perform by eval
    else if(val === "="){
        try{
            current = eval(current).toFixed(8);
        }
        catch{
            current = "Error"
        }
    }
    // baki sari values or operations c and ce ky ilava
    else{
    if(current === "0"){
        current = val;
    }else{
        current+=val;
    }
}
    render();
}





