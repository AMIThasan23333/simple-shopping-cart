
document.getElementById('btn-case-plus').addEventListener('click', function(){


    console.log('case button clicked')

    const caseNumberField = document.getElementById('case-number-field');

    const caseNumberString = caseNumberField.value;

    const previouscaseNumber = parseInt(caseNumberString);


    const newCaseNumber = previouscaseNumber + 1;

    caseNumberField.value = newCaseNumber;

    





})