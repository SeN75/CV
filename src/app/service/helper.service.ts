import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  picPreview = {
    pics: [{name: '', path: ''}],
    index: 0,
    title: ""
  }

  showGallery = false;
  showContact = false;
  showPor = false;
  showAbout = false;

  windows = [
    {
      name: "about-me",
      isOpen: false,
      'z-index': 10
    },
    {
      name: "portoflio",
      isOpen: false,
      'z-index': 20
    },
    {
      name: "contact",
      isOpen: false,
      'z-index': 30
    },
    {
      name: "gallery",
      isOpen: false,
      'z-index': 30
    },

  ];
  constructor() { }

  windoClick(index: number) {

    let z = this.windows[index]['z-index'];

    let i = index;

    for(let j = 0; j < this.windows.length; j++) {
      console.log('-->',this.windows[j]);
      if(this.windows[i]['z-index'] < this.windows[j]['z-index'])
        if(this.windows[j].isOpen)
          i = j;
    }


    this.windows[index]['z-index'] = this.windows[i]['z-index'];
    this.windows[i]['z-index'] = z;


  }
}
