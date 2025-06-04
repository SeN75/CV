import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '@/domain/customer';
import { CustomerService } from '@/service/customerservice';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressBar } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-cms-contents',
  imports: [TableModule, HttpClientModule, CommonModule, InputTextModule, TagModule,
    SelectModule, MultiSelectModule, ProgressBar, ButtonModule, IconFieldModule, InputIconModule],  templateUrl: './cms-contents.component.html',
  styleUrl: './cms-contents.component.scss'
})
export class CmsContentsComponent {

     

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;


  ngOnInit() {
     
  }

  clear(table: Table) {
      table.clear();
      this.searchValue = ''
  }

}
