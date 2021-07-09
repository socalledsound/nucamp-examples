class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}
class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student){
    // console.log(student.email);
    // console.log(this.students);
    const found = this.students.find(item => item.email === student.email);
    // console.log(found);
    if(!found){
      this.students.push(student);
      console.log(`student with email ${student.email} has been successfully registered`);
    } else {
      console.log(`sorry, that user already exists`);
    }
    return this.students
  }

}

const student1 = new Student("Carter", "carterseinhoff@gmail.com", "Oakland");
const student2 = new Student("Jemal", "jemal@gmail.com", "Oakland");
const bootcamp1 = new Bootcamp("Nucamp", "Advanced");

bootcamp1.registerStudent(student1);

console.log(registeredStudents);


//  console.log(bootcamp1.students);
// for(let i = 0; i < 100; i++){
//   bootcamp1.registerStudent(student1);
// }

//  console.log(bootcamp1.students);
//  bootcamp1.registerStudent(student1);
//  console.log(bootcamp1.students);
// //  bootcamp1.registerStudent(student1);
//  bootcamp1.registerStudent(student2);
//  console.log(bootcamp1.students);

// const webDevFundamentals= new Bootcamp("Web Development Fundamentals", "Beginner");
// const fullStack= new Bootcamp("Full Stack Web and Mobile Development" , "Advanced");
// const Neo= new Student("Neo", "neo@matrix.org" , "Seattle");
// const Morpheus= new Student("Morpheus", "morpheus@matrix.org" , "Tacoma");
// const Trinity= new Student("Trinity", "trinity@matrix.org" , "Bellingham");
// const Aron = new Student("Trinity", "trinity@matrix.org" , "Bellingham");
// const Elsa = new Student("Trinity", "trinity@gmail.com" , "Bellingham");
// bootcamp1.registerStudent(student1);
// bootcamp1.registerStudent(student2);

// webDevFundamentals.registerStudent(Neo);
// webDevFundamentals.registerStudent(Morpheus);
// webDevFundamentals.registerStudent(Trinity);
// webDevFundamentals.registerStudent(Aron);
// webDevFundamentals.registerStudent(Elsa);


// console.log(student1.name);
// console.log(student2.email);
// console.log(webDevFundamentals);
// console.log(Neo);
// console.log(Morpheus);
// console.log(Trinity);