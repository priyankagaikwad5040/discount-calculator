const student={
    first_name:"Priyanka",
    age:27,
    city:'pune',
    greet :function(){
        console.log(`This is function inside object`);
    }
}
for (const key in student) {
   console.log(`${key}--------------------${student[key]}`);
}
student.greet();
console.log(`${Object.entries(student)}`);
console.log(`${Object.keys(student)}`); //  getting keys of object
console.log(`${Object.values(student)}`);
// Object.keys(student);