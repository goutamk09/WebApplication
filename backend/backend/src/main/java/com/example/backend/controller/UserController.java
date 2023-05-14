package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.entity.User;
import com.example.backend.exception.InvalidIdException;
import com.example.backend.repository.UserRepository;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/save")
	public User save(@RequestBody User user) {
		return userRepository.save(user);

	}

	@GetMapping("/all")
	public List<User> getAll() {
		return userRepository.findAll();

	}

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable Long id) {
		return userRepository.findById(id).orElseThrow(() -> new InvalidIdException(id));

	}

	@PutMapping("/user/{id}")
	public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
		return userRepository.findById(id).map(user -> {
			user.setUserName(newUser.getUserName());
			user.setEmail(newUser.getEmail());
			return userRepository.save(user);
		}).orElseThrow(() -> new InvalidIdException(id));
	}

	@DeleteMapping("/user/{id}")
	public String delete(@PathVariable Long id) {
		if (!userRepository.existsById(id)) {
			throw new InvalidIdException(id);
		}
		userRepository.deleteById(id);
		return "user with id: " + id + " has been deleted successfully";
	}

}
