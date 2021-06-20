import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EarthComponent } from './earth/earth.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiComponent } from './ui/ui.component';
import { MarsComponent } from './mars/mars.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';
import { MercuryComponent } from './mercury/mercury.component';
import { VenusComponent } from './venus/venus.component';
import { NeptuneComponent } from './neptune/neptune.component';
import { UranusComponent } from './uranus/uranus.component';
import { PanelpageComponent } from './panelpage/panelpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminnewscontrolComponent } from './adminnewscontrol/adminnewscontrol.component'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
import { Router } from '@angular/router'
import { PopupmodelModule } from './popupmodel/popupmodel.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EarthComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    MarsComponent,
    JupiterComponent,
    SaturnComponent,
    MercuryComponent,
    VenusComponent,
    NeptuneComponent,
    UranusComponent,
    PanelpageComponent,
    AdminnewscontrolComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    PopupmodelModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //MatCarouselModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
