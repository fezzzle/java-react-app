package com.reactproject.tutorialproject.controller;

import java.util.ArrayList;
import java.util.List;

import com.reactproject.tutorialproject.repository.TutorialprojectRepository;
import com.reactproject.tutorialproject.model.Person;

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

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PersonController {

  @Autowired
  TutorialprojectRepository tutorialprojectRepository;

  @GetMapping("/people")
  public ResponseEntity<List<Person>> getAllPeople(@RequestParam(required = false) String firstname) {
    try {
      List<Person> people = new ArrayList<Person>();

      if (firstname == null)
        tutorialprojectRepository.findAll().forEach(people::add);
      else
        tutorialprojectRepository.findByFirstname(firstname).forEach(people::add);

      if (people.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(people, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}