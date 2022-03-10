const fs = require('fs');
const { parse } = require('path');

const addStudent = (id, name, arrayOfGrades, comment) => {
    const students = loadStudents();
    const dupStu = students.filter(ele => ele.id === id)

    if (dupStu.length == 0) {
        let total = 0
        arrayOfGrades.forEach(ele => {
            total += parseInt(ele)
        })
        students.push({
            id,
            name,
            arrayOfGrades,
            comment,
            total
        })
        console.log("new student is added successfully ! :)")
        saveStudents(students)
    } else console.log("ID is already exist")
}

const deleteStudent = (id) => {
    const students = loadStudents()
    const newStudents = students.filter(stu => stu.id != id)
    if (newStudents.length != students.length) {
        saveStudents(newStudents)
        console.log("student Deleted :)")
    } else {
        console.log("student id doesn't exist ! ...")
    }
}

const readStudent = (id) => {
    const students = loadStudents()
    const student = students.find(stu => stu.id === id)
    console.log("***********")
    if (student) {
        console.log("Student Name : " + student.name)
        console.log("Student degrees : " + student.arrayOfGrades)
        console.log("Student total : " + student.total)
        if (student.comment != "")
            console.log("Student comment : " + student.comment)
    } else console.log("student dosen't exist !!")
    console.log("***********")
}

const listAllStudnets = () => {
    const students = loadStudents()
    if (students.length == 0)
        console.log("THERE IS NO STUDENTS !")
    else students.filter(stu => {
        console.log("***********")
        console.log("Student ID : " + stu.id)
        console.log("Student Name : " + stu.name)
        console.log("Student degrees : " + stu.arrayOfGrades)
        console.log("Student total : " + stu.total)
        if (stu.comment != "")
            console.log("Student comment : " + stu.comment)
        console.log("***********")
        console.log("")
    })

}

const loadStudents = () => {
    try {
        const students = fs.readFileSync('students.json').toString()
        return JSON.parse(students)
    } catch {
        return []
    }
}
const saveStudents = (StuObj) => {
    const stuJSON = JSON.stringify(StuObj)
        //console.log(stuJSON)
    fs.writeFileSync('students.json', stuJSON)
}

module.exports = {
    addStudent,
    deleteStudent,
    readStudent,
    listAllStudnets
}