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
  btnCadastro: boolean = true;

  //json de clientes
  clientes: Cliente[] = [];

  //construtor
  constructor(private servico: ClienteService) {}

  //selecionar clientes
  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  //metodo de inicializacao
  ngOnInit() {
    this.selecionar();
  }
}
