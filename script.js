


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


}



document.getElementById('btn-case-plus').addEventListener('click', function(){


    updateCaseNumber(true)
})


document.getElementById("btn-case-minus").addEventListener('click', function(){


    updateCaseNumber(false)




})