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

    private String calories;

    private String protein;

    private String carbs;

    private String fat;

    private String fiber;

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