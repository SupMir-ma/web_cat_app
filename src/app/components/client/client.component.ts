import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";
import {Client} from "../../models/Client";
import {Observable} from "rxjs";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  //clients?:Client[];
  clients$: Observable<Client[]> | null = null ;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.clients$ = this.clientService.getAll();
  }

  getGmailClients(){}
  getHotmailClients(){}

  /*
  getAll() {
    this.clientService.getAll().subscribe((data)=>{
      this.clients = data ;
    });
  }

  getGmailClients(){
    this.clientService.getAll().subscribe((data)=>{
      this.clients = [];
      data.forEach(c=>{
        if(c.email.includes("gmail"))
          this.clients?.push(c);
      })
    });
  }

  getGmailHotmail(){
    this.clients = [];
    this.clientService.getAll().subscribe((data)=>{
      data.forEach(c=>{
        if(c.email.includes("hotmail"))
          this.clients?.push(c);
      })
    });
  }*/
}
