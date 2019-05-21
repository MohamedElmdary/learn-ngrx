import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cutText"
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length > length) {
      value = value.slice(0, length) + "...";
    }
    return value;
  }
}
