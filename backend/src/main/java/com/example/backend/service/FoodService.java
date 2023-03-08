package com.example.backend.service;

import com.example.backend.model.Food;
import com.example.backend.model.FoodDTO;
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

    public Food addFood(FoodDTO foodToAdd){
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

    public Food updateFood(String id, FoodDTO foodToUpdate){
        Food updatedFood = new Food(id, foodToUpdate.name(), foodToUpdate.kcalPerHundredGrams(), foodToUpdate.amountInGrams(), foodToUpdate.isFavorite());
        return foodRepository.updateFood(updatedFood);
    }


}
