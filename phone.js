


function updatePhoneNumber (isIncrease){

    
    const phoneNumberField = document.getElementById('phone-number-field');

    const phoneNumberString = phoneNumberField.value;

    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease){

        newPhoneNumber = previousPhoneNumber + 1;


    }else{
        newPhoneNumber = previousPhoneNumber - 1;
    }

    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;

}


function updatePhoneNumberPrice(newphone){


    const phoneTotalPrice = newphone * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;


}


  function getTextElementById(elementId){


    const phoneTotalElement = document.getElementById(elementId);

    const currentPhoneTotalString = phoneTotalElement.innerText;

    const currentPhoneTotal = parseInt(currentPhoneTotalString);

    return currentPhoneTotal;





  }


  function calculateSubTotal (){


    const currentPhoneTotal = getTextElementById('phone-total')

    
    const currentcaseTotal = getTextElementById('case-total');
 
    const currentSubTotal = currentPhoneTotal + currentcaseTotal;
 
    const subtotalElement = document.getElementById('total')
 
 
 
     subtotalElement.innerText = currentSubTotal;
  }



document.getElementById('btn-phone-plus').addEventListener('click', function(){

    const newphone = updatePhoneNumber(true);
   updatePhoneNumberPrice(newphone)

   calculateSubTotal()


})



document.getElementById('btn-phone-minus').addEventListener('click', function(){


  const newPhoneNumber =  updatePhoneNumber(false)
    
updatePhoneNumberPrice(newPhoneNumber)

calculateSubTotal()

})