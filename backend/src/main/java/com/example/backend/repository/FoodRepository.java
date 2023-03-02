package com.example.backend.repository;

import com.example.backend.model.Food;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class FoodRepository {

    public final Map<String, Food> foodList = new HashMap<>();

    public List<Food> listFood(){
        return new ArrayList<>(foodList.values());
    }

    public Food addFood(Food foodToAdd){
        foodList.put(foodToAdd.id(), foodToAdd);
        return foodToAdd;
    }


    public void deleteFoodById(String id){
        foodList.remove(id);
    }

}
