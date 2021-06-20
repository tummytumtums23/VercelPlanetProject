import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UranusService } from './uranus.service';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html'
})
export class UranusComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: UranusService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }

}
