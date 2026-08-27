import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politica-privacidad.component.html',
  styleUrl: './politica-privacidad.component.scss'
})
export class PoliticaPrivacidadComponent implements OnInit {
  
  ngOnInit(): void {
    // Hace scroll arriba del todo al entrar en la página legal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
