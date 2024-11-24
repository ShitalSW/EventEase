package com.eventease.service;



import com.eventease.entity.ReviewEntity;
import com.eventease.dao.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public List<ReviewEntity> getAllReviews() {
        return reviewRepository.findAll();
    }

    public ReviewEntity getReviewById(Long id) {
        return reviewRepository.findById(id).orElse(null);
    }

    public ReviewEntity createReview(ReviewEntity review) {
        return reviewRepository.save(review);
    }

    public ReviewEntity updateReview(Long id, ReviewEntity review) {
        ReviewEntity existingReview = reviewRepository.findById(id).orElse(null);
        if (existingReview != null) {
            existingReview.setAttendee(review.getAttendee());
            existingReview.setOrganizer(review.getOrganizer());
            existingReview.setEvent(review.getEvent());
            existingReview.setComment(review.getComment());
            existingReview.setRating(review.getRating());
            existingReview.setReviewDate(review.getReviewDate());
            return reviewRepository.save(existingReview);
        }
        return null;
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}

