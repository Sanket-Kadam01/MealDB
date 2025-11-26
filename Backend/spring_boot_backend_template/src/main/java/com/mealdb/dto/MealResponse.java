package com.mealdb.dto;

import java.util.List;

import com.mealdb.entity.Meal;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MealResponse {

	private  List<Meal> meals;
	
}
