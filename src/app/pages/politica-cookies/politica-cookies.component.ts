import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politica-cookies',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politica-cookies.component.html',
  styleUrl: './politica-cookies.component.scss'
})
export class PoliticaCookiesComponent implements OnInit {
  
  ngOnInit(): void {
    // Hace scroll arriba del todo al entrar en la página legal
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
