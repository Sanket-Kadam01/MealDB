package com.mealdb.customExceptions;

@SuppressWarnings("serial")
public class MealServiceException extends RuntimeException {

	public MealServiceException(String message)
	{
		super(message);
	}
	
	public MealServiceException(String message, Throwable cause)
	{
		super(message,cause);
	}
}
