export class CardItemModel {
    img: string;
    title: string;
    text: string;
    link: string;

    constructor(img: string, title: string, text: string, link: string) {
        this.img = img;
        this.title = title;
        this.text = text;
        this.link = link
    }
}