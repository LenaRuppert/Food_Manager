package com.example.backend.service;

import com.example.backend.model.Food;
import com.example.backend.repository.FoodRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FoodService {

    private final FoodRepository foodRepository;

    private final IdService idService;


    public List<Food> listFood(){
        return foodRepository.listFood();
    }

    public Food addFood(Food foodToAdd){
        Food newFood = new Food(
                idService.generateId(),
                foodToAdd.name(),
                foodToAdd.kcalPerHundredGrams(),
                foodToAdd.amountInGrams(),
                foodToAdd.isFavorite()
        );
        return foodRepository.addFood(newFood);

    }

    public void deleteFoodById(String id){
        foodRepository.deleteFoodById(id);
    }

    public Food updateFood(String id, Food foodToUpdate){
        return foodRepository.updateFood(foodToUpdate);
    }


}
