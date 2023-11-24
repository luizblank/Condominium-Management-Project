package com.luizblank.condominiumapi.model;

import java.sql.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document("reservation")
public class ReservationModel {
    @Id
    private String id;
    private String cpf;
    private String date;
}
