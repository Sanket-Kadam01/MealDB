package com.mealdb.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Meal {

	@JsonProperty("idMeal")
	private String idMeal;
	@JsonProperty("strMeal")
	private String name;
	@JsonProperty("strCategory")
	private String category;
	@JsonProperty("strArea")
	private String area;
	@JsonProperty("strInstructions")
	private String instructions;
	@JsonProperty("strMealThumb")
	private String thumbnail;
	@JsonProperty("strYoutube")
	private String youtubeUrl;
	@JsonProperty("strIngredient1")
	private String ingredient1;
	@JsonProperty("strMeasure1")
	private String measure1;
	@JsonProperty("strIngredient2")
	private String ingredient2;
	@JsonProperty("strMeasure2")
	private String measure2;
	@JsonProperty("strIngredient3")
	private String ingredient3;
	@JsonProperty("strMeasure3")
	private String measure3;
	@JsonProperty("strIngredient4")
	private String ingredient4;
	@JsonProperty("strMeasure4")
	private String measure4;
	@JsonProperty("strIngredient5")
	private String ingredient5;
	@JsonProperty("strMeasure5")
	private String measure5;
	
}
