package com.example.backend.controller;

import com.example.backend.repository.FoodRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class FoodControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    FoodRepository foodRepository;

    @Test
    @DirtiesContext
    void listFood() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/food"))
                .andExpect(status().isOk())
                .andExpect(content().json("[]"));
    }

    @Test
    @DirtiesContext
    void addFood() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/food")
                .contentType(MediaType.APPLICATION_JSON)
                .content("""
                        {"name": "milk"}
                        """))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                {"name": "milk"}
                                """
                ))
                .andExpect(jsonPath("$.id").isNotEmpty());
    }

}