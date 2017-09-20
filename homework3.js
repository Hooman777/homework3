/*****************************************************************
 A- function that takes at least three arguments and returns
 the result of some set of operations using those arguments
 *****************************************************************/
const func1 = function(arg1, arg2, arg3, arg4) {
    const sum = function(val1, val2) {
        return val1+val2;
    }
    const square = function (val) {
        return val*val;
    }
    const output = arg1*square(arg2)/(arg3-square(arg3))*sum(arg1, arg4);
    return output;
}
//console.log(func1(-3, 4, 5 , 6));



/*****************************************************************
 B- function that takes no arguments and returns something
 *****************************************************************/
const func2 = function() {
    const pi = 3.141592654;
    return pi*func1(9, 8, 7, 6);
}
//console.log(func2()*func2()/1000);



/*****************************************************************
 C- function that takes arguments, does something but does not
  return anything
 *****************************************************************/
const func3 = function(arg1, arg2) {
    console.log(func1(arg1, 1, arg2, 2));
}
func3(10, 10);



/*****************************************************************
 D- function called fullName that takes as argument first name and
  last name and returns the full name of the person (first name
   concatenated with last name with a space in between)
 *****************************************************************/
 const fullName = function(firstName, lastName) {
     const response = firstName +' '+ lastName;
     return response;
 }
 //console.log(fullName('Rouben', 'Meschian'));



 /*****************************************************************
 E- function that takes three strings and returns the string that
 is the longest.
   -Note that you can find out the length of a string by
   doing .length.  Example:
            const str = 'Hello';
            console.log(str.length); // this will print 6 to the console
 *****************************************************************/
debugger;
const lengthComparing = function(str1, str2, str3) {
    const lengthStr1 = str1.length;
    const lengthStr2 = str2.length;
    const lengthStr3 = str3.length;

    if (lengthStr1 > lengthStr2 && lengthStr1 > lengthStr3) {
        return str1;
    } else if (lengthStr2 > lengthStr1 && lengthStr2 > lengthStr3) {
        return str2;
    } else if (lengthStr3 > lengthStr1 && lengthStr3 > lengthStr2) {
        return str3;
    } else {
        // all equal
        return str1;
    }
}

//console.log(lengthComparing('Introduction', 'Computer', 'Science'));

/*****************************************************************
  F- function that takes two numbers and returns 0 if they are equal,
   1 if the first is larger and -1 if the second is larger
 *****************************************************************/
const testVal = function (num1, num2) {
    if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
//console.log(testVal(14,41));



/*****************************************************************
 G- function that takes three inputs and returns the first truethy
 value (example:  firstTruethy(0, '', 1); should return 1)
 *****************************************************************/
const firstTruethy = function(inpt1, inpt2, inpt3) {
    if (!!inpt1) {
        return inpt1;
    }
    if (!!inpt2) {
        return inpt2;
    }
    if (!!inpt3) {
        return inpt3;
    } else {
        return "There is no any truethy!"
    }
}
//console.log(firstTruethy(0, '', 1));
