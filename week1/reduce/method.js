registerStudent(student) {
    const result = this.student.filter((item) => item.email === student.email);
    if (result.length === 0) {
      console.log("student added");
      this.student.push(student);
    } else {
      console.log("The Student is already registered!");
      console.log("Student with this email already exists");
    } 
  }

  registerStudent(student){

    const studentExists = this.students.filter(item => item.email === student.email);
    if(studentExists.length > 0){
      console.log(`${student.email} is already registered`)
    } else {
      console.log(`${student.email} has been registered`)
      this.students.push(student);
    }
    return this.students

  }