package backend.demo.src.main.java.com.example.studentapp.model;
private int id;
private String name;
private double mark;

private Student() {

}

public Student(int id, String name, double mark) {
    this .id = id;
    this.name = name;
    this.mark = mark;
}

public int getId(){
    return id;
}

public void setId(int id) {
    this.id = id;
}

public String GetName() {
    return name;
}

public void SetName(String name) {
    this.name = name;
}

public double GetMark() {
    return mark;
}

public void SetMark(double mark) {
    this.mark = mark;
}