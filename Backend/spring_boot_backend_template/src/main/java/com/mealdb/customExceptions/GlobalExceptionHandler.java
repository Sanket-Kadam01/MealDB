package com.mealdb.customExceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.RestClientException;

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(MealServiceException.class)
	public ResponseEntity<String> handleMealServiceException(MealServiceException ex)
	{
		return ResponseEntity.status(HttpStatus.BAD_GATEWAY)
				.body("Meal service error: " + ex.getMessage());
	}
	
	@ExceptionHandler(RestClientException.class)
	public ResponseEntity<String> handleRestClientException(RestClientException ex)
	{
		return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
				.body("External API is not reachable. Please try again.");
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handleGeneralException(Exception ex)
	{
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
				.body("An unexpected error occurred.");
	}
}
