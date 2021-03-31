package com.springboot.springbootreactpostgresql.controller;

import com.springboot.springbootreactpostgresql.model.Person;
import com.springboot.springbootreactpostgresql.repository.TutorialprojectRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PersonController {

  @Autowired
  TutorialprojectRepository tutorialprojectRepository;

  @GetMapping("/people")
  public ResponseEntity<List<Person>> getAllPeople(
      @RequestParam(required = false) String firstname) {
    try {
      List<Person> people = new ArrayList<Person>();

      if (firstname == null) {
        tutorialprojectRepository.findAll().forEach(people::add);
      } else {
        tutorialprojectRepository.findByFirstnameContaining(firstname).forEach(people::add);
      }

      if (people.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(people, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/people/{id}")
  public ResponseEntity<Person> getPersonById(@PathVariable("id") long id) {
    Optional<Person> personData = tutorialprojectRepository.findById(id);

    if (personData.isPresent()) {
      return new ResponseEntity<>(personData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/people")
  public ResponseEntity<Person> createPerson(@RequestBody Person person) {
    try {
      Person _person = tutorialprojectRepository.save(new Person(person.getFirstname(),
          person.getLastname(), person.getEmail(), person.getTelephone(), person.getHireDate(), true));
      return new ResponseEntity<>(_person, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
    }
  }

  @PutMapping("/people/{id}")
  public ResponseEntity<Person> updateTutorial(@PathVariable("id") long id,
      @RequestBody Person person) {
    Optional<Person> personData = tutorialprojectRepository.findById(id);

    if (personData.isPresent()) {
      Person _person = personData.get();
      _person.setFirstname(person.getFirstname());
      _person.setLastname(person.getLastname());
      _person.setEmail(person.getEmail());
      _person.setTelephone(person.getTelephone());
      _person.setHireDate(person.getHireDate());
      _person.setPersonStatus(person.isActive());
      return new ResponseEntity<>(tutorialprojectRepository.save(_person), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/people/{id}")
  public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) {
    try {
      tutorialprojectRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

  @DeleteMapping("/people")
  public ResponseEntity<HttpStatus> deleteAllTutorials() {
    try {
      tutorialprojectRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

  @GetMapping("/people/isactive")
  public ResponseEntity<List<Person>> findByActive() {
    try {
      List<Person> people = tutorialprojectRepository.findByActive(true);

      if (people.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }
      return new ResponseEntity<>(people, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    }
  }

}
