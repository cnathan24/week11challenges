"use strict";


// BUDGET CONTROLLER

var budgetController = (function() {

    //some code

})();



// UI CONTROLLER
var UIController = (function() {

var DOMstrings = {
   inputType: '.add__type' 
}

return {
    getInput: function (){
    return {
    
         type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
         description: document.querySelector('.add__description').value,
         value: document.querySelector('.add__value').value,
    };

    }
};

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {


var ctrlAddItem = function() {
    
// 1. Get the filed input data

var input = UICtrl.getInput();
console.log(input);

// 2. Add the item to the budget control

// 3. Add the item to the UI

// 4. Calculate the budget

// 5. Display the budet on the UI

}

document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);


document.addEventListener('keypress', function(event) {

if (event.keycode === 13 || event.which === 13){
   ctrlAddItem();


}


});


})(budgetController, UIController);


