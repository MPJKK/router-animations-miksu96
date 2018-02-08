import { Pipe, PipeTransform } from '@angular/core';
import {split} from 'ts-node';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args);
    let koko: string;
    let temp: any;
    // split value
    temp = value.split('.', 1);

    switch (args) {
      case 'small':
        koko = '160';
        break;
      case 'medium':
        koko = '320';
        break;
      case 'large':
        koko = '640';
        break;
      default:
    }
    console.log(temp[0] + '-tn' + koko + '.png');
    return temp[0] + '-tn' + koko + '.png';
  }

}
