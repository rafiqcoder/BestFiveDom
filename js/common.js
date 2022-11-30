
/** COMMON FUNCTIONS  STARTS */

/** common funtion for filter inputs and validate */
function filterInVals(id) {
    let inVal = document.getElementById(id).value;
    inVal = parseInt(inVal);
    if (!isNaN(inVal) && inVal >= 0) {
        return inVal;
    } else {

        return inVal = 0;
    }
}



/** common function to calculate player Expenses */
function playerExpense(playerCost, selectedNo) {
    let playerExp = playerCost * selectedNo;
    document.getElementById('pl_expense').innerText = playerExp;
    return playerExp;
}



/** common function to calculate Total cost */
function totalCost(player, manager, coach) {
    let totalcost = player + manager + coach;

    document.getElementById('total').innerText = totalcost;
}

/** COMMON FUNCTIONS  FINISHED */



