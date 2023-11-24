package com.luizblank.condominiumapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.luizblank.condominiumapi.model.ReservationModel;

public interface ReservationRepository extends MongoRepository<ReservationModel, String> {
    @Query("{'cpf': ?0}")
    List<ReservationModel> findByCpf(String cpf);
}
