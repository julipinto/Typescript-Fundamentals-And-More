const printStudentId = (student: { id: number }) => {
    console.log(student.id);
};

/* ERROR
    let student = {id: '123'} // id: string
    printStudentId(student);
*/

//********************************************************
//********************************************************
//********************************************************

interface Student {
    id: number;
}

const printStudentId2 = (student: Student) => {
    console.log(student.id);
};

//no need for the student have only the params specified by the interface
let student = { id: 123, name: "Juli" };

printStudentId2(student); // NO ERROR

/* ERROR
    //printStudentId2({ id: 123, name: "Juli" }); 
*/

//********************************************************
//********************************************************
//********************************************************

// The propety _brand will prevent to a functiion recive anything that's not the correctly interface

interface PartTimeCourseLoad {
    _brand: "PartTime";
    firstGrade: number;
    secondGrade: number;
}
