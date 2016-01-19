$(document).ready(function() {
    $("[type=radio]").prop('checked', false);

    $("input[type=text]").val('');

    $("#D1-button").click(function() {
        var response = parseInt($("#D1-response").val(), 10);
        if ( response === 15) {
            $("#D1-answer").addClass("correct")
            .removeClass("incorrect")
            .text("Correct! If the price is $4, buyers will buy 15 gowns.");
        } else {
            $("#D1-answer").addClass("incorrect")
            .removeClass("correct").text("Too high.  To sell that many, the price would have to be less than $4.");
        }
        if ( response < 15) {
            $("#D1-answer").addClass("incorrect")
            .removeClass("correct")
            .text("Too low.  To sell that many, the price would have to be more than $4.");
        }
    });

    $('[name=D2][value=down]').click(function() {
        $("#D2-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  Higher prices make the quantity demanded lower.");
    });
    $('[name=D2][value=up]').click(function() {
        $("#D2-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, higher prices make the quantity demanded go down.");
    });

    $("#D3-button").click(function() {
        var response = parseInt($("#D3-response").val(), 10);
        if ( response === 2) {
            $("#D3-answer").addClass("correct")
            .removeClass("incorrect")
            .text("Correct! To sell $30 per day, set the price at $2.");
        } else {
            $("#D3-answer").addClass("incorrect")
            .removeClass("correct").text("Too high.  At that price, you will sell fewer than 30 gowns per day.");
        }
        if ( response < 2) {
            $("#D3-answer").addClass("incorrect")
            .removeClass("correct")
            .text("Too low.  At that price, you will sell more than 30 gowns per day.");
        }
    });

    $('[name=D4][value=b]').click(function() {
        $("#D4-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!");
    });
    $('[name=D4][value=a]').click(function() {
        $("#D4-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, A is the point for a price of $1.");
    });
    $('[name=D4][value=f]').click(function() {
        $("#D4-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, F is the point for a price of $6.");
    });

    $('[name=D4][value=c]').click(function() {
        $("#D4-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, C is the point for a price of $3.");
    });

    $('[name=D4][value=d]').click(function() {
        $("#D4-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, D is the point for a price of $4.");
    });

    $('[name=D4][value=e]').click(function() {
        $("#D4-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, E is the point for a price of $5.");
    });

    $('[name=D41][value=d]').click(function() {
        $("#D41-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .html("Correct!  You move from B to D, along the curve.");
    });

    $('[name=D41][value!=d]').click(function() {
        $("#D41-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, that is not the point where the price is $4.");
    });

    $('[name=D41][value=b]').click(function() {
        $("#D41-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  B is where we start.  Where do we finish?");
    });

    $('[name=D5][value=down]').click(function() {
        $("#D5-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  A nasty rumor makes demand shift down.  At any given price, you will sell fewer gowns.");
    });
    $('[name=D5][value=up]').click(function() {
        $("#D5-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No, a nasty rumor is not going to increase your sales at a given price.");
    });


    $('[name=D51][value=before]').click(function() {
        $("#D51-answer")
        .html("<pre><br>Price                            Demand is higher.<br> 6|         F<br> 5|           E<br> 4|              D<br> 3|                   C<br> 2|                             B<br> 1|                                                           A<br>   ....:....:....:....:....:....:....:....:....:....:....:....:<br>       5   10   15   20   25   30   35   40   45   50   55   60  Quantity<br>                 A       B       C       D       E       F<br>Price           $1      $2      $3      $4      $5      $6<br>Quantity        60      30      20      15      12      10</pre>");
    });
    $('[name=D51][value=after]').click(function() {
        $("#D51-answer")
        .html("<pre><br>Price                            Demand is lower.    <br> 6|    F<br> 5|     E<br> 4|       D<br> 3|         C<br> 2|              B<br> 1|                             A<br>   ....:....:....:....:....:....:....:....:....:....:....:....:<br>       5   10   15   20   25   30   35   40   45   50   55   60  Quantity<br>                 A       B       C       D       E       F<br>Price           $1      $2      $3      $4      $5      $6<br>Quantity        30      15      10       7       6       5</pre>");
    });

    $("#D6-button").click(function() {
        var response = parseInt($("#D6-response").val(), 10);
        if ( response === 15) {
            $("#D6-answer").addClass("correct")
            .removeClass("incorrect")
            .text("Correct! Now you can only sell 15 at a price of $2.");
        } else {
            $("#D6-answer").addClass("incorrect")
            .removeClass("correct").text("Too high.  To sell that many gowns, the price would have to be less than $2.");
        }
        if ( response < 15) {
            $("#D6-answer").addClass("incorrect")
            .removeClass("correct")
            .text("Too low.  That sales number is for a higher price than $2.");
        }
    });

    $("#D7-button").click(function() {
        var response = parseInt($("#D7-response").val(), 10);
        if ( response === 1) {
            $("#D7-answer").addClass("correct")
            .removeClass("incorrect")
            .text("Correct! To sell 30, you have to reduce your price to $1.");
        } else {
            $("#D7-answer").addClass("incorrect")
            .removeClass("correct").text("You don't sell 30 at that price.");
        }
    });

    $('[name=D8][value=shift]').click(function() {
        $("#D8-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  More gloves were bought, even at the same prices.");
    });
    $('[name=D8][value=along]').click(function() {
        $("#D8-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  More gloves were bought, even at the same prices.");
    });

    $('[name=D9][value=shift]').click(function() {
        $("#D9-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  More patients come in, even at the same prices.");
    });
    $('[name=D9][value=along]').click(function() {
        $("#D9-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  More patients come in, even at the same prices, means that the demand curve shifted out.");
    });

    $('[name=D10][value=along]').click(function() {
        $("#D10-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  Changing your prices moves you along your demand curve.");
    });
    $('[name=D10][value=shift]').click(function() {
        $("#D10-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  Price changes do not move the demand curve.  They move from one place to another on your existing demand curve.");
    });

    $('[name=D13][value=along]').click(function() {
        $("#D13-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  Changing your prices moves you along your demand curve.  Your demand is inelastic, so your demand curve is close to a vertical line.  You move up that line when you raise your price.");
    });
    $('[name=D13][value=shift]').click(function() {
        $("#D13-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  Price changes do not move the demand curve.  They move from one place to another on your existing demand curve.");
    });

    $('[name=D15][value=curve]').click(function() {
        $("#D15-answer")
        .addClass("correct")
        .removeClass("incorrect")
        .text("Correct!  Demand is the buyers' price-quantity relationship.");
    });
    $('[name=D15][value=bought]').click(function() {
        $("#D15-answer")
        .addClass("incorrect")
        .removeClass("correct")
        .html("No.  Demand is the price-quantity relationship of the buyers.");
    });







});


