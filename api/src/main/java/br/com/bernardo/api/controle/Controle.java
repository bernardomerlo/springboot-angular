package br.com.bernardo.api.controle;

import br.com.bernardo.api.modelo.Cliente;
import br.com.bernardo.api.repositorio.Repositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class Controle {

    @Autowired
    private Repositorio repositorio;

    @PostMapping("/")
    public Cliente cadastrar(@RequestBody Cliente cliente) {
        return repositorio.save(cliente);
    }

    @GetMapping("/")
    public Iterable<Cliente> selecionar() {
        return repositorio.findAll();
    }

    // passa via requisicao json
//     {
//        "id": id,
//        "nome": "nometal",
//        "idade": idadetal,
//        "cidade": "cidadetal"
//    }
    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente cliente) {
        return repositorio.save(cliente);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable int id) {
        repositorio.deleteById(id);
    }
}
