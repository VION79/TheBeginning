/*
function addSomething (num, str) {

    //all statements go inside curly braces

    var add = num + str;

    alert (add); 
}

// function needs to be called outside of the function to work

addSomething (455," programs to write");

// javascript is a way to tie a function to an event such as a mouse click
*/

function add (x,y) {
    result = x + y;
    return result;

}

var theResult = add (6,5);
document.write (theResult);

