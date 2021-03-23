// String firstname, 
// String lastname,
// String email,
// String telephone,
// Date hireDate,
// boolean active

package com.reactproject.tutorialproject.model;

import javax.persistence.*;

@Entity
@Table(name = "persons")
public class Tutorial {

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

	public Tutorial() {

	}

}
