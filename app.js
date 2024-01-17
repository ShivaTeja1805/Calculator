let result = "";
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("input");
let mul = document.querySelector(".mul")

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        try{
            if(button.value==="="){
                result = eval(result);
                display.value = eval(result);
            }
       
            else if(button.value==="C") {
                result = "";
                display.value = result;
            }
            else if(button.value==="DEL") {
                result = result.slice(0, result.length-1);
                display.value= result;
                if(result.length === "1"){
                    result = "";
                    display.value= result;
                }
            }
            else{
                result = result + button.value;
                console.log(result)
                display.value = result;
            }
        }
        catch{
            result="";
            display.value = result;
            result="";
        } 
    })
})

