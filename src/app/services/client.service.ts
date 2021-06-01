import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Client} from "../models/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Client[]>{
    return this.http.get<Client[]>(environment.server_path+"/clients");
  }

}
