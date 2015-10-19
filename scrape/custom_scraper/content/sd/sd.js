$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $('[name=sd1][value=supply]').click(function() {
       $("#sd1-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The 'providers' are sellers in this market.");
    });
    $('[name=sd1][value=demand]').click(function() {
       $("#sd1-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, doctors are on the Supply side.  Patients are on the Demand side.  True, doctors do influence their demand, because patients rely on them for guidance about what medical services to buy.  At the first level of analysis, though, doctors are on the supply sides of medical services markets.");
    });

    $('[name=sd2][value=demand]').click(function() {
       $("#sd2-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Patients, or potential patients, are buyers in this market.");
    });
    $('[name=sd2][value=supply]').click(function() {
       $("#sd2-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No. Patients, or potential patients, are buyers.  Buyers are on the demand side of a market.");
    });


    $('[name=sd3][value=demand]').click(function() {
       $("#sd3-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Health insurance companies help or hinder patients who want to buy health care.");
    });
    $('[name=sd3][value=supply]').click(function() {
       $("#sd3-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No. It does not sell these medical services.");
    });

    $('[name=sd4][value=supply]').click(function() {
       $("#sd4-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Its emergency department sells primary care services, even though they prefer that people get their primary care elsewhere.");
    });
    $('[name=sd4][value=demand]').click(function() {
       $("#sd4-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, emergency departments are on the Supply side.  Patients are on the Demand side.  ");
    });


    $('[name=sd5][value=neither]').click(function() {
       $("#sd5-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  It does not sell primary care services.  It is a supplier in a different market. ");
    });
    $('[name=sd5][value!=neither]').click(function() {
       $("#sd5-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  It is not in the primary care market.  ");
    });

    $("#sd6-button").click(function(){
        var response = parseInt($("#sd6-response").val(),10);
        if( response === 1000) {
			$("#sd6-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct!  This is from the bottom line of the table.");
        } else {
            $("#sd6-answer").addClass("incorrect")
       		.removeClass("correct").text("Find the line in the table for a price of $10 per visit.");
        }
    });


    $('[name=sd7][value=no]').click(function() {
       $("#sd7-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Demand quantity exceeds supply quantity at this price.");
	   $("#sd7A-answer").text("");
    });
    $('[name=sd7][value=yes]').click(function() {
       $("#sd7-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  Equilibrium requires that supply and demand be in balance.");
    });

    $('[name=sd8][value=35]').click(function() {
       $("#sd8-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  At $35, the demand quantity and the supply quantity are both 500.");
    });
    $('[name=sd8][value!=35]').click(function() {
       $("#sd8-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not this row.  Equilibrium requires the supplied and the demanded quantities be equal.");
    });
	

    $('[name=sd9][value=25]').click(function() {
       $("#sd9-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  At $25, demand quantity exceeds supply quantity by 400.");
    });
    $('[name=sd9][value!=25]').click(function() {
       $("#sd9-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not this row.  Find the row that has a quantity demanded 400 greater than the quantity supplied.");
    });
    $('[name=sd9][value=45]').click(function() {
       $("#sd9-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("At $45, there is an excess <strong>supply</strong> of 400.");
    });
	

    $('[name=sd10][value=40]').click(function() {
       $("#sd10-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  At $40, supply quantity exceeds demand quantity by 200.");
    });
    $('[name=sd10][value!=40]').click(function() {
       $("#sd10-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not this row.  Find the row that has a quantity demanded 200 less than the quantity supplied.");
    });
    $('[name=sd10][value=30]').click(function() {
       $("#sd10-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("At $30, there is an excess <strong>demand</strong> of 200.");
    });


    $('[name=sd11][value=down]').click(function() {
       $("#sd11-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  If there is excess supply, the price should tend to go down.<br><br>Let's look in to why.");
	   $("#sd11A-answer").text("");
    });
    $('[name=sd11][value!=down]').click(function() {
       $("#sd11-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("If there is excess supply, there is a surplus on the market.  Unless something peculiar is going on, that should not make the price up.  ('Something peculiar' would be if people think a product is more valuable if it is expensive.  Perfumes may work that way.)");
    });
	

    $('[name=sd12][value=true]').click(function() {
       $("#sd12-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  If there is excess supply, and if there is competition among the sellers for scarce customers, the price should tend to go down.");
    });
    $('[name=sd12][value=false]').click(function() {
       $("#sd12-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("I like this reason.  Check the other answer for why.");
    });

    $('[name=sd13][value=true]').click(function() {
       $("#sd13-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Again, it is the combination of excess supply and competition among the sellers.");
    });
    $('[name=sd13][value=false]').click(function() {
       $("#sd13-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("I would say Yes here.  Check the other answer for why.");
    });
	
    $('[name=sd14][value=false]').click(function() {
       $("#sd14-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  I suppose that the government could do that, but now we're not talking about a free market.");
    });
    $('[name=sd14][value=true]').click(function() {
       $("#sd14-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("I would say No here.  Check the other answer for why.");
    });

	
    $('[name=sd14a][value=ok]').click(function() {
       $("#sd14a-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Even when the supply curve appears to be moving down in the picture, the equilibrium quantity is moving to the right, indicating a higher quantity.  Imagine a horizontal line running through the middle of the graph.  You can hold a piece of paper up to the screen, so that the top edge of the paper goes horizontally through the middle of the graph.  You will see that the place where the supply curve touches the paper moves to the right when the words Supply Rising are moving down.  That means that you are getting more quantity supplied at a given price.");
    });

    $('[name=sd14a][value=mess]').click(function() {
       $("#sd14a-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("The diagram could have been better designed, but it is properly labelled.  See the other answer for why.");
    });	
	
    $('[name=sd14b][value=up]').click(function() {
       $("#sd14b-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  As the supply curve moves to the right, the point where it crosses the demand curve also moves to the right.  That indicates a higher quantity.  As the supply curve moves to the left, the point where it crosses the demand curve also moves to the left.  That indicates a lower quantity.");
    });

    $('[name=sd14b][value=down]').click(function() {
       $("#sd14b-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  As the supply curve moves to the right, the point where it crosses the demand curve also moves to the right.");
    });
	
	
    $('[name=sd14c][value=up]').click(function() {
       $("#sd14c-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  For price, up is up and down is down.  As the supply curve moves to the right, the point where it crosses the demand curve moves down.  That indicates a lower price.  As the supply curve moves to the left, the point where it crosses the demand curve moves up, towards the top of the page.  That indicates a higher price.");
    });

    $('[name=sd14c][value=down]').click(function() {
       $("#sd14c-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  As the supply curve moves to the right, the point where it crosses the demand curve also moves to the right.");
    });

	
    $('[name=sd15a][value=demand]').click(function() {
       $("#sd15a-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Insurance works on the demand side.  More insurance would mean that veterans could buy more care at the same prices, because the insurance would help pay the prices.  Supply-demand theory says that this would tend to further drive up the prices of health care services to the general public.");
    });
    $('[name=sd15a][value=supply]').click(function() {
       $("#sd15a-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, insurance works on the demand side.");
    });

	
    $('[name=sd17a][value=supply]').click(function() {
       $("#sd17a-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  <p>This is what President Clinton chose to do, twenty years ago.  The result is that war veterans get the best health care in the U.S., according to standard quality measures.  Meanwhile, expanding supply this way kept the price pressure off of the general public's system.  </p><p>At this writing, there is a big backlog of veterans' applications to get into the system, but that is not the fault of the hospitals and the medical personnel. </p>");
    });
    $('[name=sd17a][value=demand]').click(function() {
       $("#sd17a-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  Expanding service capacity works on the supply side.");
    });
	
	
    $('[name=sd15][value=demand]').click(function() {
       $("#sd15-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Changing the buyers' thinking changes the demand.");
    });
    $('[name=sd15][value=supply]').click(function() {
       $("#sd15-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, not unless the advertisements affect the providers' attitudes.");
    });

    $('[name=sd16][value=demand]').click(function() {
       $("#sd16-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  This works on the buyer, the woman.");
    });
    $('[name=sd16][value=supply]').click(function() {
       $("#sd16-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No, not unless the doctors want their patients to eat more fries.  They have to want that enough to lower their fees.");
    });

    $('[name=sd17][value=supply]').click(function() {
       $("#sd17-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  Free vaccine lowers the cost of operating for the sellers of inoculations.  The supply curve should move up, which is to the right in the standard diagram.");
    });
    $('[name=sd17][value=demand]').click(function() {
       $("#sd17-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  The free vaccine goes to the doctor, who is selling inoculations to patients.");
    });

    $('[name=sd19][value=demand]').click(function() {
       $("#sd19-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  A scary message may make smokers want to smoke less, even if the price of cigarettes does not change.");
    });
    $('[name=sd19][value=supply]').click(function() {
       $("#sd19-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  The message is there to influence buyers, not sellers.  The tobacco companies kept on making cigarettes even after they had to put the messages on the boxes.");
    });

    $('[name=sd20][value=supply]').click(function() {
       $("#sd20-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The tax adds to the cost of offering the cigarettes for sale.  The store includes the tax in the price that it quotes to the buyers.  That's why I say that the tax is on the supply side.");
    });

    $('[name=sd20][value=demand]').click(function() {
       $("#sd20-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("People will demand fewer cigarettes, but that will be because the price is higher.  That is a movement along the demand curve.  It is not a movement of the demand curve.  The 'demand curve' and the 'quantity demanded' are two different concepts.");
    });
	
    $('[name=sd21][value=demand]').click(function() {
       $("#sd21-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  These restrictions reduce demand.  They move the demand curve to the left.  When smoking is less convenient, and when smokers see fewer other smokers, they will buy fewer packs of cigarettes.");
    });

    $('[name=sd21][value=supply]').click(function() {
       $("#sd21-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("These restrictions do not <em>directly</em> affect the makers of cigarettes.  They do not move the supply curve.");
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
    $('[name=sd1][value=false]').click(function() {
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
       		.removeClass("correct").text("At an output rate of "+response+", the total cost is greater than the total revenue.  You are not breaking even.");
        }
       if( response > 4) {
			$("#AC5-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At an output rate of "+response+", your total cost is less than your total revenue.  However, there is a lower output rate for which that is also true.");
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
            .text("At an output rate of "+response+", your total cost is less than your total revenue.  You are not breaking even.");
        } 
        if( response < 4) {
			$("#AC6-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At an output rate of "+response+", your total cost is more than your total revenue.  You are not breaking even.");
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
            .text("At an output rate of "+response+", you are more than breaking even.  However, there is a lower output rate that also more than breaks even.");
        }
        if( response < 2) {
			$("#AC7-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("At an output rate of "+response+", your total cost is more than your total revenue.  You are not breaking even.");
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