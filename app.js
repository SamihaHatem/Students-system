const { demandOption, number, array } = require("yargs")
const yargs = require("yargs")
const myModule = require('./students')

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
        if (x.comment)
            myModule.addStudent(x.id, x.name, x.arrayOfGrades, x.comment)
        else
            myModule.addStudent(x.id, x.name, x.arrayOfGrades, "")
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

// node app.js add --id="1" --name="sameha" --arrayOfGrades=[49,48,50] --comment="very good" //done
// node app.js add --id="2" --name="sara" --arrayOfGrades=[49,40,50] --comment="very good" //done
// node app.js add --id="3" --name="ahmed" --arrayOfGrades=[39,48,40] --comment="very good" //done
// node app.js add --id="4" --name="ali" --arrayOfGrades=[49,50,50] --comment="very good"//done
// node app.js add --id="5" --name="omar" --arrayOfGrades=[49,40,30] //done
// node app.js add --id="5" --name="omar" --arrayOfGrades=[49,40,30]  //already exist
// node app.js add --id="6" --name="salma" --arrayOfGrades=[25,44,33] //done

// node app.js read --id="1" //done
// node app.js read --id="10" //doesn't exist

// node app.js list

// node app.js delete --id="6" //done
// node app.js delete --id="6" //doesn't exist