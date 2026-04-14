const nameInput = document.getElementById("studentName");
const markInput = document.getElementById("studentMark");
const studentList = document.getElementById("studentList");

const API = "http://localhost:8081/students";

let students = [];

// 🔄 Load students
function loadStudents() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            students = data;
            renderStudents();
        })
        .catch(err => console.error("Error loading:", err));
}

// ➕ Add student
function addStudent() {
    const name = nameInput.value.trim();
    const mark = parseFloat(markInput.value);

    if (name === "" || isNaN(mark)) {
        alert("Enter valid data");
        return;
    }

    const studentData = {
        name: name,
        mark: Number(mark)   // 🔥 important fix
    };

    console.log("Sending:", studentData); // debug

    fetch("http://localhost:8081/students", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(studentData)
    })
    .then(res => {
        console.log("Status:", res.status);
        return res.text();   // 🔥 change from json() → text()
    })
    .then(data => {
        console.log("Response:", data);
        loadStudents();
    })
    .catch(err => console.error("Error:", err));

    nameInput.value = "";
    markInput.value = "";
}

// ❌ Delete student
function deleteStudent(id) {
    console.log("Deleting ID : ", id) 
    fetch(`http://localhost:8081/students/${id}`, {
        method: "DELETE"
    })
    .then(() => loadStudents())
    .catch(err => console.error(err));
}

// 🎨 Render UI
function renderStudents() {
    studentList.innerHTML = "";

    students.forEach(s => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${s.name} - ${s.mark}
            <button onclick="deleteStudent(${s.id})">❌</button>
        `;

        studentList.appendChild(li);
    });
}

// 🚀 Load on start
loadStudents();
