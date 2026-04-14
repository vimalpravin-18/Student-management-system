package com.example.studentapp.controller;

import com.example.studentapp.model.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin(origins = "*")
public class StudentController {    

    private List<Student> students = new ArrayList<>();
    private int idCounter = 1;

    // ✅ GET all students
    @GetMapping
    public List<Student> getStudents() {
        return students;
    }   

    // ✅ ADD student
    @PostMapping   
public Student addStudent(@RequestBody Student s) {
    System.out.println("Received: " + s.getName() + " " + s.getMark());
    s.setId(idCounter++);
    students.add(s);
    return s;
}

    // ✅ DELETE student
    @DeleteMapping("/{id}")
public String deleteStudent(@PathVariable int id) {

    students.removeIf(s -> s.getId() == id);

    return "Deleted";
}
}
