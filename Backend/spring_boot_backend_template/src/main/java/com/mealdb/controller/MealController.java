package com.mealdb.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mealdb.dto.CategoryResponse;
import com.mealdb.dto.MealByCategory;
import com.mealdb.dto.MealByCategoryResponse;
import com.mealdb.entity.Category;
import com.mealdb.pagination.PaginatedResponse;
import com.mealdb.service.MealService;


@RestController
@RequestMapping("/api")
public class MealController {

    private final MealService mealService;

    public MealController(MealService mealService) {
        this.mealService = mealService;
    }

    // ------------------ SEARCH MEAL BY NAME -------------------
    @GetMapping("/recipes/search")
    public ResponseEntity<?> searchRecipes(@RequestParam String name) {
        return ResponseEntity.ok(mealService.searchRecipesByName(name));
    }

    // ------------------ GET CATEGORIES (PAGINATED) -------------------
    @GetMapping("/categories")
    public ResponseEntity<?> getCategories(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "10") int size) {

        CategoryResponse categoryResponse =
                (CategoryResponse) mealService.getCategories();

        List<Category> allCategories = (categoryResponse != null &&
                categoryResponse.getCategories() != null)
                ? categoryResponse.getCategories()
                : Collections.emptyList();

        int totalElements = allCategories.size();
        int start = page * size;

        if (start >= totalElements) {
            return ResponseEntity.ok(
                    new PaginatedResponse<>(Collections.emptyList(), page, size, totalElements));
        }

        int end = Math.min(start + size, totalElements);
        List<Category> pagedCategories = allCategories.subList(start, end);

        return ResponseEntity.ok(
                new PaginatedResponse<>(pagedCategories, page, size, totalElements));
    }

    // ------------------ RANDOM RECIPE -------------------
    @GetMapping("/recipes/random")
    public ResponseEntity<?> getRandomRecipe() {
        return ResponseEntity.ok(mealService.getRandomRecipe());
    }

    // ------------------ RECIPE DETAILS BY ID -------------------
    @GetMapping("/recipes/{id}")
    public ResponseEntity<?> getRecipeDetails(@PathVariable String id) {
        return ResponseEntity.ok(mealService.getRecipeDetailsById(id));
    }

    // ------------------ NEW: MEALS BY CATEGORY (PAGINATED) -------------------
    @GetMapping("/recipes/category/{category}")
    public ResponseEntity<?> getMealsByCategory(
            @PathVariable String category,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        MealByCategoryResponse mealsResponse = mealService.getMealsByCategory(category);

        List<MealByCategory> meals = (mealsResponse != null && mealsResponse.getMeals() != null)
                ? mealsResponse.getMeals()
                : Collections.emptyList();

        int totalElements = meals.size();
        int start = page * size;

        if (start >= totalElements) {
            return ResponseEntity.ok(
                    new PaginatedResponse<>(Collections.emptyList(), page, size, totalElements));
        }

        int end = Math.min(start + size, totalElements);
        List<MealByCategory> pagedMeals = meals.subList(start, end);

        return ResponseEntity.ok(
                new PaginatedResponse<>(pagedMeals, page, size, totalElements));
    }

}

