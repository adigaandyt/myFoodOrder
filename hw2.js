//Data access tier


function save_info()
{
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var msg = document.getElementById("msg").value;
    var order=  localStorage.getItem("orderNumber"); //change key to order after this line
    var dbStr=stringify(fname,lname,phoneNumber,msg,order);
    localStorage.setItem("orderNumber",dbStr);
   


}

//save order and amount as a string
function constructOrder(food1, food2, food3, food4, food5, food1_q, food2_q, food3_q, food4_q, food5_q, salad1, salad2, salad3, salad4, salad5, salad1_q, salad2_q, salad3_q, salad4_q, salad5_q) {
    var order = '';
    var sum= 0;
    if (food1) {
        order += "Oven baked salmon: " + food1_q + ", ";
        sum+=food1_q*90;
    }
    if (food2) {
        order += "Veal fillet: " + food2_q + ", ";
        sum+=food2_q*120;
    }
    if (food3) {
        order += "Steak entrecote: " + food3_q + ", ";
        sum+=food3_q*125;
    }
    if (food4) {
        order += "Fried shurmus: " + food4_q + ", ";
        sum+=food4_q*85;
    }
    if (food5) {
        order += "Cooked calamari shurmus: " + food5_q + ", ";
        sum+=food5_q*90;
    }


    // Adding salads
    if (salad1) {
        order += "Fattoush: " + salad1_q + ", ";
        sum+=salad1_q*60;
    }
    if (salad2) {
        order += "One million: " + salad2_q + ", ";
        sum+=salad2_q*55;
    }
    if (salad3) {
        order += "Watercress: " + salad3_q + ", ";
        sum+=salad3_q*65;
    }
    if (salad4) {
        order += "Tabouleh: " + salad4_q + ", ";
        sum+=salad4_q*45;
    }
    if (salad5) {
        order += "White cabbage: " + salad5_q + ", ";
        sum+=salad5_q*50;
    }


    // Remove trailing comma and space
    order = order.slice(0, -2);
   
    return [order,sum];
}






 //this function to send the order that the user has ordered in email to the chef
 function sendGmail() {
    var email = "adamm3002@gmail.com";
    var subject = "NewOrder";
    var price = localStorage.getItem("price");
    var order_det = localStorage.getItem("order");
    var body = "Name: " + document.getElementById("fname").value + " " + document.getElementById("lname").value + "\nPhone Number:" + document.getElementById("phoneNumber").value + "\nDetails: " + order_det  +   "\nTotal cost: " + price +" NS"+ "\nNotes: " + document.getElementById("msg").value;
    // Construct the mailto link
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    // Open the default email client to send the email
    window.location.href = mailtoLink; //redirect to mail
    document.location.href='done.html'; //redirect to done.html
   }






   function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }


   function  stringify(fname,lname,phoneNumber,msg,order){
    var nameStr = 'name: ' + fname;
    var lastNameStr = 'lastName: ' + lname;
    var phoneNumberStr = 'phone Number: ' + phoneNumber;
    var msgStr = 'massage: ' + msg;
    var orderStr = 'order: ' + order;
    var dbStr = '{'+ nameStr + ',' + lastNameStr + ',' +  phoneNumberStr + ',' + msgStr + ',' + orderStr + '}';
    return dbStr;    
}
