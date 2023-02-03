export function randomText(length){
    //random text
    //1.define so luong ki tu khoang 10
    //3. ngay max 28, thang 1-12, nam 1912-2022
    //4. random gender gan so
    //5. 
    //task 157
    //1. login test lay du lieu tu register
    //2. login list acc
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
export function randomUserName(length){
    var myArray = [
        "Hieu123","BeOan2","BeOanhhello","Hallo123","HieuHuTieu","BeLoanhQuanh","HuTieu123","Hallo123"  
     ];
     
     var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
     return randomItem;
}
export function randomFirstName(length){
    var myArray = [
        "Truong","Tran","Hoang", 
        "Nguyen" , "Ly"  
     ];
     
     var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
     return randomItem;
}
export function randomLastName(length){
    var myArray = [
        "Kim Oanh","Trung Hieu","Mai Lan", 
        "Mai Ngoc" , "Thi Hoa"  
     ];
     
     var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
     return randomItem;
}

export function randomNumber(length){
    const number ='0123456789'
    let result1 = ' ';
    const numberLength = number.length;
    for ( let i = 0; i < length; i++ ) {
        result1 += number.charAt(Math.floor(Math.random() * numberLength));
    }
    return result1;
}
export function randomEmail(){
    var myArray = [
         "BeOanh931@gmail.com","Oanhcute123@gmail.com","Hieucutelala@gmail.com","nthieu.19it3@email.com",
         "HenHana@gmail.com","MaiQuanNa@gmail.com"       
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
      return randomItem;
}


