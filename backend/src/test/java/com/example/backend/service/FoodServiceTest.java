package com.example.backend.service;

import com.example.backend.model.Food;
import com.example.backend.repository.FoodRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.mockito.Mockito.*;

import static org.junit.jupiter.api.Assertions.*;

class FoodServiceTest {

    @Test
    void listFood() {
        //GIVEN
        FoodRepository foodRepository = mock(FoodRepository.class);
        FoodService foodService = new FoodService(foodRepository);
        when(foodRepository.listFood()).thenReturn(List.of(new Food("Apple", 1)));

        //WHEN
        List<Food> actual = foodService.listFood();

        //THEN
        Assertions.assertEquals(List.of(new Food("Apple", 1)), actual);
    }
}