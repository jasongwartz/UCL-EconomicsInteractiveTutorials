$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

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
       .html("AIG (American International Group) took that attitude in the mid-2000s.  They agreed to pay Goldman Sachs if the mortgage-backed securities it held became worthless.  AIG charged premiums based on past default rates and some seemingly harmless assumptions about independence.  Then housing collapsed, many homeowners defaulted on their mortgages, and AIG owed more money than it had.  Bankruptcy loomed for AIG and for Goldman Sachs, which needed the money from AIG.  The U.S. government bailed out AIG. That indirectly bailed out Goldman Sachs.  AIG officials paid themselves bonuses.  Maybe they judged it right after all!");
    });


    $('[name=risk6][value=do]').click(function() {
       $("#risk6-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct! We seem to learn this lesson over and over again, the hard way.  (Try the other answer for a story.)");
    });
 

 


});
