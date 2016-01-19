$(document).ready(function(){
	$("[type=radio]").prop('checked', false);
	
	$("input[type=text]").val('');

    $("#C1-button").click(function(){
        var response = parseInt($("#C1-response").val(),10);
        if( response === 1000) {
			$("#C1-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The fixed cost is $1000.");
        } else {
            $("#C1-answer").addClass("incorrect")
       		.removeClass("correct").text("You want what it costs to see 0 patients.");
        }
    });

    $("#C2-button").click(function(){
        var response = parseInt($("#C2-response").val(),10);
        if( response === 3500) {
			$("#C2-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The variable cost for one patient is $3500.");
        } else {
            $("#C2-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of one patient minus the cost of zero patients.  Variable = Total - Fixed.");
        }
    });

    $("#C3-button").click(function(){
        var response = parseInt($("#C3-response").val(),10);
        if( response === 11000) {
			$("#C3-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The variable cost for four patients is $11000.");
        } else {
            $("#C3-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of four patients minus the cost of zero patients.  Variable = Total - Fixed.");
        }
        if( response === 2000) {
			$("#C3-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Don't confuse this with marginal cost.  Marginal cost is coming later.  Here you want the cost of four patients minus the cost of zero patients.");
        }
    });

    $("#C4-button").click(function(){
        var response = parseInt($("#C4-response").val(),10);
        if( response === 29000) {
			$("#C4-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The variable cost for nine patients is $29000.");
        } else {
            $("#C4-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of nine patients minus the cost of zero patients.  Variable = Total - Fixed.");
        }
        if( response === 5000) {
			$("#C4-answer").addClass("incorrect")
       		.removeClass("correct")
            .text("Don't confuse this with marginal cost.  Marginal cost is coming next.  Here you want the cost of nine patients minus the cost of zero patients.");
        }
    });

    $("#C5-button").click(function(){
        var response = parseInt($("#C5-response").val(),10);
        if( response === 3500) {
			$("#C5-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The marginal cost of the first patient is $3500.");
        } else {
            $("#C5-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of one patient minus the cost of zero patients.  Marginal = Total at this output rate minus Total at one less.");
        }
    });

    $("#C6-button").click(function(){
        var response = parseInt($("#C6-response").val(),10);
        if( response === 2000) {
			$("#C6-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The marginal cost of the 4th patient is $2000.");
        } else {
            $("#C6-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of four patients minus the cost of three patients.  Marginal = Total at this output rate minus Total at one less.");
        }
    });

    $("#C7-button").click(function(){
        var response = parseInt($("#C7-response").val(),10);
        if( response === 5000) {
			$("#C7-answer").addClass("correct")
       		.removeClass("incorrect")
            .text("Correct! The marginal cost for the 9th patient is $5000.");
$("#C7A-answer").html("<pre>Number of<br>Patients&nbsp;&nbsp;&nbsp; Total Cost&nbsp;&nbsp;&nbsp;&nbsp; Variable Cost&nbsp;&nbsp; Marginal Cost<br>&nbsp;&nbsp;&nbsp; 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 1000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp;&nbsp;&nbsp;&nbsp; 0<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 3500<br>&nbsp;&nbsp;&nbsp; 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 4500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 3500<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 3000<br>&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 7500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 6500<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 2500<br>&nbsp;&nbsp;&nbsp; 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 10000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 9000<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 2000<br>&nbsp;&nbsp;&nbsp; 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 12000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 11000<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 2500<br>&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 14500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 13500<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 3000<br>&nbsp;&nbsp;&nbsp; 6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 17500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 16500<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 3500<br>&nbsp;&nbsp;&nbsp; 7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 21000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 20000<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 4000<br>&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 25000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 24000<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $&nbsp; 5000<br>&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 30000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $ 29000</pre>");
        } else {
            $("#C7-answer").addClass("incorrect")
       		.removeClass("correct").text("The calculation is the cost of nine patients minus the cost of eight patients.  Marginal = Total at this output rate minus Total at one less.");
        }
    });

    $('[name=C8][value=either]').click(function() {
       $("#C8-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The two ways give the same answer.  The difference in total cost always equals the difference in variable cost.");
    });
    $('[name=C8][value!=either]').click(function() {
       $("#C8-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct, but what about the other way of calculating the marginal cost?");
    });





});