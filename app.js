const { demandOption, number, array } = require("yargs")
const yargs = require("yargs")
const myModule = require('./students')

const sumOfArray = (Array) => {
    let total = 0
    Array.forEach(ele => {
        total += parseInt(ele)
    })

    return total;
}

yargs.command({
    command: "add",
    describe: "Add New Student to Students.json",
    builder: {
        id: {
            type: "number",
            demandOption: true,
            describe: "Student ID"
        },
        name: {
            type: 'string',
            demandOption: true,
            describe: 'Student Name'
        },
        arrayOfGrades: {
            type: 'array',
            demandOption: true,
            describe: 'Grades of Student'
        },
        comment: {
            type: 'string',
            describe: 'Student Comment if exist'
        }
    },
    handler: (x) => {
        const total = sumOfArray(x.arrayOfGrades)
        if (x.comment)
            myModule.addStudent(x.id, x.name, x.arrayOfGrades, x.comment, total)
        else
            myModule.addStudent(x.id, x.name, x.arrayOfGrades, "", total)
    }
})

yargs.command({
    command: "delete",
    describe: "delete student by id",
    builder: {
        id: {
            type: 'number',
            describe: "student id to delete",
            demandOption: true
        }
    },
    handler: (x) => {
        myModule.deleteStudent(x.id)
    }
})

yargs.command({
    command: "read",
    describe: "read student by id",
    builder: {
        id: {
            type: 'number',
            describe: "student id to read",
            demandOption: true
        }
    },
    handler: (x) => {
        myModule.readStudent(x.id)
    }
})

yargs.command({
    command: 'list',
    describe: "list all students",
    handler: () => {
        myModule.listAllStudnets()
    }
})

yargs.parse()

// node app.js add --id="1" --name="sameha" --arrayOfGrades=49 50 40 --comment="very good" //done
// node app.js add --id="2" --name="sara" --arrayOfGrades=50 20 30 --comment="very good" //done
// node app.js add --id="3" --name="ahmed" --arrayOfGrades=50 20 22 --comment="very good" //done
// node app.js add --id="4" --name="ali" --arrayOfGrades=45 20 33 --comment="very good"//done
// node app.js add --id="5" --name="omar" --arrayOfGrades=50 20 35 //done
// node app.js add --id="5" --name="omar" --arrayOfGrades=50 20 40  //already exist
// node app.js add --id="6" --name="salma" --arrayOfGrades=50 30 30//done

// node app.js read --id="1" //done
// node app.js read --id="10" //doesn't exist

// node app.js list

// node app.js delete --id="6" //done
// node app.js delete --id="6" //doesn't exist