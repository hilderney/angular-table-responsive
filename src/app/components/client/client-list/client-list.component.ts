import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { Client } from './../client.model';
import { ClientListService } from './client-list.service';
import { TranslateTable } from './../../shared/helpers/translate-table';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements AfterViewInit {

  spinner: boolean;
  displayedColumns: string[] = ['id', 'name', 'age', 'city', 'action'];
  dataSource = new MatTableDataSource<Client>();
  private translateTable: TranslateTable;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private clientlistService: ClientListService,
    private router: Router
  ) {
    this.spinner = true;
    this.translateTable = new TranslateTable();
    this.dataSource = new MatTableDataSource<Client>();
    this.loadClientList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.paginator = this.translateTable.translate(this.paginator);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private loadClientList() : any {
    this.spinner = true;
    this.clientlistService
      .getAll()
      .pipe(take(1))
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dataSource = new MatTableDataSource(data);
        },
        (error: any) => {
          debugger;
          console.log(error);
        },
        () => {
          this.spinner = false;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
      );
  }

  editClient(id: number){
    const clientSelected = this.dataSource.data.find(x => x.id = id);
    // send Client to edit page

    // Swal.fire({
    //      title: 'Auto close alert!',
    //      text: 'I will close in 2 seconds.',
    //      timer: 2000
    // });
  }
}
