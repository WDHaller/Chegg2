import { Component, Input } from "@angular/core";

@Component ({
    selector: 'chegg-cardtype1',
    templateUrl: 'cardtype1.component.html',
    styleUrls: ['cardtype1.component.css']
})
export class CardType1Component {
    @Input() img!: string;
    @Input() title: string;
    @Input() text: string;
    @Input() link: string;

    constructor() {
        this.title = "MISSING";
        this.text = "MISSING";
        this.link = "MISSING LINK";
    }

}