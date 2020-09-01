/*
Imagine a code to say a school's name
const foo = (school: number) => {
    switch(school){
        case1: {
            //waterloo
        }
        case 2: {
            //harvard
        }
        default: {
            throw Error()
        }
    }
}
/////////////// THAT'S TOO BIG!!
*/

enum School {
    Waterloo = 1,
    Harvard = 2,
    Stanford,
    Berkely,
}

console.log(School.Stanford); //It will show the number 3
console.log(School[3]); //It will show Stanford

enum School2 {
    Waterloo = 0,
    Harvard = "Harvard",
    Stanford = 1,
    Berkely = "Berkely",
}

const enum School3 {
    Waterloo = 0,
    Harvard = "Harvard",
    Stanford = 1,
    Berkely = "Berkely",
}
//now you can't do School3[i]
