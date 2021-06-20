import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../planet.service';
import * as moment from 'moment';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-adminnewscontrol',
  templateUrl: './adminnewscontrol.component.html',
  styleUrls: ['./adminnewscontrol.component.css']
})
export class AdminnewscontrolComponent implements OnInit {
crossbutton = faTimesCircle;
 planetNewsArray = [];
x =true;
totalarray =[];
counter = -1;
keyarray = [];
largeArray = [];
appear = false;
arrayupdated: boolean ;
keywords: string = '';
  constructor(public planetService: PlanetService) { }

  ngOnInit(): void {
  	this.fetchPlanetDetail();

  	 }
public wordadder = () => {
	this.planetService.fetchPlanetKeywords().subscribe((data: any[]) => {
		for(var x = 1; x<data.length; x++ ){

 		this.keyarray.push(data[x].keywords);
 	/*	console.log(this.keyarray);*/
    	
}
    	
    	})
} 

public fetchPlanetDetail=()=> {
  
 
	this.planetService.fetchPlanetData("planet jupiter ").subscribe(res => {
			this.planetService.fetchPlanetKeywords().subscribe((data: any[]) => {
				
		/*this.wordadder();*/
    
    for(var i = 0; i<res['articles'].length;  ){
    	this.arrayupdated = false;
    /*	console.log("before entering");
    	console.log(i);*/
   	/*console.log("wordchecker")
         	console.log(this.wordchecker());*/
         
         		
         		/*console.log("after entering");
         		console.log(i);*/
         		for(var x = 1; x<data.length; x++ ){
         		/*	console.info(data[x].keywords);*/
         		
         		/*	console.log("does " + res['articles'][i].title.toLowerCase() + " include " + data[x].keywords);
         			console.log(res['articles'][i].title.toLowerCase().includes(data[x].keywords.toString()))*/
		  if(res['articles'][i].title.toLowerCase().includes(data[x].keywords.toLowerCase().toString())) {
		  	
		  	res['articles'].splice(i,1);
		  
		  	/*console.log(i);*/
		  	this.arrayupdated = true;
		  	break;

		  }
		 /* console.log(res['articles']);*/
		}
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
    /*    console.info(newDate); */


      
      this.planetNewsArray.push({title: input , url: input2 , provider: input3, date: newDate});

       this.planetNewsArray.sort(compare); 
       }
         
var goallength = this.planetNewsArray.length;
    /* console.log(this.planetNewsArray.length);*/
 while(this.x){
     
         var newarray = [];
       for(var i = 0; i<4; i++){
         
         
         ++this.counter;
         /*console.log(this.counter);*/
           if(this.counter==goallength){
         break;

       }
       else{
       newarray.push(this.planetNewsArray[i])
     }
       
       }
       this.largeArray.push(newarray);

  /*     console.log(this.largeArray);*/
     if(this.planetNewsArray.length<4){
       this.planetNewsArray.splice(0, this.planetNewsArray.length-1)
       this.x=false;
       
     }
     else{
       this.planetNewsArray.splice(0,4);
     }
     }
      /* } */
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

})	
  
	})


}
   keyworddetermine() {
  alert("What message");
  this.appear = true;
/*  console.log(this.keywords);*/
}
   wordsubmit() {
  this.appear = false;
 /* console.info(this.keywords);*/
  this.planetService.sendPlanetKeywords(this.keywords).subscribe(res => console.log(res));
  this.fetchPlanetDetail();
}
}
