// read the students.json
document.addEventListener("DOMContentLoaded", function () {
    fetch('./students.json')
        .then(response => response.json())
        .then(data => {
            window.studentsData = data;
        })
        .catch(error => console.error('Error fetching students data:', error));
});

// read the lecture.json 
document.addEventListener("DOMContentLoaded", function () {
    fetch('./lectures.json')
        .then(response => response.json())
        .then(data => {
            window.lecturesData = data;
        })
        .catch(error => console.error('Error fetching lectures data:', error));
});

// show all student on a new window
function showStudentInfo() {
    // Checking studentsData is available
    if (window.studentsData) {
        const newWindow = window.open('', 'Student Information', 'width=600,height=400');
        
        // Displaying student information in a table
        newWindow.document.write(`
            <h2>Student Information</h2>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>ID</th>
                    <th>Courses</th>
                </tr>
        `);
        
        for (const student of window.studentsData) {
            newWindow.document.write(`
                <tr>
                    <td>${student.name}</td>
                    <td>${student.surname}</td>
                    <td>${student.ID}</td>
                    <td>
            `);
            
            // Displaying courses for each student
            if (student.courses && student.courses.length > 0) {
                newWindow.document.write("<ul>");
                for (const course of student.courses) {
                    newWindow.document.write(`<li>${course.code}</li>`);
                }
                newWindow.document.write("</ul>");
            } else {
                newWindow.document.write("No courses found");
            }
            
            newWindow.document.write(`
                    </td>
                </tr>
            `);
        }
        
        newWindow.document.write("</table>");
    } else {
        alert("Student information is not available.");
    }
}


//showing all lectures info a new window
function showLectureInfo() {
    const lectureInfoDiv = document.getElementById('lecture-info');

    // Check if lecturesData is available
    if (window.lecturesData) {
        const newWindow = window.open('', 'Lecture Information', 'width=400,height=300');

        // Display lecture information in the new window as a table
        newWindow.document.write(`
            <h2>Lecture Information</h2>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Credit</th>
                    <th>Total/Fail<th/>
                    <th>Instructor</th>
                </tr>
        `);

        for (const lecture of window.lecturesData) {
            newWindow.document.write(`
                <tr>
                    <td>${lecture.title}</td>
                    <td>${lecture.code}</td>
                    <td>${lecture.credit}</td>
                    <td>${lecture.totalStundent} / ${lecture.fails}</td>
                    <td></td>
                    <td>${lecture.instructor}</td>
                </tr>
            `);
        }

        newWindow.document.write("</table>");
    } else {
        alert("Lecture information is not available.");
    }
}



//grades button functionalty
const gradesBtn=document.getElementById("add-note-to-student")
const addNote = document.getElementById("add-note")
const closeWd = document.getElementById("close-window")

//when click the grades button a new wd is opening
gradesBtn.addEventListener("click",() => {
    addNote.style.display="flex";

}
)
//for close the window
closeWd.addEventListener("click",() => {
    addNote.style.display="none";

}
)

//student button functionalty
const searchStudentBtn=document.getElementById("search-student")
const schStd = document.getElementById("search-student-2")
const closeWd2 = document.getElementById("close-window-s")

//when click the student button a new wd is opening
searchStudentBtn.addEventListener("click",() => {
    schStd.style.display="flex";

}
)
//for close the window
closeWd2.addEventListener("click",() => {
    schStd.style.display="none";

}
)

//lecture button functionalty
const searchLectureBtn=document.getElementById("search-lecture")
const schLct = document.getElementById("search-lecture-2")
const closeWd3 = document.getElementById("close-window-l")

//when click the lecture button a new wd is opening
searchLectureBtn.addEventListener("click",() => {
    schLct.style.display="flex";

}
)
//for close the window
closeWd3.addEventListener("click",() => {
    schLct.style.display="none";

}
)
//add student button's functionalty
const addStudentBtn=document.getElementById("add-student")
const addStd=document.getElementById("add-student-1")
const closeWdAS=document.getElementById("close-window-1")

//when click the add-student button a new wd is opening
addStudentBtn.addEventListener("click",() => {
    addStd.style.display="flex";
}
)
//for close the window
closeWdAS.addEventListener("click",() =>{
    addStd.style.display="none";
}
)

//add lecture button's functionalty
const addLectureBtn=document.getElementById("add-lecture")
const addLctr=document.getElementById("add-lecture-1")
const closeWdL=document.getElementById("close-window-2")

//when click the add-lecture button a new wd is opening
addLectureBtn.addEventListener("click",() => {
    addLctr.style.display="flex";
}
)
//for close the window
closeWdL.addEventListener("click",() =>{
    addLctr.style.display="none";
}
)

//add lecture-to-student button's functionalty
const addLctrTostdBtn=document.getElementById("add-L-to-S")
const addLctrtoStd=document.getElementById("add-lecture-to-student")
const closeWdLTS=document.getElementById("close-window-3")

//when click the add-lecture-to-student button a new wd is opening
addLctrTostdBtn.addEventListener("click",() => {
    addLctrtoStd.style.display="flex";
}
)
//for close the window
closeWdLTS.addEventListener("click",() =>{
    addLctrtoStd.style.display="none";
}
)

//find a student with his own ID
function searchStudent() {
    const studentIdInput = document.getElementById('studentIdInput');
    const studentIdToSearch = parseInt(studentIdInput.value);

    if (!isNaN(studentIdToSearch)) {
        fetch('./students.json')
            .then(response => response.json())
            .then(studentsData => {
                // Find the student by ID
                const foundStudent = studentsData.find(student => student.ID === studentIdToSearch);
                const newWindow = window.open('', 'Search Result', 'width=400,height=300');
                // display the result on ne new window with table
                newWindow.document.write(`
                    <div>
                        <h2>Student Information</h2>
                        <table border="1">
                            <tr>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>ID</th>
                                <th>GPA</th>
                                <th>Courses</th>
                            </tr>
                            ${foundStudent ? `
                                <tr>
                                    <td>${foundStudent.name}</td>
                                    <td>${foundStudent.surname}</td>
                                    <td>${foundStudent.ID}</td>
                                    <td>${foundStudent.GPA}</td>
                                    <td>${foundStudent.courses.map(course => course.code).join(', ')}</td>
                                </tr>
                            ` : `
                                <tr>
                                    <td colspan="5">No student found with ID ${studentIdToSearch}.</td>
                                </tr>
                            `}
                        </table>
                    </div>
                `);
            })
            .catch(error => console.error('Error fetching students data:', error));
    } else {
        alert('Please enter a valid student ID.');
    }
}


//searching a lecture with its own lecture code

function searchLecture() {
    const lectureCodeInput = document.getElementById('lectureCodeInput');
    const lectureCodeToSearch = lectureCodeInput.value;

    if (lectureCodeToSearch.trim() !== '') {
        fetch('./lectures.json')
            .then(response => response.json())
            .then(lecturesData => {
                // Find the lecture by code
                const foundLecture = lecturesData.find(lecture => lecture.code === lectureCodeToSearch);
                const newWindow = window.open('', 'Search Result', 'width=400,height=300');
                //display the result on ne new window with table
                newWindow.document.write(`
                    <div>
                        <h2>Lecture Information</h2>
                        <table border="1">
                            <tr>
                                <th>Title</th>
                                <th>Code</th>
                                <th>Credit</th>
                                <th>Total/Fail<th/>
                                <th>Instructor</th>
                                <th>Students</th>
                            </tr>
                            ${foundLecture ? `
                                <tr>
                                    <td>${foundLecture.title}</td>
                                    <td>${foundLecture.code}</td>
                                    <td>${foundLecture.credit}</td>
                                    <td>${foundLecture.totalStundent} / ${foundLecture.fails}</td>
                                    <td></td>
                                    <td>${foundLecture.instructor}</td>
                                </tr>
                            ` : `
                                <tr>
                                    <td colspan="4">No lecture found with code ${lectureCodeToSearch}.</td>
                                </tr>
                            `}
                        </table>
                    </div>
                `);
            })
            .catch(error => console.error('Error fetching lectures data:', error));
    } else {
        alert('Please enter a valid lecture code.');
    }
}


//adding a new student

function addStudent() {
    // taking all entered value
    const nameInput = document.getElementById('student-name').value;
    const surnameInput = document.getElementById('student-surname').value;
    const studentNumberInput = document.getElementById('student-ID').value;
    // create a new object for new student 
    const newStudent = {
        ID: studentNumberInput,
        name: nameInput,
        surname: surnameInput,
        gpa: 0,
        courses: []
    };
    fetch('./students.json')
        .then(response => response.json())
        .then(studentsData => {
            // checking if there is a existing student with same ID
            const existingStudent = studentsData.find(student => student.ID === studentNumberInput);
            if (existingStudent) {
                alert('A student with the same student number already exists. Please enter a different student number.');
                return
            }
            // adding the new student to array
            studentsData.push(newStudent);

            //display the new student on the console
            console.log('Updated Students Data:', studentsData);
        })
        .catch(error => console.error('Error fetching students data:', error));
}

// adding a new lecture
function addLecture() {
    // taking all entered value
    const nameInput = document.getElementById('lecture-name').value;
    const codeInput = document.getElementById('lecture-code').value;
    const instructorName = document.getElementById('instructor-name').value;
    const credit = document.getElementById("lecture-credit").value;
    // create a new object for new lecture 
    const newLecture = {
        title: nameInput,
        code: codeInput,        
        credit:credit,
        exams: [],
        instructor: instructorName,
        totalStundent:0,
        fails:0
        
    };
    fetch('./lectures.json')
        .then(response => response.json())
        .then(lecturesData => {
            // checking if there is a existing lecture with same code
            const existingLecture = lecturesData.find(lecture => lecture.code === codeInput);
            if (existingLecture) {
                alert('A student with the same student number already exists. Please enter a different student number.');
                return
            }
            // adding the new lecture to array
            lecturesData.push(newLecture);

            //display the new lecture on the console
            console.log('Updated Students Data:', lecturesData);
        })
        .catch(error => console.error('Error fetching students data:', error));
}


//calculating the average of exams 
fetch('./students.json')
    .then(response => response.json())
    .then(data => {
        // taking exams from student.json file 
        const finalNot = data.courses.grade.final;
        const midtermNot = data.courses.grade.midterm;
        //eaxh exam has different effect to average
        const finalOrani = 0.6;
        const midtermOrani = 0.4;

        //  average formula
        const ortalama = (finalNot * finalOrani) + (midtermNot * midtermOrani);
        return ortalama;
    })
.catch(error => console.error('Hata:', error));


//finding the failed students on a lesson
fetch('./students.json')
    .then(response => response.json())
    .then(studentsData => {
        const targetCourseCode = 'CENG503';
        const targetGrade = 'f';
        // finding the target students 
        const studentsTakingCourse = studentsData.filter(student => {
            return student.courses && student.courses.some(course => course.code === targetCourseCode);
        });
        // finding number of all failed student
        const studentsWithP = studentsTakingCourse.filter(student => {
            return student.courses && student.courses.some(course => {
                return course.grade && course.grade.some(grade => grade.pf === targetGrade);
            });
        });
        // display the result on the console
        console.log(`Dersi alan öğrenci sayısı (${targetCourseCode}): ${studentsTakingCourse.length}`);
        console.log( `Dersi alan öğrencilerden 'fail' alan öğrenci sayısı (${targetCourseCode}): ${studentsWithP.length}`);
    })
    .catch(error => console.error('Error fetching students data:', error));



// calculating the gpa
function calculateGPA(student) {
    let totalGradePoints = 0;
    let totalCredits = 0;
    
    // checking each lesson
    for (const course of student.courses) {
        const courseCredit = course.credit;
        const grade = course.grade[0]; 
    
        // converting the letters to number
        const gradePoint = convertToGPA(grade.fGrades);
    
        // updating the grades points and total credits
        totalGradePoints += gradePoint * courseCredit;
        totalCredits += courseCredit;
    }
    
    //gpa formula
    const gpa = totalGradePoints / totalCredits;
    
    // return the result
    return gpa.toFixed(2); // İki ondalık basamaklı bir sayıya yuvarla
}
    
//converting the letter grades to number
function convertToGPA(letterGrade) {

    switch (letterGrade) {
        case "AA":
            return 4.0;
        case "BA":
            return 3.5;
        case "BB":
            return 3.0;
        case "CB":
            return 2.5;
        case "CC":
            return 2.0;
        case "DC":
            return 1.5;
        case "DD":
            return 1.0;
        default:
            return 0.0; 
    }
}
    
    // students data
    const studentData = {
        "ID": 123456789,
        "name": "John",
        "surname": "Doe",
        "GPA": 0, 
        "courses": [
            // lectures info
        ]
    };
    
    // calculating the gpa and updating with new value
    studentData.GPA = calculateGPA(studentData);
    
    return ('${studentData.GPA}');
    
   
    