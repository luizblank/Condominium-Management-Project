package com.luizblank.condominiumapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("user")
public class UserModel {
    @Id
    private String id;
    private String name;
    private Short numapto;
    private String block;
    private String cellnumber;
    private String email;
    private String cpf;
    private Boolean adm;
}