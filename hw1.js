  
	 function verifyOrder(){
        localStorage.clear();
       
        // Foods selected
        var food1 = document.getElementById('food1').checked;  
        var food2 = document.getElementById('food2').checked;
        var food3 = document.getElementById('food3').checked;
        var food4 = document.getElementById('food4').checked;
        var food5 = document.getElementById('food5').checked;
       
        // Amount of food
        var food1_q = document.getElementById('food1_q').value;
        var food2_q = document.getElementById('food2_q').value;
        var food3_q = document.getElementById('food3_q').value;
        var food4_q = document.getElementById('food4_q').value;
        var food5_q = document.getElementById('food5_q').value;


       
        // Salads selected
        var salad1 = document.getElementById('salad1').checked;    
        var salad2 = document.getElementById('salad2').checked;
        var salad3 = document.getElementById('salad3').checked;
        var salad4 = document.getElementById('salad4').checked;
        var salad5 = document.getElementById('salad5').checked;
        // Amount of salad
        var salad1_q = document.getElementById('salad1_q').value;
        var salad2_q = document.getElementById('salad2_q').value;
        var salad3_q = document.getElementById('salad3_q').value;
        var salad4_q = document.getElementById('salad4_q').value;
        var salad5_q = document.getElementById('salad5_q').value;




        //alert massage when a input is invalid
        if (!(food1 || food2 || food3 || food4 || food5 || salad1 || salad2 || salad3 || salad4 || salad5))
                alert("Please select at least one item.");
        else if(food1_q<1 & food1|| food2_q<1 &food2|| food3_q<1& food3|| food4_q<1 &food4|| food5_q<1 &food5||salad1_q<1 &salad1|| salad2_q<1 & salad2||salad3_q<1 &salad3|| salad4_q<1 & salad4|| salad5_q<1 & salad5)
          		 alert("the NEGATIVE or ZERO amount is not valid,remove the select or change the value of amount to POSITIVE number");
        else{
        var price;
        var sum=0;
        //gen order number
        var orderNumber = generateRandomInt(1, 200);
        //save order and amount in a string
       
        var all = constructOrder(food1, food2, food3, food4, food5, food1_q, food2_q, food3_q, food4_q, food5_q, salad1, salad2, salad3, salad4, salad5, salad1_q, salad2_q, salad3_q, salad4_q, salad5_q);
        order=all[0];
        sum=all[1];
        //save order in database
        localStorage.setItem("order", order);
        localStorage.setItem("orderNumber", order);//needs to go in database folder
        localStorage.setItem("price",sum);
        document.location.href='projectOrder.html';
        }
    }
        //random number gen

       
    // check the output in page 2
    function verifyData() {
      var FirstName = document.getElementById("fname").value;
      var LastName = document.getElementById("lname").value;
      var phone = document.getElementById("phoneNumber").value;
      var regex = /^[a-zA-Z]+$/;//regex to test if input type of name is valid
      var regex1 = /^\d{10}$/;
      if (!FirstName || !LastName ||!phone ||!regex.test(FirstName) ||!regex.test(FirstName) ||!regex1.test(phone)) {
             alert("please enter Valid data");}
	  else {
    // Play audio
          var audio = document.getElementById("audioPlayer")
          audio.play()
          setTimeout(function () {
      // Execute save_info() and sendGmail() after the delay
          save_info()
          sendGmail()
       // Open a new page after the delay
      window.location.href = "done.html"
    }, 3000)
  }
}
	
	 function game()
	 {
		 document.location.href='game.html';
	 }