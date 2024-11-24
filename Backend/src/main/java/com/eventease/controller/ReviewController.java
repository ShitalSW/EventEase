package com.eventease.controller;



import com.eventease.entity.ReviewEntity;
import com.eventease.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping
    public List<ReviewEntity> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/{id}")
    public ReviewEntity getReviewById(@PathVariable Long id) {
        return reviewService.getReviewById(id);
    }

    @PostMapping
    public ReviewEntity createReview(@RequestBody ReviewEntity review) {
        return reviewService.createReview(review);
    }

    @PutMapping("/{id}")
    public ReviewEntity updateReview(@PathVariable Long id, @RequestBody ReviewEntity review) {
        return reviewService.updateReview(id, review);
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable Long id) {
        reviewService.deleteReview(id);
    }
}

