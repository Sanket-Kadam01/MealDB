package com.mealdb.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.mealdb.customExceptions.MealServiceException;
import com.mealdb.dto.CategoryResponse;
import com.mealdb.dto.MealByCategoryResponse;
import com.mealdb.dto.MealResponse;

@Service
public class MealService {

    private final RestTemplate restTemplate;
    private static final Logger logger = LoggerFactory.getLogger(MealService.class);

    private static final String BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

    public MealService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    @Cacheable(value = "recipesByName", key = "#name")
    public MealResponse searchRecipesByName(String name) {
        try {
            logger.info("Fetching recipe by name from TheMealDB API");
            String url = BASE_URL + "search.php?s=" + name;
            return restTemplate.getForObject(url, MealResponse.class);
        } catch (RestClientException ex) {
            logger.error("Failed to search recipe by name", ex);
            throw new MealServiceException("Failed to search meal by name: " + name, ex);
        }
    }
    
    @Cacheable("mealsByCategory")
    public MealByCategoryResponse getMealsByCategory(String category) {
        try {
            logger.info("Fetching meals by category from TheMealDB API: {}", category);
            String url = BASE_URL + "filter.php?c=" + category;
            return restTemplate.getForObject(url, MealByCategoryResponse.class);
        } catch (RestClientException ex) {
            logger.error("Failed to fetch meals by category {}", category, ex);
            throw new MealServiceException("Failed to fetch meals for category: " + category, ex);
        }
    }




    @Cacheable("categories")
    public CategoryResponse getCategories() {
        try {
            logger.info("Fetching categories from TheMealDB API");
            String url = BASE_URL + "categories.php";
            return restTemplate.getForObject(url, CategoryResponse.class);
        } catch (RestClientException ex) {
            logger.error("Failed to fetch categories", ex);
            throw new MealServiceException("Failed to fetch categories", ex);
        }
    }

    @Cacheable("randomRecipe")
    public MealResponse getRandomRecipe() {
        try {
            logger.info("Fetching random recipe from TheMealDB API");
            String url = BASE_URL + "random.php";
            return restTemplate.getForObject(url, MealResponse.class);
        } catch (RestClientException ex) {
            logger.error("Failed to load random recipe", ex);
            throw new MealServiceException("Failed to fetch random meal", ex);
        }
    }

    @Cacheable(value = "recipeDetails", key = "#id")
    public MealResponse getRecipeDetailsById(String id) {
        try {
            logger.info("Fetching recipe details by ID from TheMealDB API");
            String url = BASE_URL + "lookup.php?i=" + id;
            return restTemplate.getForObject(url, MealResponse.class);
        } catch (RestClientException ex) {
            logger.error("Failed to fetch recipe details by id", ex);
            throw new MealServiceException("Failed to fetch meal details for id: " + id, ex);
        }
    }
}

