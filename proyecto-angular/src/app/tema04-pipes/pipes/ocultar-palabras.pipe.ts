import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, blackList: Array<string>, replaceChar: string = '*'): string {
    let resultado = value

    blackList.forEach((palabra: string) => {
      const regExp = new RegExp(palabra, 'gi')
      resultado = resultado.replace(regExp, replaceChar.repeat(palabra.length))
      // resultado = resultado.replaceAll(palabra, '****')
    })

    return resultado;
  }

}
