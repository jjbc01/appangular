import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  nombreConsejeria: string;
  curso = ' Curso 2020/2021';
  constructor() { 
    this.nombreConsejeria= 'Cosejería de Sanidad - ' + this.curso;
  }

  ngOnInit(): void {
  }

}
