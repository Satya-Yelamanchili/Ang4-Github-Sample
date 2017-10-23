import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceText'
})
export class ReplaceTextPipe implements PipeTransform {
  replacedText: string;
  startNumber: number;
  endNumber: number;

  transform(value: string): any {
   this.startNumber = value.lastIndexOf('{');
   this.startNumber = value.lastIndexOf('}');
   this.replacedText = value.replace(value.slice(this.startNumber, this.endNumber), '');
    return this.replacedText;
  }

}
