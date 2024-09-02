import { Component } from '@angular/core';

@Component({
  selector: 'app-header', //TODO: El tag que usas para llamar a este componente!
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menu: Array<{name: string, router: any}> = [
    {
      name: 'Overview',
      router: []
    },
    {
      name: 'Requests',
      router: []
    },
    {
      name: 'Shipments',
      router: []
    },
    {
      name: 'Inovices',
      router: []
    },
    {
      name: 'Employees',
      router: []
    },
    {
      name: 'Settings',
      router: []
    }


  ]
}
