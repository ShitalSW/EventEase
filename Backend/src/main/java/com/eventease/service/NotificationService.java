package com.eventease.service;



import com.eventease.entity.NotificationEntity;
import com.eventease.dao.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

    @Autowired
    private NotificationRepository notificationRepository;

    public List<NotificationEntity> getAllNotifications() {
        return notificationRepository.findAll();
    }

    public NotificationEntity getNotificationById(Long id) {
        return notificationRepository.findById(id).orElse(null);
    }

    public NotificationEntity createNotification(NotificationEntity notification) {
        return notificationRepository.save(notification);
    }

    public NotificationEntity updateNotification(Long id, NotificationEntity notification) {
        NotificationEntity existingNotification = notificationRepository.findById(id).orElse(null);
        if (existingNotification != null) {
            existingNotification.setRecipient(notification.getRecipient());
            existingNotification.setMessage(notification.getMessage());
            existingNotification.setNotificationDate(notification.getNotificationDate());
            return notificationRepository.save(existingNotification);
        }
        return null;
    }

    public void deleteNotification(Long id) {
        notificationRepository.deleteById(id);
    }
}

