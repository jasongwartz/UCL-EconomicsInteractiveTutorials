$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $('[name=dis1][value=year]').click(function() {
       $("#dis1-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not correct.  If you wait until next year to get your $200, you'll lose one year's worth of interest that you could have earned in a bank.");
    });

    $('[name=dis1][value=today]').click(function() {
       $("#dis1-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  $200 today is worth more than $200 a year from now.  If you get $200 now, you can put it in a bank account.  In a year, you'll have your $200, plus the interest it will earn. <p>In 2013, interest rates are low.  The bank may only add $1, but that's better than $0.");
       $("#dis1A-answer")
       .html("");
    });
    $('[name=dis1][value=same]').click(function() {
       $("#dis1-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Even with no inflation and no risk of non-payment, getting the money sooner is better, because you can put money you get now in a bank and earn interest.");
    });


    $("#dis2-button").click(function(){
        var response = parseFloat($("#dis2-response").val(),10);
        if( response === 210.0) {
			$("#dis2-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  We'll have $210.<p>That's the $200 we started with, plus 5% of $200, which is $10.");
            $("#dis2A-answer")
            .html("");            
        } else {
			$("#dis2-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("No.  We will have $200 plus one year's simple interest.  5% of 200 is 10.");
        }
        if( response === 10.0) {
			$("#dis2-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("$10 is the interest that will be added to the $200.  I am asking for the total.");
        }
    });
 
    $('[name=dis3][value=22050]').click(function() {
       $("#dis3-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  After one year you have $210.  After the second year, you get 5% of $210, which is $10.50, in interest.  Your final total is $210 + $10.50 = $220.50.");
        $("#dis3A-answer")
            .html(""); 
    });
    
    $('[name=dis3][value=220]').click(function() {
       $("#dis3-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Not quite.  Your original $200 will earn another $10 interest, but you'll also get interest on the first year's $10 interest. Getting interest on interest is called 'compounding.'");
    });
    
	$("#dis4-button").click(function(){
        var response = parseFloat($("#dis4-response").val(),10);
        if( response === 3.0) {
			$("#dis4-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#dis4A-answer").html("<table BORDER=0 CELLSPACING=2 CELLPADDING=0 WIDTH='73%' ><tr><td ALIGN=CENTER VALIGN=TOP WIDTH='53%'>$200 &times;(1.05)&sup3;&nbsp;</font></td><td VALIGN=TOP WIDTH='46%'>= $231.52</td></tr><tr><td ALIGN=CENTER VALIGN=TOP>Present Value &times;( 1+Interest Rate )&sup3;&nbsp;</td><td VALIGN=TOP>= Future Value in Three Years</td></tr></table>To calculate how much we will have in three years, we multiply by 1.05 three times, once for the first year, once for the second year, and once for the third year.");            

        } else {
			$("#dis4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("No.  For the total after one year, we multiplied $200 by 1.05 once.  For two years, we multiplied by 1.05 twice.  For three years, ...");
        }
    });    


    $('[name=dis5][value=19048]').click(function() {
       $("#dis5-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!");
       $("#dis5A-answer").html("<p>You want the amount that will grow to $200 in one year.  <br>You want X such that <br>X \u00d7 (1.05) = $200.  <br>Divide both sides of this by 1.05 to get: <br>X = $200/1.05 <br>which calculates to<br>X = $190.48.");
    });
    $('[name=dis5][value=190]').click(function() {
       $("#dis5-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("$190 is not quite enough.  Subtracting 5% of $200 does not give the right answer.  If you did start with $190, your interest would be 5% of $190, which is $9.50.  You'd have $199.50 next year, not $200.");
    });
    $('[name=dis5][value=200]').click(function() {
       $("#dis5-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("You don't need $200 now. You only need the amount that will grow to $200 if you leave it in the bank and earn interest for a year.");
    });

    $('[name=dis6][value=18141]').click(function() {
       $("#dis6-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!");
       $("#dis6A-answer")
       .html("<p>We want to know the amount of money that will grow to $200 in two years at 5% interest. <br>This is the amount X such that<br>X&times;1.05&sup2; = $200.<p>Divide both sides of that by (1.05)&sup2; to solve for X:<br>X = $200/1.05&sup2; = $181.41");
    });

    $('[name=dis6][value!=18141]').click(function() {
       $("#dis6-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  There is only one method that discounts future amounts correctly.");
    });
    $('[name=dis6][value=200]').click(function() {
       $("#dis6-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("You don't need $200 now. You only need the amount that will grow to $200 if you leave it in the bank and earn interest for two years.");
    });
    
    
	$("#dis7-button").click(function(){
        var response = parseFloat($("#dis7-response").val(),10);
        if( response === 3.0) {
			$("#dis7-answer").addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!");
            $("#dis7A-answer").html("");
            
        } else {
			$("#dis7-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("No.  For the present value of an amount one year in the future, we divided $200 by 1.05 once.  For $200 two years in the future, we divided by 1.05 twice.  For three years in the future, ...");
        }
    });    


    $('[name=dis8][value=5]').click(function() {
       $("#dis8-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("<p>Correct!  The most you should be willing to pay is the amount that, if you put it in the bank for 5 years at 5% interest, would grow to $200.");
	   $("#dis8A-answer").html("<p>If the bond's price is lower than $156.71, you will buy the bond. If the bond's price is higher than $156.71, you will put your money in the bank instead.");
    });
    $('[name=dis8][value!=5]').click(function() {
       $("#dis8-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  The bond matures in 5 years.");
    });


    $('[name=dis9][value=3]').click(function() {
       $("#dis9-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("<p>Correct!  With three years to go, the bond should be worth $172.77.  The closer it gets to maturity, the more it is worth.  When it finally gets to maturity, it will be worth the full $200.");
	   $("#dis9A-answer").html("");
    });
    $('[name=dis9][value!=3]').click(function() {
       $("#dis9-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No.  The bond matures in 3 years.");
    });

    $('[name=dis10][value=0]').click(function() {
       $("#dis10percent")
       .html("0%");
       $("#dis10rate")
       .html(".00");
       $("#dis10value1")
       .html("$1000");
       $("#dis10value2")
       .html("$1000");
	   $("#dis10-answer").html("If the discount rate is zero, the bond sells for its value at maturity.");
    });

    $('[name=dis10][value=3]').click(function() {
       $("#dis10percent")
       .html("2.75%");
       $("#dis10rate")
       .html(".0275");
       $("#dis10value1")
       .html("$762.40");
       $("#dis10value2")
       .html("$762.40");
	   $("#dis10-answer").html("This is close to the interest rate on Treasury bonds at this writing (August 2013).");
    });

    $('[name=dis10][value=5]').click(function() {
       $("#dis10percent")
       .html("5%");
       $("#dis10rate")
       .html(".05");
       $("#dis10value1")
       .html("$613.91");
       $("#dis10value2")
       .html("$613.91");
	   $("#dis10-answer").html("The bond's price goes down when the discount rate goes up, and vise-versa.");
    });

    $('[name=dis10][value=15]').click(function() {
       $("#dis10percent")
       .html("15.8%");
       $("#dis10rate")
       .html(".158");
       $("#dis10value1")
       .html("$230.63");
       $("#dis10value2")
       .html("$230.63");
	   $("#dis10-answer").html("The is the highest rate that the U.S. Treasury ever had to pay. It was in September 1981.  The Federal Reserve sold so many government bonds that it forced the price down to this level.  (The Federal Reserve holds a lot of Treasury bonds.  It sells them when it wants to raise interest rates.  It buys them when it wants to lower interest rates.)  Bond prices crashed.");
    });

    $('[name=dis11][value=yes]').click(function() {
       $("#dis11-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Correct, probably, but what if you'll starve before you get the hen and it starts laying?");
    });

    $('[name=dis11][value=no]').click(function() {
       $("#dis11-answer")
       .addClass("incorrect")
       .removeClass("correct")
       .html("Correct, if you would starve before you got the hen.");
    });

    $('[name=dis11][value=depends]').click(function() {
       $("#dis11-answer")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  It depends on your rate of time preference, which is about how soon you really need to eat!");
    });

    $('[name=dis11][value=numbers]').click(function() {
       $("#dis11-answer")
       .removeClass("correct")
       .removeClass("incorrect")
       .addClass("hehe")
       .html("Your lucky numbers are 2 44 26 3 8 37.<br> If these win the state lottery, you can buy the hen and the egg!");
    });


});