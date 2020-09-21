const add1 = (a: number, b: number): number => a + b;

const add2: (a: number, b: number) => number = (a, b) => {
    return a + b;
};

// WE CAN ASSIGN A INTERFACE TO FUNCTION

interface BinaryFunc {
    (a: number, b: number): number;
}

const add: BinaryFunc = (a, b) => a + b;
const sub: BinaryFunc = (a, b) => a - b;
const mul: BinaryFunc = (a, b) => a * b;
const div: BinaryFunc = (a, b) => a / b;

//******************************************** */
const example = (): void => {
    //implementation
    //try to always assign the function return
};

var i = 1;

while (i < 6) {
    console.log("Olá mundo"); //isso é um print
    i++;
}
