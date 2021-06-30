const switchbtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";
switchbtn.addEventListener("click", ()=>{
    if(switchbtn.checked == true){
        document.body.setAttribute("data-theme","dark");
    }else{
        document.body.setAttribute("data-theme","");
    }
});