var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
const port = 2450;
customers = [
    {
        custId: 1,
        name: "ABC",
        password: "abc1234",
        role: "admin",
        email: "abc@gmail.com"
    },
    {
        custId: 2,
        name: "Willie",
        password: "willie1234",
        role: "student",
        email: "willie@gmail.com"
    },
    {
        custId: 3,
        name: "Jack",
        password: "jack1234",
        role: "faculty",
        email: "jack@gmail.com"
    },
    {
        custId: 4,
        name: "James",
        password: "james1234",
        role: "student",
        email: "james@gmail.com"
    },
    {
        custId: 5,
        name: "Harry",
        password: "harry1234",
        role: "faculty",
        email: "harry@gmail.com"
    },
    {
        custId: 6,
        name: "Tia",
        password: "tia1234",
        role: "student",
        email: "tia@gmail.com"
    },
    {
        custId: 7,
        name: "Aditya",
        password: "aditya123",
        role: "faculty",
        email: "aditya@gmail.com"
    },
    {
        custId: 8,
        name: "Sonu",
        password: "sonu1234",
        role: "student",
        email: "sonu@gmail.com"
    },
    {
        custId: 9,
        name: "Ellie",
        password: "ellie1234",
        role: "student",
        email: "ellie@gmail.com"
    },
    {
        custId: 10,
        name: "Gia",
        password: "gia1234",
        role: "faculty",
        email: "gia@gmail.com"
    }
];
courses = [
    {
        courseId: 1,
        name: "ANGULAR",
        code: "ANG97",
        description: "All fundamentals of Angular 7",
        faculty: ["Daniel", "Jack"],
        students: ["Sam"]
    },
    {
        courseId: 2,
        name: "JAVASCRIPT",
        code: "JS124",
        description: "Intoduction to javascript",
        faculty: ["Aditya"],
        students: ["James", "Joy", "Monu", "Rita"]
    },
    {
        courseId: 3,
        name: "REACT",
        code: "RCT56",
        description: "React Javascript library",
        faculty: ["Jack", "Gia"],
        students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
        courseId: 4,
        name: "BOOTSTRAP",
        code: "BS297",
        description: "Bootstrap Designing Framework",
        faculty: [],
        students: ["James", "Tia", "Ellie"]
    },
    {
        courseId: 5,
        name: "CSS",
        code: "CS365",
        description: "Basic stylesheet language",
        faculty: [],
        students: ["James", "Rita", "Monica"]
    },
    {
        courseId: 6,
        name: "REST AND MICROSERVICES",
        code: "RM392",
        description: "Introduction to Microservices",
        faculty: [],
        students: ["Sam"]
    },
    {
        courseId: 7,
        name: "NODE",
        code: "ND725",
        description: "Introduction to Node",
        faculty: ["Sonia"],
        students: ["Saransh", "Shrey", "Monica"]
    }
];
faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
];
classes = [
    {
        classId: 1,
        course: "REACT",
        time: "07:45",
        endTime: "08:45",
        topic: "Redux",
        facultyName: "Jack"
    },
    {
        classId: 2,
        course: "ANGULAR",
        time: "15:45",
        endTime: "17:40",
        topic: "Component",
        facultyName: "Jack"
    },
    {
        classId: 3,
        course: "JAVASCRIPT",
        time: "15:45",
        endTime: "17:40",
        topic: "Component",
        facultyName: "Aditya"
    }
];
students = [
    {
        id: 16,
        name: "Willie",
        dob: "31-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["ANGULAR", "NODE"]
    },
    {
        id: 15,
        name: "Tia",
        dob: "30-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: []
    },
    {
        id: 14,
        name: "Apoorv",
        dob: "31-August-1998",
        gender: "male",
        about: "Want to learn new technologies",
        courses: []
    },
    {
        id: 13,
        name: "Joy",
        dob: "31-July-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT"]
    },
    {
        id: 12,
        name: "Rachel",
        dob: "31-August-1998",
        gender: "female",
        about: "Pursuing Graduation",
        courses: []
    },
    {
        id: 11,
        name: "Monica",
        dob: "30-July-1997",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["CSS", "NODE"]
    },
    {
        id: 10,
        name: "Monu",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT"]
    },
    {
        id: 9,
        name: "Sonu",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["REACT"]
    },
    {
        id: 8,
        name: "Raima",
        dob: "30-July-1997",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["REACT"]
    },
    {
        id: 7,
        name: "Rita",
        dob: "31-August-1998",
        gender: "female",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
        id: 6,
        name: "Shrey",
        dob: "12-May-1997",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["NODE"]
    },
    {
        id: 5,
        name: "Saransh",
        dob: "31-July-1997",
        gender: "male",
        about: "Want to learn new technologies",
        courses: ["NODE"]
    },
    {
        id: 4,
        name: "Sanya",
        dob: "31-July-1997",
        gender: "male",
        about: "Want to learn new technologies",
        courses: []
    },
    {
        id: 3,
        name: "James",
        dob: "12-July-1994",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
        id: 2,
        name: "Sam",
        dob: "12-July-1994",
        gender: "male",
        about: "Pursuing Graduation",
        courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
        id: 1,
        name: "Ellie",
        dob: "12-June-1992",
        gender: "female",
        about: "Want to learn new technologies",
        courses: ["BOOTSTRAP"]
    }
];

app.post("/register", function (req, res) {
    const newCust = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    };
    const maxCustId = customers.reduce((max, customer) => {
        return customer.custId > max ? customer.custId : max;
    }, 0);
    newCust.custId = maxCustId + 1;
    customers.unshift(newCust);
    var customerRes = {
        name: newCust.name,
        email: newCust.email,
        role: newCust.role,
    };
    res.send(customerRes);
});
app.post("/login", function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    var cust = customers.find(function (item) {
        return item.email === email && item.password === password;
    });
    console.log(cust);
    var custRec = {
        email: cust.email,
        name: cust.name,
        role: cust.role
    }

    res.send(custRec);
});
app.get("/getcustomer", function (req, res) {
    res.send(customers);
});
app.get("/student", function (req, res) {
    const studentNames = students.map(student => student.name);
    res.json(studentNames);
});
app.get("/faculties", function (req, res) {
    const facultiesNames = faculties.map(faculties => faculties.name);
    res.json(facultiesNames);
});

app.get("/getcourse", function (req, res) {
    res.send(courses);
});
app.get("/courses/:name", (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name parameter is required" });
    }

    const courseNames = name.split(",");

    const matchingCourses = courses.filter(course => courseNames.includes(course.name));

    if (matchingCourses.length === 0) {
        return res.status(404).json({ error: "No courses found with the provided names" });
    }

    res.json(matchingCourses);
});
app.get("/getclasses", function (req, res) {
    res.send(classes);
});
app.post("/createclass", (req, res) => {
    const { course, time, endTime, topic, facultyName } = req.body;
    const maxId = Math.max(...classes.map((c) => c.classId), 0);
    const newClassId = maxId + 1;
    const newClass = {
        classId: newClassId,
        course,
        time,
        endTime,
        topic,
        facultyName
    };
    classes.push(newClass);

    res.status(201).json(newClass);
});

app.put("/updateclass/:classId", (req, res) => {
    const { classId } = req.params;
    const { course, time, endTime, topic, facultyName } = req.body;
    const classToUpdate = classes.find((c) => c.classId === parseInt(classId));

    if (!classToUpdate) {
        return res.status(404).json({ error: "Class not found" });
    }
    classToUpdate.course = course || classToUpdate.course;
    classToUpdate.time = time || classToUpdate.time;
    classToUpdate.endTime = endTime || classToUpdate.endTime;
    classToUpdate.topic = topic || classToUpdate.topic;
    classToUpdate.facultyName = facultyName || classToUpdate.facultyName;

    res.json(classToUpdate);
});
app.get("/getclass/:classId", (req, res) => {
    const { classId } = req.params;

    // Find the class in the array by classId
    const foundClass = classes.find((c) => c.classId === parseInt(classId));

    if (!foundClass) {
        return res.status(404).json({ error: "Class not found" });
    }

    res.json(foundClass);
});

app.get("/getcourse/:courseId", (req, res) => {
    const courseId = parseInt(req.params.courseId);

    const course = courses.find(course => course.courseId === courseId);

    if (!course) {
        return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
});

app.put("/course/:courseId", (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const updatedCourse = req.body;
    const courseIndex = courses.findIndex(course => course.courseId === courseId);

    if (courseIndex === -1) {
        return res.status(404).json({ error: "Course not found" });
    }
    courses[courseIndex] = {
        ...courses[courseIndex],
        ...updatedCourse
    };

    res.json(courses[courseIndex]);
});

app.get("/getstudents", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const courseFilter = req.query.course ? req.query.course.split(",") : [];
    const filteredStudents = courseFilter.length > 0
        ? students.filter(student => student.courses.some(course => courseFilter.includes(course)))
        : students;
    const paginatedStudents = pagination(filteredStudents, page);
    const responseObj = {
        items: paginatedStudents,
        page: page,
        totalItems: paginatedStudents.length,
        totalNum: filteredStudents.length
    };

    res.json(responseObj);
});
app.get('/student/:name', (req, res) => {
    const studentName = req.params.name;

    // Find the student by name
    const student = students.find(student => student.name === studentName);

    // Check if the student with the given name exists
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    // Return the student's information
    res.status(200).json(student);
});



app.post('/addstudent', (req, res) => {
    const { name, dob, gender, about, courses } = req.body;
    let latestId = 0;
    students.forEach(student => {
        if (student.id > latestId) {
            latestId = student.id;
        }
    });
    const newStudent = {
        id: latestId + 1,
        name,
        dob,
        gender,
        about,
        courses,
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/updatestudent/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name, dob, gender, about, courses } = req.body;

    // Find the student by ID
    const studentToUpdate = students.find(student => student.id === studentId);

    // Check if the student with the given ID exists
    if (!studentToUpdate) {
        return res.status(404).json({ error: 'Student not found' });
    }

    // Update the student's information
    studentToUpdate.name = name;
    studentToUpdate.dob = dob;
    studentToUpdate.gender = gender;
    studentToUpdate.about = about;
    studentToUpdate.courses = courses;

    res.status(200).json(studentToUpdate);
});
app.put('/student/:name', (req, res) => {
    const studentName = req.params.name;
    const { name, dob, gender, about, courses } = req.body;

    // Find the student by name
    const studentToUpdate = students.find(student => student.name === studentName);

    // Check if the student with the given name exists
    if (!studentToUpdate) {
        return res.status(404).json({ error: 'Student not found' });
    }

    // Update the student's information
    studentToUpdate.name = name;
    studentToUpdate.dob = dob;
    studentToUpdate.gender = gender;
    studentToUpdate.about = about;
    studentToUpdate.courses = courses;

    res.status(200).json(studentToUpdate);
});


app.post('/addfaculty', (req, res) => {
    const { name, courses } = req.body;
    let latestId = 0;
    faculties.forEach(student => {
        if (student.id > latestId) {
            latestId = student.id;
        }
    });
    const newFaculty = {
        id: latestId + 1,
        name,
        courses,
    };
    faculties.push(newFaculty);
    res.status(201).json(newFaculty);
});

app.get('/getfaculty/:name', (req, res) => {
    const facultyName = req.params.name;
    const foundFaculty = faculties.find(faculty => faculty.name === facultyName);

    if (foundFaculty) {
        res.json(foundFaculty);
    } else {
        res.status(404).json({ error: "Faculty not found" });
    }
});
app.put('/faculty/:name', (req, res) => {
    const facultyName = req.params.name;
    const { name, courses } = req.body;

    const foundFacultyIndex = faculties.findIndex(faculty => faculty.name === facultyName);

    if (foundFacultyIndex !== -1) {
        // Update the faculty's information
        faculties[foundFacultyIndex] = {
            ...faculties[foundFacultyIndex],
            name,
            courses,
        };

        res.json(faculties[foundFacultyIndex]); // Return the updated faculty as JSON
    } else {
        res.status(404).json({ error: "Faculty not found" }); // Return an error if faculty is not found
    }
});


app.get("/getfaculties", (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const courseFilter = req.query.course ? req.query.course.split(",") : [];
    const filteredFaculties = courseFilter.length > 0
        ? faculties.filter(faculty => faculty.courses.some(course => courseFilter.includes(course)))
        : faculties;
    const paginatedFaculties = pagination(filteredFaculties, page);
    const responseObj = {
        items: paginatedFaculties,
        page: page,
        totalItems: paginatedFaculties.length,
        totalNum: filteredFaculties.length
    };

    res.json(responseObj);
});



function pagination(obj, page) {
    const perPage = 3; // Change this to 3 for 3 items per page
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;

    return obj.slice(startIndex, endIndex);
}


app.listen(port, () => console.log(`Node app listening on port ${port}!`));