import { Pipe, PipeTransform } from '@angular/core';
import { Size } from '../typings/dog.typing';

@Pipe({name: 'appDogSizeText'})
export class DogSizeTextPipe implements PipeTransform {
    labelObject = {
        [Size.NULL]: 'Unknown',
        [Size.XS]: 'Extra Small',
        [Size.S]: 'Small',
        [Size.M]: 'Medium',
        [Size.L]: 'Large',
        [Size.XL]: 'Extra Large'
    }

    transform(sizeId: Size): string {
        return this.labelObject[sizeId];
    }
}