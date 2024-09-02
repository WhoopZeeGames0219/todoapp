import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges{
  @Input() idOrder: string | number = 0;
  @Input() items: Array<any> = [];
  @ViewChild('refId') elementRefId:ElementRef = new ElementRef('');

  constructor(private render2:Renderer2){}

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.idOrder = Date.now()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngAfterViewInit(): void {
    const elementTitle = this.elementRefId.nativeElement;
    this.render2.setStyle(elementTitle, 'color', 'red');
  }

  ngAfterViewChecked(): void {
      console.log('Hola')
  }

  sendData():void{

  }
}

