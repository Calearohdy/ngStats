
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class OrdersService {

    constructor(private httpClient: HttpClient, private router: Router) {}

    getOrders(pageIndex: number, pageSize: number) {
        return this.httpClient.get<any>('http://localhost:5000/api/order/' + pageIndex + '/' + pageSize)
            .pipe(map(response => {
                const orders = JSON.parse(response);
                console.log(response);
                return orders;
            }));
    }
}
