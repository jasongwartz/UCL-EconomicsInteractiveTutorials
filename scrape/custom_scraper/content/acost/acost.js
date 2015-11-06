$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $("#AC1-button").click(function(){
        var response = parseInt($("#AC1-response").val(),10);
        if( response === 10001) {
			$("#AC1-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  The average cost of 1 is the total cost, 10001, divided by 1.");
        } else {
            $("#AC1-answer").addClass("incorrect")
       		.removeClass("correct").text("The average cost of one toy is the total cost divided by 1.  Add the fixed cost (10000) to the marginal cost of the first toy (1) to get the total cost.  Then divide by 1.");
        }
    });

    $("#AC2-button").click(function(){
        var response = parseInt($("#AC2-response").val(),10);
        if( response === 5001) {
			$("#AC2-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  The average cost of 2 is the total cost, 10002, divided by 2.");
        } else {
            $("#AC2-answer").addClass("incorrect")
       		.removeClass("correct").text("The average cost of two toys is the total cost divided by 2.  Add the fixed cost (10000) to the marginal cost of the two toys (1 each) to get the total cost.  Then divide by 2.");
        }
    });

    $("#AC3-button").click(function(){
        var response = parseInt($("#AC3-response").val(),10);
        if( response === 3333) {
			$("#AC3-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!");
        } else {
            $("#AC3-answer").addClass("incorrect")
       		.removeClass("correct").text("Use the column in the table for an output of 3.  Use the average cost row of numbers.  If you do the calculation yourself, round off to the nearest whole number.");
        }
    });

    $('[name=AC4][value=true]').click(function() {
       $("#AC4-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Joan's is making a profit if and only if the average cost is less than the price.  The average cost to price comparison does not tell you whether have found the output rate that gives you the most profit.  What it does is tell you whether or not you are breaking even.<p>If you would like to see some algebra, click the False choice.");
    });
    $('[name=AC4][value=false]').click(function() {
       $("#AC4-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, it's true.  Here is some algebra.  It shows that if Price > Average cost then Revenue > Total cost:<p>Start with Price > Average Cost.<p>Rewrite that as Price > (Total cost)/Quantity.<p>Multiple both sides of that by Quantity.<p>You get Price X Quantity > Total Cost.<p>Price X Quantity is Revenue<p>So this becomes Revenue > Total Cost<p>which means that you are making a profit.");
    });

 	$("#AC5-button").click(function(){
        var response = parseInt($("#AC5-response").val(),10);
        if( response === 4) {
			$("#AC5-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!");
        } else {
            $("#AC5-answer").addClass("incorrect")
       		.removeClass("correct").text("At this output rate, the total cost is greater than the total revenue.  You are not breaking even.");
        }
       if( response > 4) {
			$("#AC5-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At this output rate, your total cost is less than your total revenue.  However, there is a lower output rate for which that is also true.");
        } 
        if(isNaN(response)) {
        	$("#AC5-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Type a number from the Number of Patients row of the table.");
                }
    });

 	$("#AC6-button").click(function(){
        var response = parseInt($("#AC6-response").val(),10);
        if( response === 8) {
			$("#AC6-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!");
            $("#AC6A-answer")
            .html("");
        } else {
        	$("#AC6-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At an output rate of "+response+", you are breaking even.  However, there is a higher output rate that also breaks even.");
        }
        if( response > 8) {
			$("#AC6-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At this output rate, your total cost is less than your total revenue.  You are not breaking even.");
        } 
        if( response < 4) {
			$("#AC6-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At this output rate, your total cost is more than your total revenue.  You are not breaking even.");
        } 
        if(isNaN(response)) {
        	$("#AC6-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Type a number from the Number of Patients row of the table.");
        
        }
    });


 	$("#AC7-button").click(function(){
        var response = parseInt($("#AC7-response").val(),10);
        if( response === 2) {
			$("#AC7-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!");
            $("#AC7A-answer")
            .html("");
        } else {
        	$("#AC7-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At this output rate, you are more than breaking even.  However, there is a lower output rate that also more than breaks even.");
        }
        if( response < 2) {
			$("#AC7-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At this output rate, your total cost is more than your total revenue.  You are not breaking even.");
        } 
        if(isNaN(response)) {
        	$("#AC7-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Type a number from the Number of Patients row of the table.");
        
        }
    });


 	$("#AC8-button").click(function(){
        var response = parseInt($("#AC8-response").val(),10);
        if( response === 5) {
			$("#AC8-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  Joan's average cost bottoms out at 5 patients per year.");
            $("#AC8A-answer")
            .html("");
        } else {
        	$("#AC8-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("There is another output rate with a lower average cost.");
        } 
        if(isNaN(response)) {
        	$("#AC8-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Type a number from the Number of Patients row of the table.");
        }
    });

    $('[name=AC9][value=false]').click(function() {
       $("#AC9-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Joan's average cost is lowest at 5 patients, but serving the 6th, 7th, etc. patients add even more to profit.  The marginal costs of those patients are less than the $4200 price.<p>The break-even point, the minimum average cost point, and the profit maximizing point are three different points!");
    });
    $('[name=AC9][value=true]').click(function() {
       $("#AC9-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not correct.  Joan's average cost is lowest at 5 patients, but serving the 6th, 7th, etc. patients add even more to profit.  The marginal costs of those patients are less than the $4200 price.");
    });


 	$("#AC10-button").click(function(){
        var response = parseInt($("#AC10-response").val(),10);
        if( response === 8) {
			$("#AC10-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  This is the highest output rate for which the marginal cost is less than $4200.");
            $("#AC10A-answer")
            .html("");
        } else {
        	$("#AC10-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Use the marginal decision rule.  You want the highest output rate that has a marginal cost less than $4200.");
        } 
        if(isNaN(response)) {
        	$("#AC10-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Type a number from the Number of Patients row of the table.");
        }
    });

 	$("#AC11-button").click(function(){
        var response = parseInt($("#AC11-response").val(),10);
        if( response === 4) {
			$("#AC11-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  This is the lowest output rate for which the average cost is less than $3200.  You have to have at least 4 patients to break even.");
            $("#AC11A-answer")
            .html("");
        } else {
        	$("#AC11-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Your costs exceed your revenues at this output rate.  You can tell because your average cost is more than $3200.");
        } 
        if((response > 4) && (response < 9)) {
        	$("#AC11-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Your average cost is less than the price, but there is a lower output rate for which that is also true.");
        }
    });

    $('[name=MC4][value=yes]').click(function() {
       $("#MC4-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The $3700 price is more than the $3000 marginal cost.  You gain $700 by accepting the 2nd patient.  <p><p>So far, we have figured out that we want to contract with at least 2 patients.");
    });
    $('[name=MC4][value=no]').click(function() {
       $("#MC4-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Compare what the 2nd patient pays you with the cost of adding that 2nd patient, which is the the marginal cost of the 2nd patient.");
    });

    $("#MC5-button").click(function(){
        var response = parseInt($("#MC5-response").val(),10);
        if( response === 7) {
			$("#MC5-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! At 7 or below, the marginal cost is less than $3700.  The marginal cost of the 8th patient is more than $3700.");
        } else {
            $("#MC5-answer").addClass("incorrect")
       		.removeClass("correct").text("What is the marginal cost at "+(response+1)+"?  Bigger than $3700?  If not, add that patient.");
        }
        if( response > 7) {
			$("#MC5-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("What is the marginal cost at "+response+" patients?  Bigger than $3700?  If yes, don't add patient "+response+".");
        }
        if( response > 9) {
			$("#MC5-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Answer between 0 and 9.");
        }
    });


    $("#MC6-button").click(function(){
        var response = parseInt($("#MC6-response").val(),10);
        if( response === 7) {
			$("#MC6-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! 7 is your profit-maximizing choice.");
            $("#MC6A-answer")
            .text("Good!");        
        } else {
            $("#MC6-answer").addClass("incorrect")
       		.removeClass("correct").text("No.  Please see the answer to the question above.");
        }
    });
        
    $('[name=MC7][value=false]').click(function() {
       $("#MC7-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The marginal decision rule is not about setting your price.  It is about how to react when the market sets the price and your are what is called a 'price-taker'.");
    });        
    $('[name=MC7][value=true]').click(function() {
       $("#MC7-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("A trick question.  The marginal decision rule is not about setting your price.  It is about how to react when the market sets the price and your are what is called a 'price-taker'.");
    });
        
    $('[name=MC8][value=no]').click(function() {
       $("#MC8-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The marginal cost of the 7th patient is higher than the $3300 price.  Joan's loses money on that patient.");
            $("#MC8A-answer")
            .text("");        
    });        
    $('[name=MC8][value=yes]').click(function() {
       $("#MC8-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Compare the marginal cost of the 7th patient with the price, which is now $3300.");
    });

    $('[name=MC9][value=yes]').click(function() {
       $("#MC9-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The marginal cost of the 6th patient is less than the $3300 price.  Joan's should accept that patient.");
            $("#MC9A-answer")
            .text("");        
    });        
    $('[name=MC9][value=no]').click(function() {
       $("#MC9-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Compare the marginal cost of the 6th patient with the price, which is $3300.");
    });

       
    $('[name=MC10][value=no]').click(function() {
       $("#MC10-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The marginal cost of the 6th patient is higher than the $2900 price.  Joan's loses money on that patient.");
            $("#MC10A-answer")
            .html("<strong>$3000</strong>");        
    });        
    $('[name=MC10][value=yes]').click(function() {
       $("#MC10-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Compare the marginal cost of the 6th patient with the price, which is now $2900.");
		$("#MC10A-answer")
        .html("<strong>$3000</strong>");        
    });


    $("#MC11-button").click(function(){
        var response = parseInt($("#MC11-response").val(),10);
        if( response === 5) {
			$("#MC11-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! At 5, the marginal cost is less than $2900.  Above that, the marginal cost is more than $2900.");
            $("#MC11A-answer")
            .html("");
        } else {
            $("#MC11-answer").addClass("incorrect")
       		.removeClass("correct").text("Too low.  The 3rd, 4th, and 5th patients all have marginal costs below $2900.  Joan's does better by serving those.");
        }
        if( response > 5) {
			$("#MC11-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("What is the marginal cost at "+response+" patients?  Bigger than $2900?  If yes, don't add patient "+response+".");
        }
        if( response > 9) {
			$("#MC11-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Answer between 0 and 9.");
        }
    });

    $("#MC12-button").click(function(){
        var response = parseInt($("#MC12-response").val(),10);
        if( response === 0) {
			$("#MC12-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  Her revenue and her total cost are equal.  No profit.");
            $("#MC12A-answer")
            .html("");
        } else {
            $("#MC12-answer").addClass("incorrect")
       		.removeClass("correct").text("Profit is Revenue minus Total Cost at 5 patients.");
        }
    });

    $("#MC13-button").click(function(){
        var response = parseInt($("#MC13-response").val(),10);
        if( response === 8) {
			$("#MC13-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! At 8, the marginal cost is less than $2900.  Above that, the marginal cost is more than $2900.");
            $("#MC13A-answer")
            .html("");
        } else {
            $("#MC13-answer").addClass("incorrect")
       		.removeClass("correct").text("Too low.  The 3rd, 4th, and 5th patients, etc., all have marginal costs below $2900.  Joan's does better by serving those.  How far does the 'etc.' go?");
        }
        if( response > 8) {
			$("#MC13-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("What is the marginal cost at "+response+" patients?  Bigger than $2900?  If yes, don't add patient "+response+".");
        }
        if( response > 9) {
			$("#MC13-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Answer between 0 and 9.");
        }
    });
       
    $('[name=MC14][value=1]').click(function() {
       $("#MC14-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("This is what independent doctors often recommend.  It requires that the value of a life year be more than $1.2 million.  That is higher than the $200,000 number that I asked you to use.");
    });        
    $('[name=MC14][value=2]').click(function() {
       $("#MC14-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("This requires that the value of a life year be more than $260,000.  That is higher than the $200,000 number that I asked you to use.");
    });        
    $('[name=MC14][value=3]').click(function() {
       $("#MC14-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("This is the implied choice if the value of a life year is between $180,000 and $260,000.  Some insurance companies have decided that this is an appropriate range for the value of a life year, so they only pay for PAP tests every three years.");
    });        
    $('[name=MC14][value=4]').click(function() {
       $("#MC14-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("This the choice if value of a life year is between $10,000 and $180,000.  That is lower than the $200,000 number that I asked you to use.  Some insurance companies have decided that this is an appropriate range for the value of a life year, so they only pay for PAP tests every four years.  Good thing that four years is the longest interval that Eddy considered!");
    });        

 


});