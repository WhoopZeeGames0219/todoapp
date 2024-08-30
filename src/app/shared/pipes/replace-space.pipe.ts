import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'   //TODO <== Nombre del Pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  //TODO Nickname: (Hola soy juan) ==> hola-soy-juan
  transform(value: string, args?:string): string {
    value = value.split(' ').join(args).toLocaleLowerCase();
    return value;
  }

}
