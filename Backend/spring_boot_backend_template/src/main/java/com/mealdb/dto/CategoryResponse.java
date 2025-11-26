package com.mealdb.dto;

import java.util.List;

import com.mealdb.entity.Category;

public class CategoryResponse {

	private List<Category> categories;
	
	public List<Category> getCategories(){
		return categories;
	}
	
	public void setCategories(List<Category> categories)
	{
		this.categories = categories;
	}
}
