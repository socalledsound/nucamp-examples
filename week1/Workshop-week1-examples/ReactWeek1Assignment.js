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
    registerStudent(student) {
        const registeredStudent = this.students.filter(s => s.email === student.email).length
        console.log(registeredStudent)
        if (registeredStudent) {  /* alternatively could use this.students.includes, or another option - but it's a good chance to practice more filter */
            console.log(`The student ${student.email} is already registered!`);
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}


const bridget = new Student('bridget', 'whatever@aol.com', 'nice people')
const chris = new Student('chris', 'stuff@pets.com', 'coffe-lovers')

const react = new Bootcamp('react', 'beginner', [bridget, chris])

react.registerStudent(chris)

