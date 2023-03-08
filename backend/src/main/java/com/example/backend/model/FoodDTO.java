package com.example.backend.model;

public record FoodDTO(String name, int kcalPerHundredGrams, int amountInGrams, boolean isFavorite) {
}
