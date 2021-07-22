import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../planet.service';
import * as moment from 'moment';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';
//import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { PopupmodelService } from '../popupmodel';
import { EarthComponent } from '../earth/earth.component';
import { UiComponent } from '../ui/ui.component';
import { ActivatedRoute } from '@angular/router' 

@Component({
  selector: 'app-panelpage',
  templateUrl: './panelpage.component.html',
  styleUrls: ['./panelpage.component.css']
})
export class PanelpageComponent implements OnInit {
  planetname: string;
   bodyText: string;
  crossbutton = faTimesCircle;
planetNewsArray = [];
x =true;
totalarray =[];
counter = -1;
largeArray = [];
arrayupdated: boolean ;
 newarray = [];
 otherarray = [];
 nummberInRow: number = 2;
 shortarray;
keywordsarray = ["horoscope", "Wann ist", "aquarius", "faster-than-light", 
"horoscope", "Sternzeichen-Datum", "warp barrier", "zodiac sign", 
"saggitarius", "capricorn", "leo", "cancer", "aries", "taurus", "gemini", "virgo", 
"libra", "scorpio", "pisces", "apple tv +", "emmy", "nano-bots", "julia", 
"weeks of life you have left", "ctv", "porn", "gemstones", "cop", "niebo", "mity", 
"scenekit", "covid", "setting gold and platinum", "so ordered"]

  constructor(public planetService: PlanetService, private modalService: PopupmodelService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.planetname = this.activatedRoute.snapshot.params.planetname;
    console.log(this.planetname);
  	this.fetchPlanetDetail();
    this.bodyText = 'Are you sure you want to proceed to ';
    
    
  	 }
public fetchPlanetDetail=()=> {
  
  var input  = "planet " + this.planetname;
  console.log(input);
	this.planetService.fetchPlanetData(input).subscribe(res => {
    //  this.planetService.fetchPlanetKeywords().subscribe((data: any[]) => {
         // this.slides = [{'image': 'https://static.toiimg.com/photo/72975551.cms'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}]
    /*this.wordcheckerdadder();*/
    
    for(var i = 0; i<res['articles'].length;  ){
      this.arrayupdated = false;
    /*  console.log("before entering");
      console.log(i);*/
     /*console.log("wordchecker")
           console.log(this.wordchecker());*/
         
             
             /*console.log("after entering");
             console.log(i);*/
            // for(var x = 1; x<data.length; x++ ){
             /*  console.info(data[x].keywords);*/
             
             /*  console.log("does " + res['articles'][i].title.toLowerCase() + " include " + data[x].keywords);
               console.log(res['articles'][i].title.toLowerCase().includes(data[x].keywords.toString()))*/
      // if(res['articles'][i].title.toLowerCase().includes(data[x].keywords.toLowerCase().toString())) {
        
      //   res['articles'].splice(i,1);
      
      //   /*console.log(i);*/
      //   this.arrayupdated = true;
      //   break;

      // }
      for(var x =0; x<this.keywordsarray.length; x++)
      if(res['articles'][i].title.toLowerCase().includes(this.keywordsarray[x])) {
        
        res['articles'].splice(i,1);
      
        /*console.log(i);*/
        this.arrayupdated = true;
        break;

      }
     /* console.log(res['articles']);*/
   // }
     if(this.arrayupdated == false) {
        i++;      
         
    }
     }
     console.log(res['articles']);

         for(var i = 0; i<res['articles'].length; i++ ){
           var input = res['articles'][i].title;
        var input2 = res['articles'][i].url;
        var input3 = res['articles'][i].source.name;
        var input4 = res['articles'][i].publishedAt;
        var newDate = moment(input4).format('DD/MM/YYYY');
      
      this.planetNewsArray.push({title: input , url: input2 , provider: input3, date: newDate});

       this.planetNewsArray.sort(compare); 
       
     
   }   
   
 
var goallength = this.planetNewsArray.length;
     console.log(this.planetNewsArray.length);
 
    

      
    /*   for(var i = 0; i<4; i++){
         
         
         ++this.counter;
         console.log(this.counter);
           if(this.counter==goallength){
         break;

       }
       else{
       newarray.push(this.planetNewsArray[i])
     }
       
       }
       this.largeArray.push(newarray);

       console.log(this.largeArray);
     if(this.planetNewsArray.length<4){
       this.planetNewsArray.splice(0, this.planetNewsArray.length-1)
       this.x=false;
       
     }
     else{
       this.planetNewsArray.splice(0,4);
     }
     }*/
    
      this.shortarray = this.planetNewsArray.reduce((acc, value, index) => {
      if (index % this.nummberInRow == 0 && index !== 0) acc.push([])
      acc[acc.length - 1].push(value)
      return acc
    }, [[]]);

   
 
function planetvalue(planetname){
  this.planetname = planetname;
  return this.planetname
}

        
function compare(a, b) {
  // Use toUpperCase() to ignore character casing

  const dateA = a.datePublished;
  const dateB = b.datePublished;

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
}


function message(){
   alert(" do you want to proceed ")
 }


   //})
    })


}
// link(planetNewsArray){
//   console.log(planetNewsArray);
//   }
  openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }


}