angular.module('app.services', [])

.factory('QuestionFactory', [function($scope){
	var questions = [
    {
        "answer": "10001", 
        "incorrect": "The average cost of one toy is the total cost divided by 1.  Add the fixed cost (10000) to the marginal cost of the first toy (1) to get the total cost.  Then divide by 1.", 
        "type": "SingleAnswer", 
        "id": "AC1", 
        "correct": "Correct!  The average cost of 1 is the total cost, 10001, divided by 1."
    },
    {
        "answer": "5001", 
        "incorrect": "The average cost of two toys is the total cost divided by 2.  Add the fixed cost (10000) to the marginal cost of the two toys (1 each) to get the total cost.  Then divide by 2.", 
        "type": "SingleAnswer", 
        "id": "Ac2", 
        "correct": "Correct!  The average cost of 2 is the total cost, 10002, divided by 2."
    }, 
    {
        "answer": "3333", 
        "incorrect": "Use the column in the table for an output of 3.  Use the average cost row of numbers.  If you do the calculation yourself, round off to the nearest whole number.", 
        "type": "SingleAnswer", 
        "id": "AC3", 
        "correct": "Correct!"
    }, 
    {
        "type": "MultipleChoice", 
        "id": "AC4", 
        "choices": {
            "yes": {
                "message": "Correct!  The $3700 price is more than the $3000 marginal cost.  You gain $700 by accepting the 2nd patient.  <p><p>So far, we have figured out that we want to contract with at least 2 patients.", 
                "solution": "y"
            }, 
            "no": {
                "message": "Compare what the 2nd patient pays you with the cost of adding that 2nd patient, which is the the marginal cost of the 2nd patient.", 
                "solution": "n"
            }
        }
    }, 
    {
        "highmessage": "At this output rate, your total cost is less than your total revenue.  However, there is a lower output rate for which that is also true.", 
        "lowmessage": "At this output rate, the total cost is greater than the total revenue.  You are not breaking even.", 
        "id": "AC5", 
        "answer": "4", 
        "type": "Range", 
        "correct": "Correct!"
    }, 
    {
        "highmessage": "At this output rate, your total cost is less than your total revenue.  You are not breaking even.", 
        "lowmessage": "At this output rate, your total cost is more than your total revenue.  You are not breaking even.", 
        "correct": "Correct!", 
        "answer": "8", 
        "type": "Range", 
        "id": "AC6"
    }, 
    {
        "highmessage": "At this output rate, you are more than breaking even.  However, there is a lower output rate that also more than breaks even.", 
        "lowmessage": "At this output rate, your total cost is more than your total revenue.  You are not breaking even.", 
        "id": "AC7", 
        "answer": "2", 
        "type": "Range", 
        "correct": "Correct!"
    }, 
    {
        "answer": "5", 
        "incorrect": "There is another output rate with a lower average cost.", 
        "type": "SingleAnswer", 
        "id": "AC8", 
        "correct": "Correct!  Joan's average cost bottoms out at 5 patients per year."
    }, 
    {
        "answer": "false", 
        "incorrect": "Not correct.  Joan's average cost is lowest at 5 patients, but serving the 6th, 7th, etc. patients add even more to profit.  The marginal costs of those patients are less than the $4200 price.", 
        "type": "SingleAnswer", 
        "id": "AC9", 
        "correct": "Correct!  Joan's average cost is lowest at 5 patients, but serving the 6th, 7th, etc. patients add even more to profit.  The marginal costs of those patients are less than the $4200 price.<p>The break-even point, the minimum average cost point, and the profit maximizing point are three different points!"
    }, 
    {
        "answer": "8", 
        "incorrect": "Use the marginal decision rule.  You want the highest output rate that has a marginal cost less than $4200.", 
        "type": "SingleAnswer", 
        "id": "AC10", 
        "correct": "Correct!  This is the highest output rate for which the marginal cost is less than $4200"
    }, 
    {
        "highmessage": "Your average cost is less than the price, but there is a lower output rate for which that is also true.", 
        "lowmessage": "Your costs exceed your revenues at this output rate.  You can tell because your average cost is more than $3200.", 
        "id": "AC11", 
        "answer": "4", 
        "type": "Range", 
        "correct": "Correct!  This is the lowest output rate for which the average cost is less than $3200.  You have to have at least 4 patients to break even."
    }, 
    {
        "answer": "1000", 
        "incorrect": "You want what it costs to see 0 patients.", 
        "type": "SingleAnswer", 
        "id": "C1", 
        "correct": "Correct! The fixed cost is $1000."
    }, 
    {
        "answer": "3500", 
        "incorrect": "The calculation is the cost of one patient minus the cost of zero patients.  Variable = Total - Fixed.", 
        "type": "SingleAnswer", 
        "id": "C2", 
        "correct": "Correct! The variable cost for one patient is $3500."
    }, 
    {
        "answer": "11000", 
        "incorrect": "The calculation is the cost of four patients minus the cost of zero patients.  Variable = Total - Fixed.", 
        "type": "SingleAnswer", 
        "id": "C3", 
        "correct": "Correct! The variable cost for four patients is $11000."
    }, 
    {
        "answer": "29000", 
        "incorrect": "The calculation is the cost of nine patients minus the cost of zero patients.  Variable = Total - Fixed.", 
        "type": "SingleAnswer", 
        "id": "C4", 
        "correct": "Correct! The variable cost for nine patients is $29000."
    }, 
    {
        "answer": "3500", 
        "incorrect": "The calculation is the cost of one patient minus the cost of zero patients.  Marginal = Total at this output rate minus Total at one less.", 
        "type": "SingleAnswer", 
        "id": "C5", 
        "correct": "Correct! The marginal cost of the first patient is $3500."
    }, 
    {
        "answer": "2000", 
        "incorrect": "The calculation is the cost of four patients minus the cost of three patients.  Marginal = Total at this output rate minus Total at one less.", 
        "type": "SingleAnswer", 
        "id": "C6", 
        "correct": "Correct! The marginal cost of the 4th patient is $2000."
    }, 
    {
        "answer": "5000", 
        "incorrect": "The calculation is the cost of nine patients minus the cost of eight patients.  Marginal = Total at this output rate minus Total at one less.", 
        "type": "SingleAnswer", 
        "id": "C7", 
        "correct": "Correct! The marginal cost for the 9th patient is $5000."
    }, 
    {
        "type": "MultipleChoice", 
        "id": "C8", 
        "choices": {
            "noteither": {
                "message": "Correct, but what about the other way of calculating the marginal cost?", 
                "solution": "y"
            }, 
            "either": {
                "message": "Correct!  The two ways give the same answer.  The difference in total cost always equals the difference in variable cost.", 
                "solution": "Y"
            }
        }
    }, 
    {
        "type": "MultipleChoice", 
        "id": "dis1", 
        "choices": {
            "same": {
                "message": "Even with no inflation and no risk of non-payment, getting the money sooner is better, because you can put money you get now in a bank and earn interest.", 
                "solution": "n"
            }, 
            "today": {
                "message": "Correct!  $200 today is worth more than $200 a year from now.  If you get $200 now, you can put it in a bank account.  In a year, you'll have your $200, plus the interest it will earn. <p>In 2013, interest rates are low.  The bank may only add $1, but that's better than $0.", 
                "solution": "y"
            }, 
            "year": {
                "message": "Not correct.  If you wait until next year to get your $200, you'll lose one year's worth of interest that you could have earned in a bank.", 
                "solution": "n"
            }
        }
    }, 
    {
        "answer": "210.0", 
        "incorrect": "\"No.  We will have $200 plus one year's simple interest.  5% of 200 is 10.", 
        "type": "SingleAnswer", 
        "id": "dis2", 
        "correct": "Correct!  We'll have $210.<p>That's the $200 we started with, plus 5% of $200, which is $10."
    }, 
    {
        "type": "MultipleChoice", 
        "id": "dis3", 
        "choices": {
            "22050": {
                "message": "Correct!  After one year you have $210.  After the second year, you get 5% of $210, which is $10.50, in interest.  Your final total is $210 + $10.50 = $220.50.", 
                "solution": "y"
            }, 
            "220": {
                "message": "Not quite.  Your original $200 will earn another $10 interest, but you'll also get interest on the first year's $10 interest. Getting interest on interest is called 'compounding.'", 
                "solution": "n"
            }
        }
    }, 
    {
        "answer": "3", 
        "incorrect": "No.  For the total after one year, we multiplied $200 by 1.05 once.  For two years, we multiplied by 1.05 twice.  For three years, ...", 
        "type": "SingleAnswer", 
        "id": "dis4", 
        "correct": "<table BORDER=0 CELLSPACING=2 CELLPADDING=0 WIDTH='73%' ><tr><td ALIGN=CENTER VALIGN=TOP WIDTH='53%'>$200 &times;(1.05)&sup3;&nbsp;</font></td><td VALIGN=TOP WIDTH='46%'>= $231.52</td></tr><tr><td ALIGN=CENTER VALIGN=TOP>Present Value &times;( 1+Interest Rate )&sup3;&nbsp;</td><td VALIGN=TOP>= Future Value in Three Years</td></tr></table>To calculate how much we will have in three years, we multiply by 1.05 three times, once for the first year, once for the second year, and once for the third year."
    }, 
    {
        "type": "MultipleChoice", 
        "id": "dis5", 
        "choices": {
            "200": {
                "message": "You don't need $200 now. You only need the amount that will grow to $200 if you leave it in the bank and earn interest for a year.", 
                "solution": "n"
            }, 
            "190": {
                "message": "$190 is not quite enough.  Subtracting 5% of $200 does not give the right answer.  If you did start with $190, your interest would be 5% of $190, which is $9.50.  You'd have $199.50 next year, not $200.", 
                "solution": "n"
            }, 
            "19048": {
                "message": "Correct! You want the amount that will grow to $200 in one year.  <br>You want X such that <br>X \\u00d7 (1.05) = $200.  <br>Divide both sides of this by 1.05 to get: <br>X = $200/1.05 <br>which calculates to<br>X = $190.48.", 
                "solution": "y"
            }
        }
    }, 
    {
        "answer": "<p>18141", 
        "incorrect": "No.  There is only one method that discounts future amounts correctly. You don't need $200 now. You only need the amount that will grow to $200 if you leave it in the bank and earn interest for two years.", 
        "type": "SingleAnswer", 
        "id": "dis6", 
        "correct": "<p>We want to know the amount of money that will grow to $200 in two years at 5% interest. <br>This is the amount X such that<br>X&times;1.05&sup2; = $200.<p>Divide both sides of that by (1.05)&sup2; to solve for X:<br>X = $200/1.05&sup2; = $181.41"
    }, 
    {
        "answer": "3", 
        "incorrect": "No.  For the present value of an amount one year in the future, we divided $200 by 1.05 once.  For $200 two years in the future, we divided by 1.05 twice.  For three years in the future, ...", 
        "type": "SingleAnswer", 
        "id": "dis7", 
        "correct": "Correct!"
    }, 
    {
        "answer": "5", 
        "incorrect": "No.  The bond matures in 5 years. <p>If the bond's price is lower than $156.71, you will buy the bond. If the bond's price is higher than $156.71, you will put your money in the bank instead.", 
        "type": "SingleAnswer", 
        "id": "dis8", 
        "correct": "<p>Correct!  The most you should be willing to pay is the amount that, if you put it in the bank for 5 years at 5% interest, would grow to $200. <p>If the bond's price is lower than $156.71, you will buy the bond. If the bond's price is higher than $156.71, you will put your money in the bank instead."
    }, 
    {
        "answer": "3", 
        "incorrect": "No.  The bond matures in 3 years.", 
        "type": "SingleAnswer", 
        "id": "dis9", 
        "correct": "<p>Correct!  With three years to go, the bond should be worth $172.77.  The closer it gets to maturity, the more it is worth.  When it finally gets to maturity, it will be worth the full $200."
    }, 
    {
        "answer": "FIXME", 
        "incorrect": "MEMEMEMEME", 
        "type": "SingleAnswer", 
        "id": "dis10", 
        "correct": "FIXFIXFIX"
    }, 
    {
        "type": "MultipleChoice", 
        "id": "dis11", 
        "choices": {
            "numbers": {
                "message": "Your lucky numbers are 2 44 26 3 8 37.<br> If these win the state lottery, you can buy the hen and the egg!", 
                "solution": "n"
            }, 
            "yes": {
                "message": "Correct, probably, but what if you'll starve before you get the hen and it starts laying?\"", 
                "solution": "Y"
            }, 
            "depends": {
                "message": "Correct!  It depends on your rate of time preference, which is about how soon you really need to eat!", 
                "solution": "y"
            }, 
            "no": {
                "message": "Correct, if you would starve before you got the hen.", 
                "solution": "n"
            }
        }
    }
]


return {
	questionChecker: function(question, submission){

		console.log("carried question id " + question);
		console.log("carried submission " + submission);
		
		for(var i = 0; i < 30; i++){
			if(questions[i].id == question){

				if(questions[i].type == "SingleAnswer"){
					if(questions[i].answer == submission){
						console.log(questions[i].correct);
						var answerArray = [true, questions[i].correct];
						return answerArray;
					}
					else
						console.log(questions[i].incorrect);
						var answerArray = [false, questions[i].incorrect];
						return answerArray;
				}
				if(questions[i].type == "MultipleChoice"){
					console.log(questions[i].choices[submission]);
					if(questions[i].choices[submission].solution == "y"){
						var answerArray = [true, questions[i].choices[submission].message];
						return answerArray;
					} else
						var answerArray = [false, questions[i].choices[submission].message];
						return answerArray;
					
				}
				if(questions[i].type == "Range"){
					if(questions[i].answer == submission){
						console.log(questions[i].correct);
						var answerArray = [true, questions[i].correct];
						return answerArray;
					}
					else if(questions[i].answer < submission){
						console.log(questions[i].highmessage);
						var answerArray = [false, questions[i].highmessage];
						return answerArray;
					}
					else if(questions[i].answer > submission){
						console.log(questions[i].lowmessage);
						var answerArray = [false, questions[i].lowmessage];
						return answerArray;
					}
				}

			}
		}
		return null;
	

	}
}


}])

.service('BlankService', [function(){

}]);

