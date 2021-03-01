import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-first-app';
}

export class NamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    
  }
}

