// String firstname, 
// String lastname,
// String email,
// String telephone,
// Date hireDate,
// boolean active

package com.reactproject.tutorialproject.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "persons")
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

    @Column(name = "hireDate")
    private Date hireDate;

    @Column(name = "active")
    private boolean active;

    public Person() {

    }

    public Person(String firstname, String lastname, String email, String telephone, Date hireDate, boolean active) {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActive() {
        return active;
    }

    public void setPersonStatus() {
        this.active = !this.active;
    }

    @Override
    public String toString() {
        return "Person [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", active=" + active + "]";
    }

}
