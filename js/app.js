const realRevenue = document.querySelector('.revenue-percentage');
profit = document.querySelector('.profit-percentage');
ownerPay = document.querySelector('.owner-percentage');
tax = document.querySelector('.tax-percentage');
operatingExpense = document.querySelector('.expense-percentage');
topLineRevenue = document.querySelector('.top-line-revenue');

const realRevenueAmount = document.querySelector('.revenue-result'); 
profitAmount = document.querySelector('.profit-result');
ownerPayAmount = document.querySelector('.owner-result');
taxAmount = document.querySelector('.tax-result');
operatingExpenseAmount = document.querySelector('.expense-result');
totalRealRevenue = document.getElementById('total-real-revenue');

const matSubInput = document.querySelector('.mat-subs-input');
realRevenueInput = document.querySelector('.real-revenue-input');
profitInput = document.querySelector('.profit-input');
ownerPayInput = document.querySelector('.owner-pay-input');
taxInput = document.querySelector('.tax-input');
operatingExpenseInput = document.querySelector('.expense-input');

const profitBleed = document.querySelector('.profit-bleed'); 
ownerBleed = document.querySelector('.owner-bleed');
taxBleed = document.querySelector('.tax-bleed');
expenseBleed = document.querySelector('.expense-bleed');

const profitFix = document.getElementById('prof-fix');
ownerFix = document.getElementById('own-fix');
taxFix = document.getElementById('tx-fix');
expenseFix = document.getElementById('ex-fix');




// =====================REVENUE GROUPS==============================
// =================================================================

const groupA = [...Array(250000).keys()].map(x => x + 1);
groupB = [...Array(500000).keys()].map(x => x + 1);
groupC = [...Array(1000000).keys()].map(x => x + 1);
groupD = [...Array(5000000).keys()].map(x => x + 1);
groupE = [...Array(10000000).keys()].map(x => x + 1);
groupF = [...Array(50000000).keys()].map(x => x + 1);

rangeA = [];
rangeB = [];
rangeC = [];
rangeD = [];
rangeE = [];
rangeF = [];

for(var i=0;i<groupA.length;i++){
    rangeA.push(i);};
for(var i=250000;i<groupB.length;i++){
    rangeB.push(i);};
for(var i=500000;i<groupC.length;i++){
    rangeC.push(i);};
for(var i=1000000;i<groupD.length;i++){
    rangeD.push(i);};
for(var i=5000000;i<groupE.length;i++){
    rangeE.push(i);};
for(var i=10000000;i<groupF.length;i++){
    rangeF.push(i);};

// ======================================================================
// ======================================================================

// =======================ALLOCATION GROUPS================================
// ========================================================================
const allocationA = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 5;
    ownerPay.innerText = 50;
    tax.innerText = 15;
    operatingExpense.innerText = 30;
}
const allocationB = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 10;
    ownerPay.innerText = 35;
    tax.innerText = 15;
    operatingExpense.innerText = 40;
}
const allocationC = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 15;
    ownerPay.innerText = 20;
    tax.innerText = 15;
    operatingExpense.innerText = 50;
}
const allocationD = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 10;
    ownerPay.innerText = 10;
    tax.innerText = 15;
    operatingExpense.innerText = 65;
}
const allocationE = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 15;
    ownerPay.innerText = 5;
    tax.innerText = 15;
    operatingExpense.innerText = 65;
}
const allocationF = () =>{
    realRevenue.innerText = 100;
    profit.innerText = 20;
    ownerPay.innerText = 0;
    tax.innerText = 15;
    operatingExpense.innerText = 65;
}

// ========================================================================
// ========================================================================

// ===========================PROFIT % COLUMN================================
// ==========================================================================

const formFiller = (arr) =>{
    String(arr) === 'A'? allocationA():(String(arr)==='B'?allocationB():(String(arr)==='C'?allocationC():
    (String(arr)==='D'? allocationD():(String(arr)==='E'?allocationE():(String(arr)==='F'?allocationF():'Invalid Argument')))))
    // if user input is in array, then use the  category to fill in percentage cells.
};

const getStatus = () =>{
    rangeA.includes(Number(topLineRevenue.value))? formFiller('A'):(rangeB.includes(Number(topLineRevenue.value))?formFiller('B'):(rangeC.includes(Number(topLineRevenue.value))?formFiller('C'):(rangeD.includes(Number(topLineRevenue.value))?formFiller('D'):(rangeE.includes(Number(topLineRevenue.value))?formFiller('E'):
    (rangeF.includes(Number(topLineRevenue.value))?formFiller('F'):'Invalid Number')))))
};

function changeProfColor() {
    document.getElementById('prof-fix')?document.getElementById('prof-fix') = 'prof-adjust':document.getElementById('prof-adjust') = 'prof-fix'
};

topLineRevenue.onchange = () =>{
    getStatus();
};



// ==========================================================================
// ==========================================================================



// ===========================PROFIT $  / BLEED / FIX ======================

//==========================================================================


//==========================================================================
// ==========================================================================
const calculateProfit = () => {
    profitAmount.innerText = realRevenueAmount.innerText * (Number(profit.innerText) / 100);
    ownerPayAmount.innerText = realRevenueAmount.innerText * (Number(ownerPay.innerText)/100);
    taxAmount.innerText = realRevenueAmount.innerText * (Number(tax.innerText)/100);
    operatingExpenseAmount.innerText = realRevenueAmount.innerText *  (Number(operatingExpense.innerText)/100);
};

const adjustFix = () =>{//COME BACK TO THIS AND USE CHANGE CLASS AND CLASS TOGGLE TO CHANGE BETWEEN INCREASE DECREASE AND OK
    (Number(profitAmount.innerText) == 0? profitFix.innerText = 'OK':(Number(profitAmount.innerText) < 0) ? profitFix.innerText = 'Increase' : profitFix.innerText = 'Decrease');
    (Number(ownerBleed.innerText) == 0? ownerFix.innerText = 'OK':(Number(ownerBleed.innerText) < 0) ? ownerFix.innerText = 'Increase' : ownerFix.innerText = 'Decrease');
    (Number(taxBleed.innerText) == 0 ? taxFix.innerText = 'OK' :(Number(taxBleed.innerText) < 0) ? taxFix.innerText = 'Increase' : taxFix.innerText = 'Decrease');
    (Number(expenseBleed.innerText) == 0 ? expenseFix.innerText = 'OK':(Number(expenseBleed.innerText) < 0) ? expenseFix.innerText = 'Increase': expenseFix.innerText = 'Decrease');
    document.querySelector('#prof-fix').className = 'profit-fix';
    document.getElementById('own-fix').className = 'owner-fix';
    document.getElementById('tx-fix').className = 'tax-fix';
    document.getElementById('ex-fix').className = 'expense-fix';
};

const updateBleed = () => {
    profitBleed.innerText = (Number(profitInput.value) - Number(profitAmount.innerText));
    ownerBleed.innerText = (Number(ownerPayInput.value) - Number(ownerPayAmount.innerText));
    taxBleed.innerText =  (Number(taxInput.value) - Number(taxAmount.innerText));
    expenseBleed.innerText = (Number(operatingExpenseInput.innerText) - Number(operatingExpenseAmount.innerText));
}

const checkTotals = () =>{
    fakeTotalRevenue = Number(ownerPayInput.value) + Number(taxInput.value) + Number(operatingExpenseInput.value) + Number(profitInput.value) ;
    fakeTotalRevenue - Number(totalRealRevenue.innerText) == 0 ? document.getElementById('total').className = 'fake-revenue' : document.getElementById('total').className = 'high-revenue';
}
 

matSubInput.onchange = () => {
    realRevenueInput.value = Number(topLineRevenue.value) - Number(matSubInput.value);
    realRevenueAmount.innerText = (Number(topLineRevenue.value)  -  Number(matSubInput.value));
    totalRealRevenue.innerText = (Number(topLineRevenue.value)  -  Number(matSubInput.value));
    
};

profitInput.onchange = () => {
    profitAmount.innerText = Number(realRevenueAmount.innerText) * (Number(profit.innerText) / 100);
    profitBleed.innerText = (Number(profitInput.value) - Number(profitAmount.innerText));
    Number(profitBleed.innerText) == 0 ? profitFix.innerText = 'OK': Number(profitBleed.innerText) < 0 ? profitFix.innerText = 'Increase' : profitFix.innerText = 'Decrease';
    profitFix.innerText == 'Decrease'? document.querySelector('#prof-fix').className = 'profit-adjust' : document.querySelector('#prof-fix').className = 'profit-fix' ;
    checkTotals();
};

ownerPayInput.onchange = () => {
    ownerPayAmount.innerText = realRevenueAmount.innerText * (Number(ownerPay.innerText)/100);
    ownerBleed.innerText = (Number(ownerPayInput.value) - Number(ownerPayAmount.innerText));
    (Number(ownerBleed.innerText) == 0? ownerFix.innerText = 'OK':(Number(ownerBleed.innerText) < 0) ? ownerFix.innerText = 'Increase' : ownerFix.innerText = 'Decrease');
    ownerFix.innerText == 'Decrease' ? document.getElementById('own-fix').className = 'owner-adjust': document.getElementById('own-fix').className = 'owner-fix';
    checkTotals();
};

taxInput.onchange = () => {
    taxAmount.innerText = realRevenueAmount.innerText * (Number(tax.innerText)/100);
    taxBleed.innerText =  (Number(taxInput.value) - Number(taxAmount.innerText));
    Number(taxBleed.innerText) == 0 ? taxFix.innerText = 'OK' :Number(taxBleed.innerText) < 0 ? taxFix.innerText = 'Increase' : taxFix.innerText = 'Decrease';
    taxFix.innerText == 'Decrease' ? document.getElementById('tx-fix').className = 'tax-adjust' : document.getElementById('tx-fix').className = 'tax-fix';
    checkTotals();
};

operatingExpenseInput.onchange = () => {
    operatingExpenseAmount.innerText = realRevenueAmount.innerText *  (Number(operatingExpense.innerText)/100);
    expenseBleed.innerText = (Number(operatingExpenseInput.value) - Number(operatingExpenseAmount.innerText));
    Number(expenseBleed.innerText) == 0 ? expenseFix.innerText = 'OK':Number(expenseBleed.innerText) < 0 ? expenseFix.innerText = 'Increase': expenseFix.innerText = 'Decrease';
    expenseFix.innerText == 'Decrease' ? document.getElementById('ex-fix').className = 'expense-adjust' : document.getElementById('ex-fix').className = 'expense-fix';
    checkTotals();
    

};
//==========================================================================
// ==========================================================================


// ========================RESET====================================
// =================================================================
const formReset = () => {
    document.getElementById('clearFields-1').value = '';
    document.getElementById('clearFields-2').value = '';
    document.getElementById('clearFields-3').value = '';
    document.getElementById('clearFields-4').value = '';
    document.getElementById('clearFields-5').value = '';
    document.getElementById('clearFields-6').value = '';
    document.getElementById('clearFields-7').value = '';
    document.querySelector('#total').className = 'fake-revenue';
    
    getStatus();

    realRevenueAmount.innerText = 0;
    totalRealRevenue.innerText = 0;
    calculateProfit();
    updateBleed();
    adjustFix();

};
formReset();
// =================================================================
// =================================================================


