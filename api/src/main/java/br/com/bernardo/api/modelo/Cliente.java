package br.com.bernardo.api.modelo;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

// Cria automaticamente a tabela clientes no banco

@Entity
@Table(name = "clientes")
@Getter
@Setter
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private int idade;
    private String cidade;
}
