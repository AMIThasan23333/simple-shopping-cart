


function updateCaseNumber(isIncrease){

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberString);

    let  newCaseNumber;

    if(isIncrease){
        newCaseNumber = previouscaseNumber + 1;
    }
    else{
        newCaseNumber = previouscaseNumber - 1;
    }


    caseNumberField.value = newCaseNumber;
    return newCaseNumber;





}



document.getElementById('btn-case-plus').addEventListener('click', function(){

    const newCaseNumber = updateCaseNumber(true);

    const caseTotlaPrice = newCaseNumber * 59;

    const caseTotalElement = document.getElementById('case-total')

    caseTotalElement.innerText =caseTotlaPrice;


})


document.getElementById("btn-case-minus").addEventListener('click', function(){


    updateCaseNumber(false)




})