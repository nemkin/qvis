import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.scss'],
})
export class FileSelectorComponent {

  constructor(private router: Router) {}

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (event.dataTransfer && target) {
      event.dataTransfer.dropEffect = 'copy';
      target.classList.add('dragover');
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    if (event.dataTransfer && target && event.dataTransfer.files.length > 0) {
      target.classList.remove('dragover');

      const file = event.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const content = reader.result;
        if (content !== null) {
          const jsonData = JSON.parse(content.toString());
          localStorage.setItem('quantumWalk', JSON.stringify(jsonData));
          this.router.navigate(['/display']);
        }
      };

      reader.readAsText(file);
    }
  }
}
