
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    constructor(private httpClient: Http, private router: Router) {}

    getOrders(pageIndex: number, pageSize: number) {
        return this.httpClient.get('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize).pipe(map(res => res.json()));
    }
}
