/*
document.write ("We are now using Javascript file");
                                            //var
                                            //Must always start with VAR
                var day;                    //Declare variable without assigning value
                var assignValue = 23454;    //Declare variable and assign a value
                var years = 35;             //Numeric variables - numbers
                var someText = " years old";//String variables - text and characters - MUST use double quatation marks
                var gameOver = true;        //Boolean - True or False
                                            //Function is the action or behaviour. Where we wokr with our variables
                                            //Variable naming: can only start with letter or _
                                            //Variables are case sensitive
                alert (years + someText);
*/
//global and local variables
var name="Henry is a global variable";                           //global variable

function printName() {
var name2="Sarah is a local Variable";                          //local variable 
/*local variable; when we omit var in front of name2, it will treat it like global variable. 
If I want the var to be treated like a local I must put var in front of the variable. Otherwise it would be
treated like a global var*/

document.write(name2);                   

/* If I want to document.write local var name2, I must place the code inside the function.*/

}

printName();                                //call function

