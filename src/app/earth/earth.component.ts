import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EarthService } from './earth.service';

@Component({
	styleUrls: ['./earth.component.css'],
  selector: 'app-earth',
  templateUrl: './earth.component.html'
})
export class EarthComponent implements OnInit {
  public mercuryFlag:boolean = false;
  public venusFlag:boolean = false;
  public earthFlag:boolean = true;
  public marsFlag:boolean = false;
  public jupiterFlag:boolean = false;
  public saturnFlag:boolean = false;
  public uranusFlag:boolean = false;
  public neptuneFlag:boolean = false;
  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  public constructor(private engServ: EarthService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
    this.earthFlag=true;
  }
  public mercuryClicked(): void {
    this.mercuryFlag = true;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }

}
