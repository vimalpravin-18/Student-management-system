package com.example.studentapp.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Student {

    private int id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("mark")
    private double mark;

    public Student() {}

    public Student(int id, String name, double mark) {
        this.id = id;
        this.name = name;
        this.mark = mark;
    }

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getMark() { return mark; }
    public void setMark(double mark) { this.mark = mark; }
}
