class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
};

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(registrant) {
        
        if (this.students.filter(registrant => registrant.email === registrant.email).length) {
            // this.students = this.students;
            console.log(`Cannot register ${registrant.email} because he/she is already registered`);
        } else {
            console.log(`Registering ${registrant.email} to the bootcamp Web Dev Fundamentals`);
            this.students.push(registrant);
        }
        return this.students;
    }
}

const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");
const webDevFundamentals = new Bootcamp( "Web Development Fundamentals", "Beginner");

const Neo = new Student("Neo", "neo@matrix.org", "Seattle");
const Trinity = new Student("Trinity", "trinity@matrix.org", "Bellingham");
const Morpheus = new Student("Morpheus", "Morpheus@matrix.org", "Tacoma");
const Renee = Student("Renee", "renee@onyxdigitalspace.com", "Charlotte")
