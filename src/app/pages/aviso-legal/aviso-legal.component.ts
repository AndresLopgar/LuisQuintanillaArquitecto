import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aviso-legal.component.html',
  styleUrl: './aviso-legal.component.scss'
})
export class AvisoLegalComponent implements OnInit {
  
  ngOnInit(): void {
    // Hace scroll arriba del todo al entrar en la página legal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
