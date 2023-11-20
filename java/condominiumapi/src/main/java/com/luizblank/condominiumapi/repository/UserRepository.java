package com.luizblank.condominiumapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.luizblank.condominiumapi.model.UserModel;

public interface UserRepository extends MongoRepository<UserModel, String>{
    @Query("{'name': ?0}")
    List<UserModel> findByName(String name);

    @Query("{'cpf': ?0}")
    List<UserModel> findByCpf(String cpf);

    @Query("{'email': ?0}")
    List<UserModel> findByEmail(String email);

    @Query("{'block': ?0}")
    List<UserModel> findByBlock(String block);
}