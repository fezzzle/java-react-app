package com.springboot.springbootreactpostgresql.repository;

import com.springboot.springbootreactpostgresql.model.Person;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialprojectRepository extends JpaRepository<Person, Long> {
  List<Person> findByFirstnameContaining(String firstname);
  List<Person> findByEmailContaining(String email);
  List<Person> findByActive(boolean active);
}