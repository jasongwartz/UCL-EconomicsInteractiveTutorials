$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $("#MC1-button").click(function(){
        var response = parseInt($("#MC1-response").val(),10);
        if( response === 4000) {
			$("#MC1-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The marginal cost of the 8th patient is $4000.");
			$("#MC1A-answer")
            .html("<table CELLSPACING=5 ><tr><td ALIGN=CENTER>Number of Patients<br><b>n</b></td><td>Total Cost<br>of <b>n</b> patients</td><td>Marginal Cost<br>of the <b>n</b>th patient</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>0</td><td>$1000</td><td>--</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>1</td><td>$4500</td><td>$3500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>2</td><td>$7500</td><td>$3000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>3</td><td>$10000</td><td>$2500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>4</td><td>$12000</td><td>$2000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>5</td><td>$14500</td><td>$2500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>6</td><td>$17500</td><td>$3000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>7</td><td>$21000</td><td>$3500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>8</td><td>$25000</td><td><strong>$4000</strong></td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>9</td><td>$30000</td><td>$5000</td></tr></table>");
        } else {
            $("#MC1-answer").addClass("incorrect")
       		.removeClass("correct").text("How much does the cost increase when Joan's goes from 7 patients to 8?");
			$("#MC1A-answer")
            .html("<table CELLSPACING=5 ><tr><td ALIGN=CENTER>Number of Patients<br><b>n</b></td><td>Total Cost<br>of <b>n</b> patients</td><td>Marginal Cost<br>of the <b>n</b>th patient</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>0</td><td>$1000</td><td>--</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>1</td><td>$4500</td><td>$3500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>2</td><td>$7500</td><td>$3000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>3</td><td>$10000</td><td>$2500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>4</td><td>$12000</td><td>$2000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>5</td><td>$14500</td><td>$2500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>6</td><td>$17500</td><td>$3000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>7</td><td><strong>$21000</strong></td><td>$3500</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>8</td><td><strong>$25000</strong></td><td>$4000</td></tr><tr ALIGN=RIGHT><td ALIGN=CENTER>9</td><td>$30000</td><td>$5000</td></tr></table>");
        }
    });

    $('[name=MC2][value=yes]').click(function() {
       $("#MC2-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The $3700 price is more than the $3500 marginal cost.  You gain $200 by accepting the first patient.");
    });
    $('[name=MC2][value=no]').click(function() {
       $("#MC2-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Compare what the first patient pays you with the cost of adding that first patient.  The cost of adding the first patient is the marginal cost of the 1st patient.");
    });

    $('[name=MC3][value=1]').click(function() {
       $("#MC3-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  You are losing money either way.  You reduce your loss from $1000 to $800 by taking the 1st patient.    We assume that you are stuck with the fixed cost.");
    });
    $('[name=MC3][value=0]').click(function() {
       $("#MC3-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not correct.  You reduce your loss from $1000 to $800 by taking the 1st patient.  We assume that you can't get out of your fixed cost.");
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