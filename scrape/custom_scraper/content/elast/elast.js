$(document).ready( function() {
	$("[type=radio]").prop('checked', false);

    $('[name=q1][value=inelastic]').click(function() {
       $("#q1-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .html("Correct!  The demand will be inelastic with respect to price.  This patient will be presumed to want care regardless of what he will be charged.<br>As for what the hospital does, that is a supply side question.");
    });
    $('[name=q1][value=elastic]').click(function() {
       $("#q1-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .html("This patient will be presumed to want care regardless of what he will be charged.  Demand is inelastic, therefore.<br>As for what the hospital does, that is a supply side question.");
    });

    $('[name=q2][value=elastic]').click(function() {
       $("#q2-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  The demand will be elastic.  If the price is high, the patient may forgo buying the drug.");
    });
    $('[name=q2][value=inelastic]').click(function() {
       $("#q2-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Not inelastic, because the patient may or may not buy the prescribed drug, depending on the price.");
    });

    $('[name=q3][value=elastic]').click(function() {
       $("#q3-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  The demand will be elastic.  If the price for an office visit is high, the parents may hesitate to go to the doctor, and hope that the earache goes away by itself.");
    });
    $('[name=q3][value=inelastic]').click(function() {
       $("#q3-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Not inelastic, because the family may or may not go see the doctor, depending on the price charged.");
    });

    $('[name=q5][value=inelastic]').click(function() {
       $("#q5-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  Inelastic demand means that price differences do not affect what buyers buy.");
    });
    $('[name=q5][value=elastic]').click(function() {
       $("#q5-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("No, it is not elastic.  Elastic demand means that buyers change what they buy, or how much they buy, when prices are different or change. ");
    });

    $('[name=q4][value=elastic]').click(function() {
       $("#q4-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  If how much buyers buy responds to price differences, demand is elastic.");
    });
    $('[name=q4][value=inelastic]').click(function() {
       $("#q4-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("No, it is not inelastic.  Inelastic demand means that price differences do not affect buyer behavior.");
    });

    $('[name=q6][value=yes]').click(function() {
       $("#q6-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  The graph and table say that the same amount is sold at high prices and at low prices.  There is no response of quantity to price.");
    });
    $('[name=q6][value=no]').click(function() {
       $("#q6-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("No, this does not show elastic.  Elastic demand would mean that buyers would buy less at higher prices.  Here, they buy the same at all prices.");
    });


    $('[name=q7][value=raise]').click(function() {
       $("#q7-answers")
       .addClass("correct")
       .removeClass("incorrect")
       .text("Correct!  If profit is your only goal (some years ago, the economist Milton Friedman wrote that profit should be a business's only goal), then raising your price brings in more money.  Your costs do not go up, because you are producing the same amount,so your profit goes up. ");
    });
    $('[name=q7][value=same]').click(function() {
       $("#q7-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Keeping your price the same is not the way to the most profit, if the above graph really shows your demand.");
    });
    $('[name=q7][value=lower]').click(function() {
       $("#q7-answers")
       .addClass("incorrect")
       .removeClass("correct")
       .text("Lowering your price gives you less profit.  You can't make it up on volume.  The graph says that you sell no more at $1 than at $2.");
    });


});
