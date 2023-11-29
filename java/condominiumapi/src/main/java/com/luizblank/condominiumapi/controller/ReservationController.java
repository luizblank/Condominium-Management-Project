package com.luizblank.condominiumapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luizblank.condominiumapi.model.ReservationModel;
import com.luizblank.condominiumapi.service.ReservationService;

@RestController
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    // Get
    @GetMapping("")
    public List<ReservationModel> getAllReservations() {
        List<ReservationModel> listRes = reservationService.findAll();
        return listRes;
    }

    @GetMapping("type/{type}/date/{date}")
    public List<ReservationModel> getReservationByDate(@PathVariable(value = "type") String type, @PathVariable(value = "date") String date) {
        List<ReservationModel> listRes = reservationService.findByDate(type, date);
        return listRes;
    }

    // Post
    @PostMapping("")
    public void addReservation(@RequestBody ReservationModel newReservation) {
        reservationService.save(newReservation);
    }

    // Delete
    @DeleteMapping("/delete/{id}")
    public void deleteReservation(@PathVariable String id) {
        reservationService.delete(id);
    }
}

