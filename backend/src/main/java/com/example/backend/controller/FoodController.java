package com.example.backend.controller;

import com.example.backend.model.Food;
import com.example.backend.model.FoodDTO;
import com.example.backend.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
public class FoodController {
    private final FoodService foodService;

    @GetMapping("/food")
    public List<Food> listFood(){
        return foodService.listFood();
    }

   @PostMapping("/food")
    public Food addFood(@RequestBody FoodDTO food){ return foodService.addFood(food);}

    @DeleteMapping("/food/{id}")
    public void deleteFoodById(@PathVariable String id){
        foodService.deleteFoodById(id);
    }

    @PutMapping("/food/{id}")
    public Food updateFood(@PathVariable String id, @RequestBody FoodDTO foodToUpdate){
        return foodService.updateFood(id, foodToUpdate);
    }

}
