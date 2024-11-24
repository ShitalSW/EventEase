package com.eventease.controller;



import com.eventease.entity.NotificationEntity;
import com.eventease.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;

    @GetMapping
    public List<NotificationEntity> getAllNotifications() {
        return notificationService.getAllNotifications();
    }

    @GetMapping("/{id}")
    public NotificationEntity getNotificationById(@PathVariable Long id) {
        return notificationService.getNotificationById(id);
    }

    @PostMapping
    public NotificationEntity createNotification(@RequestBody NotificationEntity notification) {
        return notificationService.createNotification(notification);
    }

    @PutMapping("/{id}")
    public NotificationEntity updateNotification(@PathVariable Long id, @RequestBody NotificationEntity notification) {
        return notificationService.updateNotification(id, notification);
    }

    @DeleteMapping("/{id}")
    public void deleteNotification(@PathVariable Long id) {
        notificationService.deleteNotification(id);
    }
}
