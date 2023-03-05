import * as echarts from 'echarts';

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { HighlightService } from 'src/app/services/highlight.service';
import { QuantumWalk } from 'src/app/models/qwalk.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  quantumWalk: QuantumWalk;
  highlightedJson = '';
  heatmapOptions: any;

  constructor(private highlightService: HighlightService) {}

  ngOnInit(): void {
    const json = localStorage.getItem('quantumWalk');
    if (!json) return;

    this.quantumWalk = JSON.parse(json);

    this.initHighlight();
    this.initHeatmap();
  }

  initHighlight() {
    const smallJson = {
      N: this.quantumWalk.N,
      filename: this.quantumWalk.filename,
      subtitle: this.quantumWalk.subtitle,
      title: this.quantumWalk.title,
    };
    this.highlightedJson = this.highlightService.highlightJson(
      JSON.stringify(smallJson, null, 2)
    );
  }

  initHeatmap() {

    debugger;
    console.log("INIT HEATMAP COME ON");

    let data = [];

    const vertices = this.quantumWalk.N;
    const simulation = this.quantumWalk.simulations[0];
    const steps = simulation.counts.length;

    for(let i=0; i<steps; ++i) {
      for(let j=0; j<vertices; ++j) {
        data.push([j, i, simulation.counts[i][j]]);
      }
    }

    let xData: number[] = new Array(vertices).fill(null).map((_, i) => i + 1);
    let yData: number[] = new Array(steps).fill(null).map((_, i) => i + 1); ;

    this.heatmapOptions = {
      title: {
        text: 'Counts heatmap',
      },
      tooltip: {},
      grid: {
        right: 140,
        left: 40
      },
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'category',
        data: yData
      },
      visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 16,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
            '#a50026',
          ]
        }
      },
      series: [
        {
          name: 'Eloszlás',
          type: 'heatmap',
          data: data,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1
            }
          },
          progressive: 1000,
          animation: false
        }
      ]
    };

    debugger;
  }
}
