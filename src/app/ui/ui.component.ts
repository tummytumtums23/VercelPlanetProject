import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { PanelpageComponent } from '../panelpage/panelpage.component'

@Component({
  styleUrls:['./ui.component.css'],
  selector: 'app-ui',
  templateUrl: './ui.component.html',
 
})
export class UiComponent implements OnInit {
	value: string;
  public constructor(private router : Router) { }

  public ngOnInit(): void {

  }
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

  public planetname(planet){
    console.log(planet.srcElement.attributes.id);
    var idAttr = planet.srcElement.attributes.id;
    this.value = idAttr.nodeValue;
    var redirect = "panelpage/" + this.value;
    console.log(redirect);
    this.router.navigate([redirect]);
    
  }
  get PlanetValue(){
  	return this.value
  }

}


