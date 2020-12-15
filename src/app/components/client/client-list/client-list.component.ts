import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

import { take } from 'rxjs/operators';

import Swal from 'sweetalert2';

import { Client } from './../client.model';
import { ClientListService } from './client-list.service';
import { TranslateTable } from '../../shared/helpers/tables';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.spinner = true;
    this.translateTable = new TranslateTable();
    this.dataSource = new MatTableDataSource<Client>();
    this.loadClientList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.alertCaseUpdatedCompleted();
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
    const clientSelected = this.dataSource.data.find(x => x.id === id);
    this.router.navigate([
      'client/register',
      clientSelected!.id,
      clientSelected!.name,
      clientSelected!.age,
      clientSelected!.city
    ]);
  }

  private alertCaseUpdatedCompleted() {
    if (this.activatedRoute.snapshot.params['message?']) {
      Swal.fire({
        'html': this.activatedRoute.snapshot.params['message?'],
        'icon': 'success',
        'target': 'body',
        'position': 'top-end',
        'timer': 2500,
        'timerProgressBar': true,
        'showConfirmButton': false,
        'showCloseButton': true
      });

    }
  }
}
