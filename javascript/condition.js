let customerWallet = 1000000;
let canonM50Price = 200000;

if(customerWallet >= canonM50Price){
    console.log("camera bought, will send it to you soon")
}else{
    console.log("Oga, you have "+ customerWallet + " in your wallet and you want to purchase camera of "+ canonM50Price+ ". Do you think we are mumu?")
}

let emmaWallet = 200;
let canonEOS400D =290000;
if(emmaWallet >= canonEOS400D){
    console.log("successfully");
}else{
    console.log("oga you be theif");
}

let studentScore = 40;

if(studentScore === parseFloat('40')){
    console.log("you have E");
}else if(studentScore >=45 && studentScore <= 49){
    console.log("you score D");
}else if(studentScore >=50){
    console.log("you score C");
}else if(studentScore < 40){
    console.log("you score F, failed");
}else{
    console.log('yay');
}
