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
  constructor() { }
}