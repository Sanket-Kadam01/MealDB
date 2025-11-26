package com.mealdb.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MealByCategoryResponse {

    private List<MealByCategory> meals;

}

