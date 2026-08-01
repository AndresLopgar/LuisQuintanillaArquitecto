import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'LuisQuintanillaArquitecto';

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Configuración formal de título y meta para SEO técnico
    this.titleService.setTitle('Arquitecto en el Aljarafe | Certificados Energéticos, Catastro y Licencias — Luis Barrios');
    
    this.metaService.updateTag({ name: 'description', content: 'Arquitecto colegiado en Sevilla. Certificados de eficiencia energética en 24-48h, catastro, cambio de uso, licencias y rehabilitación en el Aljarafe. Presupuesto sin compromiso.' });
    this.metaService.updateTag({ name: 'author', content: 'Luis Barrios Quintana' });
  }
}