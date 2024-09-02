import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit, OnDestroy {

  constructor(){}

  groups:Array<any> = [];
  listObservables$:Array<Subscription> = [];

  /**results:Array<string> = [
    'Respuesta 1',
    'Respuesta 2',
    'Respuesta 3',
    'Respuesta 4'
  ]**/

    listUser:Array<{id:string, name:string}> = [
      {
        id:'1',
        name:'Leifer'
      },
      {
        id:'2',
        name:'Juan'
      },
      {
        id:'3',
        name:'Pedro'
      }
    ];

    //TODO: Soy el Init!
    ngOnInit(): void {

        const observer1$ = interval(1000).subscribe((res) => {
          console.log('Hola desde el intervalo');
        })

        this.listObservables$ = [observer1$];
      
        //TODO: Llamar a HTTP
        this.groups = [
          {
            label: 'Nuevas Tareas',
            color: 'tomato',
            list: [
              {
                order: 'Como instalar Angular',
                items: [
                  {
                    key: 'price',
                    value: 152
                  },
                  {
                    key: 'time',
                    value: 152
                  },
                  {
                    key: 'author',
                    value: {
                      name: 'Juan Carlos Martinez',
                      avatar: 'https://avatars.githubusercontent.com/u/172448010?v=4'
                    }
                  },
                ]
              }
            ]
          },
          {
            label: 'Trabajando',
            color: 'yellow',
            list: [
              {
                order: 'Como instalar Node',
                items: [
                  {
                    key: 'price',
                    value: 152
                  },
                  {
                    key: 'time',
                    value: 152
                  },
                  {
                    key: 'author',
                    value: {
                      name: 'Juan Carlos Martinez',
                      avatar: 'https://avatars.githubusercontent.com/u/172448010?v=4'
                    }
                  },
                ]
              }
            ]
          },
          {
            label: 'Realizadas',
            color: 'tomato',
            list: [
              {
                order: 'Como instalar ReactJS',
                items: [
                  {
                    key: 'price',
                    value: 152
                  },
                  {
                    key: 'time',
                    value: 152
                  },
                  {
                    key: 'author',
                    value: {
                      name: 'Juan Carlos Martinez',
                      avatar: 'https://avatars.githubusercontent.com/u/172448010?v=4'
                    }
                  },
                ]
              },
              {
                order: 'Instalar Dependencias',
                items: [
                  {
                    key: 'price',
                    value: 152
                  },
                  {
                    key: 'time',
                    value: 152
                  },
                  {
                    key: 'author',
                    value: {
                      name: 'Juan Carlos Martinez',
                      avatar: 'https://avatars.githubusercontent.com/u/172448010?v=4'
                    }
                  },
                ]
              }
            ]
          },
        ]
    }

    ngOnDestroy(): void {
      this.listObservables$.forEach((subscriptions) => subscriptions.unsubscribe())
      console.log('Me destrui');
    }

}
