// Week 6, Day 2

class Student {
  constructor (name, age) {
    if (typeof name == "string") {
      this.name = name;
    }
    if (typeof age == "number") {
      this.age = age;
    }
    this.dateOfBirth = "";
    this.gender = "";
    this.studentId = "";
    this.hobbies = [];
  }
  setName (newName) {
    if (typeof newName == "string") {
      this.name = newName;
    }
  }
  setAge (newAge) {
    if (typeof newAge == "number") {
      this.age = newAge;
    }
  }
  setDateOfBirth (newDate) {
    if (typeof newDate == "string") {
      this.dateOfBirth = newDate;
    }
  }
  setGender (newGender) {
    if (newGender.toLowerCase() == "male" || newGender.toLowerCase() == "female") {
      this.gender = newGender;
    }
  }
  setStudentId(newStudentId) {
    this.studentId = newStudentId;
  }
  addHobby (addHobby) {
    if (typeof addHobby == "string") {
      this.hobbies.push(addHobby);
    }
  }
  removeHobby (removeHobby) {
    if (typeof removeHobby == "string") {
      let indexRemoveHobby = this.hobbies.indexOf(removeHobby);
      this.hobbies.splice(indexRemoveHobby, 1);
    }
  }
  getData () {
    let b = this.hobbies.toString();
    let a = this.name + "\n" + this.age + "\n" + this.dateOfBirth + "\n" + this.gender + "\n" + this.studentId + "\n" + b;
    console.log(a);
    //atau return this
    return a;
  }
}

let student = new Student ("Fadly", 26);
student.setName(123);
student.setAge("25");
student.setDateOfBirth("17-02-1990");
student.setGender("Male");
student.setStudentId("0001");
student.addHobby("Coding");
student.addHobby("Eat");
student.addHobby("Sleep");
student.removeHobby("Eat");
student.getData();
