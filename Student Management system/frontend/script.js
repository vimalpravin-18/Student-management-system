const name = document.getElementById("studentName");
const mark = document.getElementById("studentMark");
const studentList = document.getElementById("studentList");
let student = [];
const API = "http://localhost:3000/students";

function AddStudent() {
    const studentName = name.value.trim();
    const studentMark = parseFloat(mark.value);

    if(studentName == "" || isNaN(studentMark) || studentMark < 0 || studentMark > 100) {
        alert("Please enter a valid name and mark (0-100).");
        return;
    }

    fetch(API, {
        method: "POST",
        headers: {"Content=Type": "application/json"},
        body: JSON.stringify({ name: studentName, mark: studentMark })
    }).then(() => {
        renderStudent();
    })

     name.value = "";
    mark.value = "";
}

function loadStudent() {
    fetch(API)
    .then(res => res.json())
    .then(data => {
        student = data;
        renderStudent()
    });
}


function RemoveStudent(index) {
    student.splice(index, 1);
    renderStudent();
}

function renderStudent() {
    studentList.innerHTML = "";

    student.forEach((s, index) =>{
        const ListItem = document.createElement("li");
        ListItem.innerHTML = `
        ${s.name}: ${s.mark}
        <button onclick="RemoveStudent(${id})">Remove</button>
        `;
        studentList.appendChild(ListItem);
    });
}