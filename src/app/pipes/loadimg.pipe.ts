import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Pipe({
  name: 'loadimg'
})
export class LoadimgPipe implements PipeTransform {

  // Recibe:  url de img  ,  type/posicion , tamaño 
  // para mostrar la imagen adecuada segun sea el caso y no afectar el diseño
  transform(images: string, type: string,  size: number ): string {

    const url_base: string = 'https://image.tmdb.org/t/p/';
  
      if( !images ){  // Cuando no hay url de img se muestra una por defecto
        return 'assets/img/noimage.png'
      }else{          // Cuando si hay url de la img
        return `${ url_base }${ type }${ size }${ images }`
      }
  
  }
  
}