import { Component, HostListener, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { RepoState } from '../nrgx-store/repo.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrl: './grid-data.component.css'
})
export class GridDataComponent implements OnInit {

  public rowData: Array<any>;
  public colDef: Array<ColDef>;
  public defaultColDef: ColDef;
  public themeClass = "ag-theme-quartz-dark";
  public searchString: string;

  private originalData: Array<any>;

  constructor(private store: Store<RepoState>) {
    this.originalData = [];
    this.searchString = '';
    this.defaultColDef = { flex: 1 };
    this.rowData = [];
    this.colDef = [];
    this.store.select('repos').subscribe(repos => {
      if (repos.length > 0) {
        this.populateRowData(repos);
      }
    })
  }

  // private querySubscription: Subscription;

  ngOnInit() {
    this.prepareColumnDefs();
  }

  @HostListener('document:keydown.enter')
  filterRowData() {
    this.rowData = this.searchString ? this.rowData.filter(item => { return item.name.includes(this.searchString) }) : this.originalData;
  }

  private prepareColumnDefs() {
    this.colDef = [
      { field: "name", filter: true, sortable: true },
      { field: "description", sortable: true },
      {
        field: "url", sortable: true,
        cellRenderer: (data: any) => {
          return `<a href="${data.value}" target="_blank" rel="noopener">${data.value}</a>`
        }
      },
      {
        field: "createdAt", sortable: true,
        cellRenderer: (data: any) => {
          return data.value ? (new Date(data.value)).toLocaleDateString() : '';
        }
      }
    ]
  }

  private populateRowData(data: any) {
    data.forEach((item: any) => {
      this.rowData.push(
        {
          name: item.name,
          description: item.description,
          url: item.url,
          createdAt: item.createdAt
        }
      )
    });
    this.originalData = [...this.rowData];
  }
}
