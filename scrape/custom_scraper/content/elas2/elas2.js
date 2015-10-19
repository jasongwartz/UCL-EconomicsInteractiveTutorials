$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $("#Elas201-button").click(function(){
        var response = parseInt($("#Elas201-response").val(),10);
        if( response === -40) {
			$("#Elas201-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The new quantity is 40 less than the old quantity.");
        } else {
            $("#Elas201-answer").addClass("incorrect")
       		.removeClass("correct").text("Incorrect.  You want to subtract the before quantity from the after quantity.");
        }
		if( response === 40) {
			$("#Elas201-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("On the right track!  You want to subtract the before quantity from the after quantity.  You subtracted the after quantity from the before quantity.");
        }
    });

	$('[name=q2][value=Not]').click(function() {
       $("#q2-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("You're right to be unsure!  You could use 100, 60, or something between. ");
    });
    $('[name=q2][value=100]').click(function() {
       $("#q2-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Correct, maybe.  Are you sure you shouldn't use 60?");
    });
    $('[name=q2][value=60]').click(function() {
       $("#q2-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Correct, maybe.  Are you sure you shouldn't use 100?");
    });


	$("#Elas203-button").click(function(){
        var response = parseInt($("#Elas203-response").val(),10);
        if( response === 80) {
			$("#Elas203-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct! 80 is (60 + 100) / 2.<br><br>Our Change in Q is -40 and our average of Q's is 80 ...");
        } else {
            $("#Elas203-answer").addClass("incorrect")
       		.removeClass("correct").text("You want to the number halfway between 60 and 100.");
        }
    });
    
	$("#Elas204-button").click(function(){
        var response = parseFloat($("#Elas204-response").val(),10);
        if( response === -0.5) {
			$("#Elas204-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct! (Change in Q) / (average of Q's) = -40 / 80 = -0.5.");
        } else {
            $("#Elas204-answer").addClass("incorrect")
       		.removeClass("correct").html("It should equal -40/80.<p>&nbsp;<p>&nbsp;<p>&nbsp;<p>&nbsp;<p>&nbsp;");
        }
        if( response === .5) {
			$("#Elas204-answer").addClass("incorrect")
       		.removeClass("correct")
            .html("Good arithmetic, but don't lose the minus sign!<p>&nbsp;<p>&nbsp;<p>&nbsp;<p>&nbsp;<p>&nbsp;");
        }
    });

	$("#Elas205-button").click(function(){
        var response = parseInt($("#Elas205-response").val(),10);
        if( response === 20) {
			$("#Elas205-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct! The change in P is 30 - 10 = 20.");
        } else {
            $("#Elas205-answer").addClass("incorrect")
       		.removeClass("correct").text("It should equal 30 - 10.");
        }
    });

	$("#Elas206-button").click(function(){
        var response = parseInt($("#Elas206-response").val(),10);
        if( response === 20) {
			$("#Elas206-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("The average of the P's is (10 + 30) / 2 = 20.  Correct!");
        } else {
            $("#Elas206-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is (10 + 30) / 2.");
        }
    });

	$("#Elas207-button").click(function(){
        var response = parseInt($("#Elas207-response").val(),10);
        if( response === 1) {
			$("#Elas207-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("(Change in P) / (average of P's) = 20/20 = 1.  Correct!<p><p>This means that our arc elasticity fraction is <br><pre>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-0.5<br>Arc Elasticity = ------------------------------------<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</pre>");
        } else {
            $("#Elas207-answer").addClass("incorrect")
       		.removeClass("correct").html("The calculation is (Change in P) / (average of P's) = 20/20 = ?");
        }
    });

	$("#Elas208-button").click(function(){
        var response = parseFloat($("#Elas208-response").val(),10);
        if( response === -0.5) {
			$("#Elas208-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  The arc elasticity is -0.5.");
        } else {
            $("#Elas208-answer").addClass("incorrect")
       		.removeClass("correct").html("The calculation is -0.5 / 1 .");
        }
        if( response === .5) {
			$("#Elas208-answer").addClass("incorrect")
       		.removeClass("correct")
            .html("Good arithmetic, but don't lose the minus sign!");
        }
    });

	$('[name=q9][value=inelastic]').click(function() {
       $("#q9-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  -0.5 is between 0 and -1, so we can call this demand inelastic.");
    });
    $('[name=q9][value=elastic]').click(function() {
       $("#q9-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("If our number were something like -2, we would call the demand elastic.");
    });

	$("#Elas210-button").click(function(){
        var response = parseInt($("#Elas210-response").val(),10);
        if( response === 1000) {
			$("#Elas210-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  $10 per test times 100 tests is $1000.");
        } else {
            $("#Elas210-answer").addClass("incorrect")
       		.removeClass("correct").html("It should be $10 times 100.");
        }
    });

	$("#Elas211-button").click(function(){
        var response = parseInt($("#Elas211-response").val(),10);
        if( response === 1800) {
			$("#Elas211-answer")
			.addClass("correct")
       		.removeClass("incorrect")
            .html("Correct!  $30 per test times 60 tests is $1800.");
        } else {
            $("#Elas211-answer").addClass("incorrect")
       		.removeClass("correct").html("It should be $30 times 60.");
        }
    });
	
	$('[name=q12][value=up]').click(function() {
       $("#q12-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  Revenue goes up, from $1000 to $1800.");
    });
    $('[name=q12][value=down]').click(function() {
       $("#q12-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("$1800 is bigger than $1000.");
    });
	
	$('[name=q13][value=yes]').click(function() {
       $("#q13-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  Our demand is inelastic and our higher price brings more revenue.");
    });
    $('[name=q13][value=no]').click(function() {
       $("#q13-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("It is consistent.  Our demand is inelastic and our higher price brings more revenue.");
    });
	
	$('[name=q14][value=raise]').click(function() {
       $("#q14-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  Charge 'what the market will bear' to bring in more money.");
    });
    $('[name=q14][value=lower]').click(function() {
       $("#q14-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("You are throwing money away!  You must be one of those &#9786;Liberals.");
    });
	
	$('[name=q15][value=emergency]').click(function() {
       $("#q15-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The demand for emergency services is price-inelastic.  Those are prices you can raise and bring in more revenue.<p>You will implement the price increase by assigning a lot of overhead cost to the emergency department.  That way, you don't show a big profit, which might raise eyebrows with the public.  If somebody gets emergency services who has no means to pay, you will show a big financial loss.  That loss will be exaggerated, to the extent that it includes the overhead costs that you tacked on.</p>");
    });
    $('[name=q15][value=education]').click(function() {
       $("#q15-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("The demand for education services is probably very elastic.  If you make classes or consultations expensive, no one will come.  This is not where you can make a lot of revenue by raising the price.");
    });

	
	$('[name=q16][value=0]').click(function() {
       $("#q16-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  No response to price changes makes the numerator of the elasticity fraction zero, which makes the whole fraction equal zero.");
    });
    $('[name=q16][value=-1]').click(function() {
       $("#q16-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("No response to price changes makes the numerator of the elasticity fraction zero.  A fraction can't be -1 if its numerator is 0.");
    });
    $('[name=q16][value=-infinity]').click(function() {
       $("#q16-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("An elasticity of minus infinity would be for a huge fall in quantity demanded when the price goes up by almost nothing.  That is highly responsive demand.");
    });

	
	$('[name=q17][value=lower]').click(function() {
       $("#q17-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  With elastic demand, your gain from selling more items is more than your loss from making less money on each item.");
    });
    $('[name=q17][value=raise]').click(function() {
       $("#q17-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("With elastic demand, raising the price drives customers away.  What you gain from a higher price per item does not compensate for your selling fewer items.");
    });
	
	
	$('[name=q18][value=-infinity]').click(function() {
       $("#q18-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The tiniest price increase wipes out all your sales.  At the limit, that makes the elasticity number minus infinity.  ");
    });
    $('[name=q18][value=-1]').click(function() {
       $("#q18-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("A tiny price reduction will give you a huge increase in sales quantity.  The elasticity fraction for such a price reduction is a big number divided by a small negative number.  The quotient is going to be way more negative than -1.");
    });
    $('[name=q18][value=0]').click(function() {
       $("#q18-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("An elasticity of 0 is for perfectly <strong>in</strong>elastic demand.");
    });


	

});