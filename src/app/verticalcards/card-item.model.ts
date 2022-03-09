export class CardItemModel {
    img: string;
    title: string;
    text: string;
    link: string;

    constructor(img: string, title: string, text: string, link: string) {
        this.img = img;
        this.title = title;
        this.text = title;
        this.link = link
    }
}