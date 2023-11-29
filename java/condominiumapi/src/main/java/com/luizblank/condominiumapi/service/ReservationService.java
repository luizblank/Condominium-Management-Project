package com.luizblank.condominiumapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luizblank.condominiumapi.model.ReservationModel;
import com.luizblank.condominiumapi.repository.ReservationRepository;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    public ReservationModel save(ReservationModel reservationModel) {
        return this.reservationRepository.save(reservationModel);
    }

    public List<ReservationModel> findByDate(String type, String date) {
        return (List<ReservationModel>) this.reservationRepository.findByDate(type, date);
    }

    public List<ReservationModel> findAll() {
        return (List<ReservationModel>) this.reservationRepository.findAll();
    }

    public void delete(String id) {
        this.reservationRepository.deleteById(id);
    }
}