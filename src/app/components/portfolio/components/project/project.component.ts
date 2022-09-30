import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project = [
    {name: 'Qlean Laundy', path: "qlean_app"},
    {name: 'EjarTect', path: "ejartech"},
    {name: 'Ahmall', path: "ahmall"},
    {name: 'Warshaplus', path: "warshaplus"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
