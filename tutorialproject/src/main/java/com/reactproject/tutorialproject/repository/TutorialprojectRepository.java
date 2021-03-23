package com.reactproject.tutorialproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reactproject.tutorialproject.model.Person;

public interface TutorialprojectRepository extends JpaRepository<Person, Long> {
  List<Person> findByFirstname(String firstname);
  List<Person> findByEmailContaining(String email);
  List<Person> findByActive(boolean active);
}