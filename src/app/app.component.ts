import { Component, OnInit} from '@angular/core';
import *as AOS from 'aos';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfoliotwo';
  col:string="green"
  cn:string="2019-Present"
  gn:string="2015-2017"
  fl:string="2017-2018"
  br:string="2018-2019"

  ngOnInit()
  {
    this.color();
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 10, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 20,
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
     
    
    });
    

   
  }

 color() {
  let name = "";
  if(name == "piyush"){
    this.col = "Red"

  }else{}
    
  }

}
