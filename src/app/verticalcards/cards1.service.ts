import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardItemModel } from "./card-item.model";

@Injectable(
    {providedIn: 'root'}
)
export class Cards1Service {
    private baseURL:string = "https://chegg-app-de05e-default-rtdb.firebaseio.com/";
    private cards1EndPoint:string = "cards1.json"

    constructor(private http:HttpClient) {

    }

    getCards() {
        return this.http.get<CardItemModel []>(this.baseURL + this.cards1EndPoint);
    }
}