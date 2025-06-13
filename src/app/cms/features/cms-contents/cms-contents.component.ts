import { Component } from '@angular/core';
import { Table } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cms-contents',
  standalone: true,
  imports: [
    TableModule,
    InputTextModule,
    TagModule,
    SelectModule,
    MultiSelectModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    SliderModule,
    FormsModule,
  ],
  templateUrl: './cms-contents.component.html',
  styleUrl: './cms-contents.component.scss',
})
export class CmsContentsComponent {
  loading: boolean = false;
  value = 0;
  activityValues: number[] = [0, 100];

  searchValue: string | undefined;
  customers = [
    {
      id: 1,
      title: 'title',
      description: 'description',
      activity: 'activity',
    },
  ];
  ngOnInit() {}

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
