
package br.com.bernardo.api.repositorio;

import br.com.bernardo.api.modelo.Cliente;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repositorio extends CrudRepository<Cliente, Integer> {
}