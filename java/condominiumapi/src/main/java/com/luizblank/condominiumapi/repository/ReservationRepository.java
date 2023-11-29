package com.luizblank.condominiumapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.luizblank.condominiumapi.model.ReservationModel;

public interface ReservationRepository extends MongoRepository<ReservationModel, String> {
    @Query("{'type': ?0, 'date': ?1}")
    List<ReservationModel> findByDate(String type, String date);
}
