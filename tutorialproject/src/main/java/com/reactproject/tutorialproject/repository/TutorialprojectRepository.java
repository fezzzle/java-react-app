package com.reactproject.tutorialproject.repository;

import com.reactproject.tutorialproject.model.Person;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;



public interface TutorialprojectRepository extends JpaRepository<Person, Long> {
  List<Person> findByFirstnameCointaining(String firstname);
  List<Person> findByEmailContaining(String email);
  List<Person> findByActive(boolean active);
}