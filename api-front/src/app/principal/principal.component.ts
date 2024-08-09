import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  cliente = new Cliente();
  btnCadastro: boolean = true;

  // visibilidade de campos
  tabela: boolean = true;

  //json de clientes
  clientes: Cliente[] = [];

  //construtor
  constructor(private servico: ClienteService) {}

  //selecionar clientes
  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  //cadastrar cliente
  cadastrar(): void {
    this.servico.cadastra(this.cliente).subscribe((retorno) => {
      this.clientes.push(retorno);
      this.cliente = new Cliente();
      alert('Cliente cadastrado com sucesso!');
    });
  }

  //metodo de visibilidade
  selecionarCliente(pos: number): void {
    this.cliente = this.clientes[pos];
    console.log('Cliente selecionado:', this.cliente);
    this.btnCadastro = false;
    this.tabela = false;
  }

  //editar cliente
  editar(): void {
    this.servico.editar(this.cliente).subscribe((retorno) => {
      let posicao = this.clientes.findIndex((c) => c.codigo == retorno.codigo);
      this.clientes[posicao] = retorno;
      this.cliente = new Cliente();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Cliente editado com sucesso!');
    });
  }

  //editar cliente
  remover(): void {
    console.log(this.cliente.codigo);
    if (this.cliente.codigo !== undefined) {
      this.servico.remover(this.cliente.codigo).subscribe((retorno) => {
        const posicao = this.clientes.findIndex(
          (c) => c.codigo === this.cliente.codigo
        );
        this.clientes.splice(posicao, 1);
        this.cliente = new Cliente();
        this.btnCadastro = true;
        this.tabela = true;
        alert('Cliente removido com sucesso!');
      });
    } else {
      console.error(
        'Erro: Código do cliente não está definido ao tentar remover.'
      );
    }
  }

  //metodo de inicializacao
  ngOnInit() {
    this.selecionar();
  }
}
