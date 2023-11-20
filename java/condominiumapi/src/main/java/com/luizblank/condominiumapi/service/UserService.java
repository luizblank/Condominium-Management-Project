package com.luizblank.condominiumapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luizblank.condominiumapi.model.UserModel;
import com.luizblank.condominiumapi.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel save(UserModel userModel) {
        return this.userRepository.save(userModel);
    }

    public void save(String id, String name, Short numapto, String block, String cellnumber, String email, String cpf, Boolean adm) {
        this.userRepository.save(new UserModel(id, name, numapto, block, cellnumber, email, cpf, adm));
    }

    public List<UserModel> findByName(String name) {
        return (List<UserModel>) this.userRepository.findByName(name);
    }

    public List<UserModel> findByCpf(String cpf) {
        return (List<UserModel>) this.userRepository.findByCpf(cpf);
    }

    public List<UserModel> findByEmail(String email) {
        return (List<UserModel>) this.userRepository.findByEmail(email);
    }

    public List<UserModel> findByBlock(String block) {
        return (List<UserModel>) this.userRepository.findByBlock(block);
    }

    public List<UserModel> findAll() {
        return (List<UserModel>) this.userRepository.findAll();
    }

    public void delete(String id) {
        this.userRepository.deleteById(id);
    }
}
