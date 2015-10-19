$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');


$('[name=riska1][value=keep]').click(function() {
       $("#riska1-answer")
       .html("This is the prudent choice.  It is also the risk averse choice.  The expected value of playing again is $10,000, but you only get to play once, so the law of large numbers does not help you.  You prefer a sure $10,000.");
    });


    $('[name=riska1][value=play]').click(function() {
       $("#riska1-answer")
       .html("You are not risk averse.  You prefer risk.  You are happy to risk your $10,000 to make $20,000, even though your expected value for going on is the same as what you have for sure.");
    });
 

    $('[name=riska1][value=either]').click(function() {
       $("#riska1-answer")
       .html("You are risk-neutral.  Taking a chance or not does not matter to you, if the expected value of taking a chance is the same as the value of the $10,000 you have.");
    });
    
    $('[name=riska2][value=keep]').click(function() {
       $("#riska2-answer")
       .html("This is risk aversion, definitely.  The expected value of playing again is one-half times $22,000, which is $11,000.  Stopping now has a value of $10,000.  You are willing to forgo $1000 in expected value to avoid risking your $10,000.");
    });


    $('[name=riska2][value=play]').click(function() {
       $("#riska2-answer")
       .html("You are not very risk averse.  The expected value of playing again is one-half times $22,000, which is $11,000.  Stopping now has a value of $10,000.  You are willing to risk your $10,000 to get $1000 in expected additional value.");
    });
 
    
	$("#riska3-button").click(function(){
        var response = parseFloat($("#riska3-response").val(),10);
        
        if (response > 20000) {
           $("#riska3-answer").html("Good.  In effect, $"+response+" is worth just twice as much as $10000 to you.");
        } 
       if (response >= 100000) 
           $("#riska3-answer").html("You are very risk averse.  For you, $"+response+" is worth only twice as much as $10000.");
       if (response < 20000) 
           $("#riska3-answer").html("You are risk preferring.  For you, $"+response+" is worth twice as much as $10000.");
        if (response === 20000) 
           $("#riska3-answer").html("You are risk-neutral.  For you, $"+response+" is worth twice as much as $10000.");
          
    });
    
        
	$("#riska420-button").click(function(){
           $("#riska4-answer").html('<img src="riska420.jpg" height="452" width="800">');
    });
    $("#riska430-button").click(function(){
           $("#riska4-answer").html('<img src="riska430.jpg" height="452" width="800">');
    });
    $("#riska440-button").click(function(){
           $("#riska4-answer").html('<img src="riska440.jpg" height="452" width="800">');
    });
    $("#riska450-button").click(function(){
           $("#riska4-answer").html('<img src="riska450.jpg" height="452" width="800">');
    });
    $("#riska460-button").click(function(){
           $("#riska4-answer").html('<img src="riska460.jpg" height="452" width="800">');
    });
    $("#riska470-button").click(function(){
           $("#riska4-answer").html('<img src="riska470.jpg" height="452" width="800">');
    });
    $("#riska480-button").click(function(){
           $("#riska4-answer").html('<img src="riska480.jpg" height="452" width="800">');
    });
    $("#riska490-button").click(function(){
           $("#riska4-answer").html('<img src="riska490.jpg" height="452" width="800">');
    });
    $("#riska4100-button").click(function(){
           $("#riska4-answer").html('<img src="riska4100.jpg" height="452" width="800">');
    });
        
	$('[name=riska5][value=A]').click(function() {
       $("#riska5-answer")
       .html("A is your choice.  A 10% chance at $1 million.");
    });


    $('[name=riska5][value=B]').click(function() {
       $("#riska5-answer")
       .html("B is your choice.  A 9% chance at $5 million.");
    });
 
	$('[name=riska6][value=C]').click(function() {
       $("#riska6-answer")
       .html("C is your choice.  A sure $1 million.");
    });


    $('[name=riska6][value=D]').click(function() {
       $("#riska6-answer")
       .html("D is your choice.   A 1% chance of nothing.  A 9% chance at $5 million. A 90% chance at $1 million.");
    });
 
	$('[name=riska7][value=right]').click(function() {
       $("#riska7-answer").addClass("correct")
	       		.removeClass("incorrect")
       .html("Right.  Insurance is a worse gamble than roulette, in terms of expected value and actuarial fairness.  However, it can still make sense to buy insurance.  See the other answer for why.");
    });


    $('[name=riska7][value=wrong]').click(function() {
       $("#riska7-answer").addClass("correct")
	       		.removeClass("incorrect")
       .html("It can be smart to buy health insurance, even though the insurance company takes a bigger percentage than the casino does.  <br>It's about risk and risk aversion.  Insurance reduces your risk.  It may be worth your while to pay them for that.  <br>When you play roulette, you are increasing your risk, and you are paying the casino to increase your risk!");
    });



    $("#risk1-button").click(function(){
        var numerator  = parseInt($("#risk1N-response").val(),10);
		var denominator = parseInt($("#risk1D-response").val(),10);
			if (numerator === 1)
				$("#risk1N-answer").addClass("correct")
	       		.removeClass("incorrect")
    	        .html("Correct numerator!");
    	        else
    	        $("#risk1N-answer").addClass("incorrect")
	       		.removeClass("correct")
    	        .html("The number of Queen of Spades cards goes in the first box.  There is only one of those in the deck.");
    	    if (denominator === 52)
				$("#risk1D-answer").addClass("correct")
	       		.removeClass("incorrect")
    	        .html("Correct denominator!");
    	        else
    	        $("#risk1D-answer").addClass("incorrect")
	       		.removeClass("correct")
    	        .html("The number of cards in the deck goes in the second box.");
    	    if ((denominator === 52) && (numerator === 1))
				$("#risk1D-answer").addClass("correct")
	       		.removeClass("incorrect")
    	        .html("Correct denominator!  The probability of guessing the card is 1/52, which is a little less than 0.02."); 
    });
 
 
	$('[name=risk2][value=unlucky]').click(function() {
       $("#risk2-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("You would be right if you bet each of your dollars just once and then quit.");
    });

    $('[name=risk2][value=repeat]').click(function() {
       $("#risk2-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  As you bet your dollars over and over again, you will probably find yourself betting way more than ten times.  When you have bet 190 times, your expected loss is 190 times 2/38, which is $10.  Keep betting long enough, and you will lose everything.");
    });
 
   

    $("#spin1000000").click(function(){
        var win = 0;
        var loss = 0;
        var outcome = 0;
        $("#num").text("Working ...");

        for (var i=0;i<1000000;i++) 
        {
    	outcome = Math.floor(Math.random()*38);
        if (outcome === 37) { 
            outcome = 38;
         }
        if (outcome % 2 === 1) {
            win++;
        } else {
            loss++;
        }
        }
        if (outcome === 38) { 
            $("#num").text("00");
        } else {
            $("#num").text(outcome);
        }
        
        $("#win").text(win);
        $("#loss").text(loss);
        $("#net").text(win-loss);
        $("#bets").text(win+loss);
        $("#ratio").text((win-loss)/(win+loss));
   });

    
    

    $("#spin1000").click(function(){
        var win = 0;
        var loss = 0;
        var outcome = 0;
        $("#num").text("Working ...");

        for (var i=0;i<1000;i++) 
        {
    	outcome = Math.floor(Math.random()*38);
        if (outcome === 37) { 
            outcome = 38;
         }
        if (outcome % 2 === 1) {
            win++;
        } else {
            loss++;
        }
        }
        if (outcome === 38) { 
            $("#num").text("00");
        } else {
            $("#num").text(outcome);
        }
        
        $("#win").text(win);
        $("#loss").text(loss);
        $("#net").text(win-loss);
        $("#bets").text(win+loss);
        $("#ratio").text((win-loss)/(win+loss));
   });

    

    $("#spin10").click(function(){
        var win = 0;
        var loss = 0;
        var outcome = 0;
        for (var i=0;i<10;i++) 
        {
    	outcome = Math.floor(Math.random()*38);
        if (outcome === 37) { 
            outcome = 0;
            $("#num").text("00");
        } else {
            $("#num").text(outcome);
        }
        $("#num").text(outcome);
        if (outcome % 2 === 1) {
            win++;
        } else {
            loss++;
        }
        }
        $("#win").text(win);
        $("#loss").text(loss);
        $("#net").text(win-loss);
        $("#bets").text(win+loss);
        $("#ratio").text((win-loss)/(win+loss));
   });


$("#spin1").click(function(){
    	var outcome = Math.floor(Math.random()*38);   
        var win = 0;
        var loss = 0;
        if (outcome === 37) { 
            outcome = 0;
            $("#num").text("00");
        } else {
            $("#num").text(outcome);
        }
        if (outcome % 2 === 1) {
            win++;
        } else {
            loss++;
        }
        $("#win").text(win);
        $("#loss").text(loss);
        $("#net").text(win-loss);
        $("#bets").text(win+loss);
        $("#ratio").text((win-loss)/(win+loss));       
   });
	$("#risk2-button").click(function(){
        var responseY = parseFloat($("#risk2Y-response").val(),10);
        if( responseY === 0.9) {
			$("#risk2Y-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  Upper box should be 0.9.");
        } else {
			$("#risk2Y-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("The probability that the bond will pay goes in the upper box.  Use a decimal, not a percentage.");
        }

        var responseN = parseFloat($("#risk2N-response").val(),10);
        if( responseN === 0.1) {
			$("#risk2N-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  0.1 goes in the lower box.");
            
        } else {
			$("#risk2N-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("The probability that the bond will default goes in the lower box.  Use a decimal, not a percentage.");
        }
        
    if( (responseN === 0.1) && (responseY === 0.9) ){
        $("#product-answer").html("Payoff<br>x<br>Probability");
        $("#productN").html("$0.00");
        $("#productY").html("$8823.53");
        $("#risk2A-answer").html("The expected present value of this bill is $8823.53.<br>($8823.53+$0.00=$8823.53)<br>That is also the price for which the bill should sell.  ");
    }    


    });  
 
 	$('[name=risk3][value=not_rigged]').click(function() {
       $("#risk3-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("A game can be unfair even if it is not rigged.  Of course, if a game is rigged, so that the probabilities are not what you think they are, then the game is almost surely unfair.");
    });


    $('[name=risk3][value=repeat]').click(function() {
       $("#risk3-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!");
    });
 
	$('[name=risk4][value=yes]').click(function() {
       $("#risk4-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Insurance cannot be fair, the way we are using that word, because the insurance company would not make any money if insurance were a fair bet.  Obamacare is making insurance a better deal for the consumer than it was before, but people who buy insurance will be losing, on average, $0.15 for each $1.00 they spend on premiums.");
    });


    $('[name=risk4][value=no]').click(function() {
       $("#risk4-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct! Insurance cannot be fair, the way we are using that word, because no insurance company could stay in business if insurance were a fair bet.  Obamacare is making insurance a better deal for the consumer than it was before, but people who buy insurance will be losing, on average, $0.15 for each $1.00 they spend on premiums.");
    });
 
	$('[name=risk5][value!=down]').click(function() {
       $("#risk5-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("If the probability of default goes up, and therefore the probability of getting paid goes down, then the expected present value of the security will be less.  No one will buy the security for less than what he or she thinks the expected present value is.");
    });


    $('[name=risk5][value=down]').click(function() {
       $("#risk5-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct! No one will buy the security for less than what he or she thinks the expected present value is.");
    });
 
	$('[name=risk6][value=dont]').click(function() {
       $("#risk6-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("AIG (American International Group) took that attitude in the mid-2000s.  They agreed to pay Goldman Sachs if that bank holdings in mortgage-backed securities became worthless.  AIG charged premiums based on past default rates and some seemingly harmless assumptions about independence.  Then housing collapsed, many homeowners defaulted on their mortgages, and AIG owed more money than it had.  It looked bad for AIG and for Goldman Sachs, which was counting on getting the money.  The U.S. government bailed out AIG. That indirectly bailed out Goldman Sachs.  AIG officials paid themselves bonuses.  Maybe they judged it right after all!");
    });


    $('[name=risk6][value=do]').click(function() {
       $("#risk6-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct! We seem to learn this lesson over and over again, the hard way.  (Try the other answer for a story.)");
    });
 

 


});
