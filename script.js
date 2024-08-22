let input=document.getElementById("inp");
let img=document.getElementById("img");
function myFunc(){
    let value=input.value;
    if(value){
        
        img.style.border="1px solid silver";
        img.style.padding="10px";
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    }else{
        alert("please Fill the input Field for QR Code Generation");
    }

}