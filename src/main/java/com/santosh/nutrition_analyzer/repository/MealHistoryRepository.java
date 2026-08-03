package com.santosh.nutrition_analyzer.repository;

import com.santosh.nutrition_analyzer.entity.MealHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealHistoryRepository
        extends JpaRepository<MealHistory, Long> {

    List<MealHistory> findByUserId(Long userId);

}