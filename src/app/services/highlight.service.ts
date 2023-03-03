import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {
  highlightJson(value: string): string {
    const result = hljs.highlightAuto(value).value;
    return result;
  }
}
