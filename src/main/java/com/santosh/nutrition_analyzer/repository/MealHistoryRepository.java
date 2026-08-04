package com.santosh.nutrition_analyzer.repository;

import com.santosh.nutrition_analyzer.entity.MealHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MealHistoryRepository
        extends JpaRepository<MealHistory, Long> {

    List<MealHistory> findByUserId(Long userId);
    Optional<MealHistory> findByIdAndUserId(Long id, Long userId);

}