package com.luizblank.condominiumapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.luizblank.condominiumapi.model.UserModel;
import com.luizblank.condominiumapi.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    // Get
    @GetMapping("")
    public List<UserModel> getAllUser() {
        List<UserModel> listRes = userService.findAll();
        return listRes;
    }

    @GetMapping("/name/{name}")
    public List<UserModel> getUserByName(@PathVariable String name) {
        List<UserModel> listRes = userService.findByName(name);
        return listRes;
    }

    @GetMapping("/cpf/{cpf}")
    public List<UserModel> getUserByCpf(@PathVariable String cpf) {
        List<UserModel> listRes = userService.findByCpf(cpf);
        return listRes;
    }

    @GetMapping("/email/{email}")
    public List<UserModel> getUserByEmail(@PathVariable String email) {
        List<UserModel> listRes = userService.findByEmail(email);
        return listRes;
    }

    @GetMapping("/block/{block}")
    public List<UserModel> getUserByBlock(@PathVariable String block) {
        List<UserModel> listRes = userService.findByBlock(block);
        return listRes;
    }

    // Post
    @PostMapping("")
    public void addUser(@RequestBody UserModel newUser) {
        userService.save(newUser);
    }

    // Put
    @PutMapping("/update/{id}")
    public void updateUser(@RequestBody UserModel newUser, @PathVariable String id) {
        userService.save((String) id, (String) newUser.getName(), (Short) newUser.getNumapto(),
                (String) newUser.getBlock(), (String) newUser.getCellnumber(), (String) newUser.getEmail(),
                (String) newUser.getCpf(), (Boolean) newUser.getAdm());
    }

    // Delete
    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.delete(id);
    }
}
