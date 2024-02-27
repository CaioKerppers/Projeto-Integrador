import { Component } from '@angular/core';

@Component({
  selector: 'app-aparelhos',
  templateUrl: './aparelhos.component.html',
  styleUrls: ['./aparelhos.component.css']
})
export class AparelhosComponent {
  aparelhos = [
    {
      nome: 'Aparelho 1',
      imagem: 'aparelho1.jpg',
      descricao: 'Descrição do aparelho 1.'
    },
    {
      nome: 'Aparelho 2',
      imagem: 'aparelho2.jpg',
      descricao: 'Descrição do aparelho 2.'
    },
    {
      nome: 'Aparelho 3',
      imagem: 'aparelho3.jpg',
      descricao: 'Descrição do aparelho 3.'
    }
  ];
}
