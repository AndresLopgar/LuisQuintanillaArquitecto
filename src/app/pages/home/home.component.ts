import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink],
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

  enviarAWhatsApp(event: Event): void {
    event.preventDefault();
    const tuNumeroWhatsApp = "34617440109";
    let mensaje = `*Nueva consulta desde la Web* %0A%0A`;
    mensaje += `*Nombre:* ${this.consulta.nombre}%0A`;
    if (this.consulta.telefono) mensaje += `*Teléfono:* ${this.consulta.telefono}%0A`;
    if (this.consulta.email) mensaje += `*Correo:* ${this.consulta.email}%0A`;
    if (this.consulta.municipio) mensaje += `*Municipio:* ${this.consulta.municipio}%0A`;
    mensaje += `*Necesidad:* ${this.consulta.necesidad}`;
    window.open(`https://wa.me/${tuNumeroWhatsApp}?text=${mensaje}`, '_blank');
  }
}