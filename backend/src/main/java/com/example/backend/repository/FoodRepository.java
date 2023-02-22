package com.example.backend.repository;

import com.example.backend.model.Food;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class FoodRepository {

    public final List<Food> foodList;

    public List<Food> listFood(){
        return foodList;
    }

    public Food addFood(Food foodToAdd){
        foodList.add(foodToAdd);
        return foodToAdd;
    }

}
