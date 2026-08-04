package com.santosh.nutrition_analyzer.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "meal_history")
public class MealHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String meal;

    // Numeric values
    private Integer calories;

    private Double protein;

    private Double carbs;

    private Double fat;

    private Double fiber;

    private Integer healthScore;

    @Column(columnDefinition = "TEXT")
    private String suggestions;

    private LocalDateTime analyzedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @PrePersist
    public void prePersist() {
        analyzedAt = LocalDateTime.now();
    }
}