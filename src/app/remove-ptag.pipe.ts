import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'removePTag'
})
export class RemovePTagPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    // Remove <p> tags and return the sanitized HTML
    const sanitizedValue = value.replace(/<p>/g, '').replace(/<\/p>/g, '');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedValue);
  }
}
