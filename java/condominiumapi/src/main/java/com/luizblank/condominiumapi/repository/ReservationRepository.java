package com.luizblank.condominiumapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.luizblank.condominiumapi.model.ReservationModel;

public interface ReservationRepository extends MongoRepository<ReservationModel, String> {
    @Query("{'date': ?0}")
    List<ReservationModel> findByDate(String date);
}
