package com.example.backend.service;

import com.example.backend.model.Food;
import com.example.backend.repository.FoodRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

import static org.junit.jupiter.api.Assertions.*;

class FoodServiceTest {

    FoodService foodService;

    FoodRepository foodRepository;
    IdService idService;

    @BeforeEach
    public void setUp() {
    foodRepository = mock(FoodRepository .class);

    idService = mock(IdService .class);

    foodService =new FoodService(foodRepository, idService);

}

    @Test
    void CheckListFood() {
        //GIVEN
        List<Food> expectedListOfFood = new ArrayList<>();
        expectedListOfFood.add(new Food("1", "Milk", 3424));
        when(foodRepository.listFood()).thenReturn(expectedListOfFood);

        //WHEN
        List<Food> actual = foodService.listFood();

        //THEN
        verify(foodRepository).listFood();
        Assertions.assertEquals(expectedListOfFood, actual);
    }

    @Test
    void checkAddFood(){
        //GIVEN
        Food foodToAdd = new Food("1", "Milk", 2343);
        when(idService.generateId()).thenReturn("1");
        when(foodRepository.addFood(foodToAdd)).thenReturn(foodToAdd);

        //WHEN
        Food foodExpected = foodService.addFood(foodToAdd);

        //THEN
        verify(foodRepository).addFood(foodToAdd);
        assertEquals(foodToAdd, foodExpected);
    }


}