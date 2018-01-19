'use strict';
var addfield = document.querySelector("button");
var fieldContainer = document.querySelector('.field-container');
var a = 0;

function increaseOnOne() {
    a++;
    return a;
};
addfield.addEventListener("click", function() {
    var similarField = document.querySelector("#similar-field").content;
    var fieldElement = similarField.cloneNode(true);
    fieldElement.querySelector("label").textContent = "name" + increaseOnOne();
    fieldContainer.insertBefore(fieldElement, fieldContainer.lastElementChild);

});