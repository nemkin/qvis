import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { HighlightService } from 'src/app/services/highlight.service';
import { QuantumWalk } from 'src/app/models/qwalk.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {
  highlightedJson = '';

  constructor(private highlightService: HighlightService) { }

  ngOnInit(): void {
    const json = localStorage.getItem('quantumWalk');
    if (json) {
      const quantumWalk: QuantumWalk = JSON.parse(json);
      const smallJson = {
        N: quantumWalk.N,
        filename: quantumWalk.filename,
        subtitle: quantumWalk.subtitle,
        title: quantumWalk.title
      };
      this.highlightedJson = this.highlightService.highlightJson(JSON.stringify(smallJson, null, 2));
    }
  }
}
