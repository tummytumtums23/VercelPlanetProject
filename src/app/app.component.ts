import { Component } from '@angular/core';

@Component({
	styleUrls:['./app.component.css'],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

	public displayEarth: string;
	public displayMercury: string;
	public displayVenus: string;
	public displayMars: string;
	public displayJupiter: string;
	public displaySaturn: string;
	public displayNeptune: string;
  public mercuryFlag:boolean = false;
  public venusFlag:boolean = false;
  public earthFlag:boolean = true;
  public marsFlag:boolean = false;
  public jupiterFlag:boolean = false;
  public saturnFlag:boolean = false;
  public uranusFlag:boolean = false;
  public neptuneFlag:boolean = false;

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
   public venusClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = true;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }
     public earthClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = true;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }
     public marsClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = true;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }
     public jupiterClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = true;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }
     public saturnClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = true;
  this.uranusFlag = false;
  this.neptuneFlag = false;

  }
      public uranusClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = true;
  this.neptuneFlag = false;

  }
     public neptuneClicked(): void {
    this.mercuryFlag = false;
    this.venusFlag = false;
  this.earthFlag = false;
  this.marsFlag = false;
  this.jupiterFlag = false;
  this.saturnFlag = false;
  this.uranusFlag = false;
  this.neptuneFlag = true;

  }
	/* I want to create an if statement where it checks if the planet in the navbar is
	 before or after the planet currently being displayed. If the planet in the navbar is before, we 
	 we apply the btn-arrow-left class. If it is after, we apply the */ 

}
