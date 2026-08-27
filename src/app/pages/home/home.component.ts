import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  consulta = { nombre: '', telefono: '', email: '', municipio: '', necesidad: '', privacidad: false };

  ngOnInit(): void {
    // 1. Desactivamos la restauración automática de scroll del navegador para esta página
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Obtenemos el estado de la navegación actual
    const navigationState = history.state as { fromLegal?: boolean };

    // 2. Comprobamos si venimos específicamente de una página legal mediante el state
    if (navigationState && navigationState.fromLegal) {
      setTimeout(() => {
        const seccionContacto = document.getElementById('contacto');
        if (seccionContacto) {
          seccionContacto.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
      }, 100);
    } else {
      // 3. Si se recarga la página o se entra de forma limpia, forzamos arriba del todo
      window.scrollTo(0, 0);
      
      // Un segundo toque por si acaso el DOM tarda un milisegundo más en renderizar la altura total
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    }
  }

  // Función para enviar por WhatsApp (la que ya tenías)
  enviarAWhatsApp(event: Event): void {
    event.preventDefault();
    
    // Validación básica de campos requeridos si se desea
    if (!this.consulta.nombre || !this.consulta.necesidad || !this.consulta.privacidad) {
      alert('Por favor, completa los campos obligatorios y acepta la política de privacidad.');
      return;
    }

    const tuNumeroWhatsApp = "34617440109";

    let mensaje = `*Nueva consulta desde la Web* %0A%0A`;
    mensaje += `*Nombre:* ${this.consulta.nombre}%0A`;
    if (this.consulta.telefono) mensaje += `*Teléfono:* ${this.consulta.telefono}%0A`;
    if (this.consulta.email) mensaje += `*Correo:* ${this.consulta.email}%0A`;
    if (this.consulta.municipio) mensaje += `*Municipio:* ${this.consulta.municipio}%0A`;
    mensaje += `*Necesidad:* ${this.consulta.necesidad}`;

    window.open(`https://wa.me/${tuNumeroWhatsApp}?text=${mensaje}`, '_blank');
  }

  // Nueva función para abrir Gmail directamente con los datos rellenados
  enviarPorCorreo(event: Event): void {
    event.preventDefault();

    if (!this.consulta.nombre || !this.consulta.necesidad || !this.consulta.privacidad) {
      alert('Por favor, completa los campos obligatorios y acepta la política de privacidad.');
      return;
    }

    const correoDestino = "luisbarriosquintana@gmail.com";
    const asunto = `Nueva consulta web de ${this.consulta.nombre}`;
    
    let cuerpo = `Nueva consulta desde la página web:\n\n`;
    cuerpo += `Nombre: ${this.consulta.nombre}\n`;
    if (this.consulta.telefono) cuerpo += `Teléfono: ${this.consulta.telefono}\n`;
    if (this.consulta.email) cuerpo += `Correo: ${this.consulta.email}\n`;
    if (this.consulta.municipio) cuerpo += `Municipio del inmueble: ${this.consulta.municipio}\n`;
    cuerpo += `Necesidad: ${this.consulta.necesidad}\n`;

    // Construimos la URL oficial de redacción web de Gmail
    const urlGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(correoDestino)}&su=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    // Abre Gmail directamente en una nueva pestaña del navegador
    window.open(urlGmail, '_blank');
  }
}