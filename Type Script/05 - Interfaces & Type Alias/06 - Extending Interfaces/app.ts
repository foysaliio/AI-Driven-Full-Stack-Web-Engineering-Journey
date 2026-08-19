// An interface can extend another interface.

interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  studentId: number;
  course: string;
}

let student: Student = {
  name: "Foysal",
  age: 22,
  studentId: 101,
  course: "Computer Science",
};

console.log(student.name);
console.log(student.age);
console.log(student.studentId);
console.log(student.course);
