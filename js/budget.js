// SOME GLOBAL VARIABLE FOR CALCUALTING BUDGET
let totalExpense;
let managerCost;
let CoachCost;

// FUNCTION FOR CALCULATE TOTAL EXPENSE

document.getElementById('calc').addEventListener('click', function () {
    let selectedNo = noLi - 1;  /* noLi value started with 1 so decreased 1 */

    if (selectedNo >= 1) {
        const eachPlrCost = filterInVals('p_cost');
        if (eachPlrCost <= 1) {
            alert('please put your per player budget');
        } else {
            totalExpense = playerExpense(eachPlrCost, selectedNo);
            document.getElementById('total').innerText = "00";
        }


    } else {
        alert('You Have to Add at Least One Player');
    }

})




// FUNCTION FOR CALCUALATE GRAND TOTAL COST

document.getElementById('calcTotal').addEventListener('click', function () {
    if (isNaN(totalExpense)) {    /**validation */

        alert('please select player and calculate the Player Expenses'); /**validation alert*/


    } else {   /**validation */
        /** InVals == input value */
        managerCost = filterInVals('manager');
        CoachCost = filterInVals('coach');
        const eachPlrCost = filterInVals('p_cost');
        if (eachPlrCost == 0 || isNaN(eachPlrCost)) {
            alert('please calculate the player expense first')
        } else {
            const grandTotal = totalCost(totalExpense, managerCost, CoachCost);

        }
    }

});


/***    
 *   JAVASCRTIPT CODE ENDS HERE
 */

