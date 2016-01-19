$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $('[name=irr1][value=yes]').click(function() {
       $("#irr1-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not correct.  You can't just add up the amounts, because a certain amount in the future is worth less than that same amount today.");
    });

    $('[name=irr1][value=maybe]').click(function() {
       $("#irr1-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  You need to take into account that income in the distant future is worth less than the same income in the near future.");
    });
 

    $("#irr2-button").click(function(){
        var response = parseFloat($("#irr2-response").val(),10);
        if (response > 1) response = response/100;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;

        var pv1 = 200/(1+response);
        var pv2 = pv1/(1+response);
    	var pv3 = pv2/(1+response);
    	var pv4 = pv3/(1+response);
    	var pv5 = pv4/(1+response);
    	var pv6 = pv5/(1+response);
    	$("#irr2-drate").html(Math.round(response*100*1000)/1000);
    	$("#irr2-pv1").html(Math.round(pv1*100)/100);
    	$("#irr2-pv2").html(Math.round(pv2*100)/100);
    	$("#irr2-pv3").html(Math.round(pv3*100)/100);
    	$("#irr2-pv4").html(Math.round(pv4*100)/100);
    	$("#irr2-pv5").html(Math.round(pv5*100)/100);
    	$("#irr2-pv6").html(Math.round(pv6*100)/100);
    	var total = -1000 + pv1 + pv2 + pv3 + pv4 + pv5 + pv6;
    	$("#irr2-total").html(Math.round(total*100)/100);
       	
        if( (total < 0.1) && (total > -0.1) ) {
			$("#irr2-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Within 10 cents is close enough!  To get closer, you'd have to go to the next decimal place.");
            $("#irr2A-answer")
            .html("");            
        } 
    	
    });
 
    $('[name=irr3][value=help]').click(function() {
       $("#irr3-answer")
		.removeClass("correct")
		.removeClass("incorrect")
       .html("A bond is an I.O.U. with a fixed repayment schedule.  Buying a bond is like lending someone money.  Selling a bond is like borrowing money from the person you sell it to.  The seller promises to pay off the bond -- which means paying off the loan -- on a certain day.  Sometimes, the seller also promises to pay interest along the way.  For instance, a $1000 5-year bond that pays 10% interest annually will pay the holder $1000 in 5 years. It will also pay the holder $100 (10% of $1000) each year for those 5 years.<br>The face value of the bond is its final value, how much the seller will pay when the bond matures, or comes due.  Bonds usually do not sell for their face values.  They may sell at a premium -- more than the face value -- or at a discount -- less than the face value.");
               
    });
    
    $('[name=irr3][value=irr]').click(function() {
       $("#irr3-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("You're right!  Let's do it!");
       $("#irr3A-answer")
            .html(""); 
    });
    
    $('[name=irr3][value=why]').click(function() {
       $("#irr3-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, it's not that easy, because the bond is not selling at its face value.");
    });

	$("#irr4-year0button").click(function(){
        var response = parseFloat($("#irr4-year0response").val(),10);
        if( response === -900) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#irr4A-answer").html("");
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You want what you'll pay for the bond, as a negative number.");
        }
    });    

	$("#irr4-year1button").click(function(){
        var response = parseFloat($("#irr4-year1response").val(),10);
        if( response === 10) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#irr4A-answer").html("");
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You want the interest that the bond pays in year 1.");
        }
    });    

	$("#irr4-year2button").click(function(){
        var response = parseFloat($("#irr4-year2response").val(),10);
        if( response === 10) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#irr4A-answer").html("");
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You want the interest that the bond pays in year 2.");
        }
    });    

	$("#irr4-year3button").click(function(){
        var response = parseFloat($("#irr4-year3response").val(),10);
        if( response === 10) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#irr4A-answer").html("");
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You want the interest that the bond pays in year 3.");
        }
    });    

	$("#irr4-year4button").click(function(){
        var response = parseFloat($("#irr4-year4response").val(),10);
        if( response === 10) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#irr4A-answer").html("");
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You want the interest that the bond pays in year 4.");
        }
    });    

	$("#irr4-year5button").click(function(){
        var response = parseFloat($("#irr4-year5response").val(),10);
        if( response === 1010) {
			$("#irr4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            
        } else {
			$("#irr4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("You get the interest and the principal in year 5.");
        }
    });    

	$("#irr4A-button").click(function(){
		$("#irr4A-answer").html("");
        });    

	$("#irr5-button").click(function(){
        var response = parseFloat($("#irr5-response").val(),10);
        
        if (response >= 1) response = response/100;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        
        $("#irr5-drate").html(Math.round(response*100*1000)/1000);
        
        var pv1 = 10/(1+response);
    	$("#irr5-pv1").html(Math.round(pv1*100)/100);

        var pv2 = pv1/(1+response);
    	$("#irr5-pv2").html(Math.round(pv2*100)/100);
    	
    	var pv3 = pv2/(1+response);
    	var pv4 = pv3/(1+response);
    	$("#irr5-pv3").html(Math.round(pv3*100)/100);
    	$("#irr5-pv4").html(Math.round(pv4*100)/100);
    	
    	var pv5 = 101*pv4/(1+response);
    	$("#irr5-pv5").html(Math.round(pv5*100)/100);

    	var total = -800 + pv1 + pv2 + pv3 + pv4 + pv5;
    	$("#irr5-total").html(Math.round(total*100)/100);

        if( (total < 0.50) && (total > -0.50) ) {
			$("#irr5-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Within 50 cents is close enough this time.  To get closer, you'd have to go to the next decimal place.");
            $("#irr5A-answer")
            .html("");            
        } 
    
        });

    $('[name=irr6][value=down]').click(function() {
       $("#irr6-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  As more sellers try to sell more product, some combination of two things will happen:<ol><li>Each seller will sell fewer products.<li>The price of the product will fall.</ol>This should mean less revenue, on average, for each machine.");
       $("#irr6A-answer")
       .html("<br>I assume that the demand for the machine's product is inelastic.  That way, a price drop reduces revenue for all the sellers together.  If demand were elastic, then the early adopters should have charged more than they actually were.  (I have tutorials about elasticity at sambaker.com/econ )<p>I also assume that the demand curve does not move outward.");
    });

    $('[name=irr6][value=same]').click(function() {
       $("#irr6-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("If more sellers flood the market, can the revenue that each seller makes stay the same?");
    });
    $('[name=irr6][value=up]').click(function() {
       $("#irr6-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("If more sellers flood the market, can the revenue that each seller makes go up?");
    }); 
    
    $('[name=irr7][value=5irr]').click(function() {
       $("#irr7-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Once the IRR for the machine matches the IRR for the bank, there is no incentive to take money out of the bank to buy a machine.  The supply of machine products will stop growing.");
	   $("#irr7A-answer").html("");
    });
    $('[name=irr7][value!=5irr]').click(function() {
       $("#irr7-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Too drastic.  New firms will stop entering the market well before it gets that bad.");
    });
    
    
	$("#irr9-button").click(function(){
        var response = parseFloat($("#irr9-response").val(),10);
        
        if (response >= 1) response = response/100;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        if (response > 0.1) response = response/10;
        
        $("#irr9-drate").html(Math.round(response*100*1000)/1000);

        var pv1 = 0;
		var pv2 = 200/((1+response)*(1+response));
        $("#irr9-pv2").html(Math.round(pv2*100)/100);

 	  	var pv3 = pv2/(1+response);
       	$("#irr9-pv3").html(Math.round(pv3*100)/100);

 	  	var pv4 = pv3/(1+response);
       	$("#irr9-pv4").html(Math.round(pv4*100)/100);

 	  	var pv5 = pv4/(1+response);
       	$("#irr9-pv5").html(Math.round(pv5*100)/100);

 	  	var pv6 = pv5/(1+response);
       	$("#irr9-pv6").html(Math.round(pv6*100)/100);

 	  	var pv7 = pv6/(1+response);
       	$("#irr9-pv7").html(Math.round(pv7*100)/100);
       	       	
    	var total = -1000 + pv1 + pv2 + pv3 + pv4 + pv5 + pv6 + pv7;
    	$("#irr9-total").html(Math.round(total*100)/100);

        if( (total < 0.10) && (total > -0.10) ) {
			$("#irr9-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Good!  Within 10 cents is good enough.");
            $("#irr9A-answer")
            .html("");            
        } 
       	       	  	    
        });


    $('[name=irr10][value=no]').click(function() {
       $("#irr10-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Yes, they could.  A price cut of $33 each on 10,000 machines is $330,000.  More than enough to make delaying the regulations a profitable strategy.");
    });

    $('[name=irr10][value=yes]').click(function() {
       $("#irr10-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  A price cut of $33 each on 10,000 machines is $330,000.  More than enough to cover the $100,000.");
    });



});