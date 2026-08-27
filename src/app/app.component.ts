import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Importante para usar ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // <-- Añadido FormsModule aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'LuisQuintanillaArquitecto';

  // Objeto para almacenar los datos del formulario
  consulta = {
    nombre: '',
    telefono: '',
    email: '',
    municipio: '',
    necesidad: '',
    privacidad: false
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Arquitecto en el Aljarafe | Certificados Energéticos, Catastro y Licencias — Luis Barrios');
    this.metaService.updateTag({ name: 'description', content: 'Arquitecto colegiado en Sevilla. Certificados de eficiencia energética en 24-48h, catastro, cambio de uso, licencias y rehabilitación en el Aljarafe. Presupuesto sin compromiso.' });
    this.metaService.updateTag({ name: 'author', content: 'Luis Barrios Quintana' });
  }

  // Función que se ejecuta al enviar el formulario
  enviarAWhatsApp(event: Event): void {
    event.preventDefault();

    const tuNumeroWhatsApp = "34617440109";

    // Construir el mensaje formateado para WhatsApp
    let mensaje = `*Nueva consulta desde la Web* %0A%0A`;
    mensaje += `*Nombre:* ${this.consulta.nombre}%0A`;
    if (this.consulta.telefono) mensaje += `*Teléfono:* ${this.consulta.telefono}%0A`;
    if (this.consulta.email) mensaje += `*Correo:* ${this.consulta.email}%0A`;
    if (this.consulta.municipio) mensaje += `*Municipio:* ${this.consulta.municipio}%0A`;
    mensaje += `*Necesidad:* ${this.consulta.necesidad}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${tuNumeroWhatsApp}?text=${mensaje}`, '_blank');
  }
}