/**********************************************
 ******************** BOOLEANS ****************
 **********************************************/

let isStudent = true;
//setting the type
let isStudent2: boolean = true;

/**********************************************
 ******************** NUMBERS *****************
 **********************************************/

let studentID = 1234;

let studentYear: number = 2020;

/**********************************************
 ******************** STRINGS *****************
 **********************************************/

let studentEmail: string = "juli@gmail.com";

let studentName = "Juliana Aragão";

let greeting = `hi, ${studentName}`;

/**********************************************
 ******************** ARRAYS ******************
 **********************************************/

let friends = ["Bob", "Alice", "Joe"];

let friends2: string[] = ["Adi", "Dani", "Thay"];
//friends2[2] = 3; // erro

let nameAgeAndSchool: [string, number, string];
nameAgeAndSchool = ["jeff", 8, "waterloo"];
nameAgeAndSchool[0].toUpperCase();

/**********************************************
 ******************** ANY *********************
 **********************************************/

let notSure: any = 8;
notSure = "a string instead";
notSure = true;

/**********************************************
 ***************** UNDEFINED ******************
 **********************************************/

let u: undefined = undefined;
let n: null = null;

/*
    No need to type the value like variable: type 
    because it is set automatically
*/
