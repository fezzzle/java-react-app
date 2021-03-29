// String firstname,
// String lastname,
// String email,
// String telephone,
// Date hireDate,
// boolean active

package com.reactproject.tutorialproject.model;

import javax.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email")
    private String email;

    @Column(name = "telephone")
    private String telephone;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    // @DateTimeFormat(pattern = "yyyy-MM-dd")
    // @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    @Column(name = "hireDate")
    private Date hireDate;

    @Column(name = "active")
    private boolean active;

    public Person() {

    }

    public Person(String firstname, String lastname, String email, String telephone,
            Date hireDate, boolean active) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.telephone = telephone;
        this.hireDate = hireDate;
        this.active = active;
    }

    public long getId() {
        return id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }

    public boolean isActive() {
        return active;
    }

    public void setPersonStatus(boolean isActive) {
        this.active = isActive;
    }

    // @Override
    // public String toString() {
    // return "Person [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname
    // + ", active=" + active + "]";
    // }

}
