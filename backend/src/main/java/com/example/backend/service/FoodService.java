package com.example.backend.service;

import com.example.backend.model.Food;
import com.example.backend.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FoodService {

    public final FoodRepository foodRepository;

    public List<Food> listFood(){
        return foodRepository.listFood();
    }

    public Food addFood(Food foodToAdd){
        foodRepository.addFood(foodToAdd);
        return foodToAdd;
    }
}
