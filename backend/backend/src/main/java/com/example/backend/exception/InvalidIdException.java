package com.example.backend.exception;

@SuppressWarnings("serial")
public class InvalidIdException extends RuntimeException {

	public InvalidIdException(Long id) {
		super("User not found with the id " + id);
	}

}
