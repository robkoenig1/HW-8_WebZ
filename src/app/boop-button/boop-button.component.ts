import { WebzComponent, BindValue, Click } from "@boots-edu/webz";
import html from "./boop-button.component.html";
import css from "./boop-button.component.css";

export class BoopButtonComponent extends WebzComponent {
    @BindValue("boops")
    private boops: string = "";

    @Click("booper")
    private boop() {
        this.boops += "🐱";
    }

    constructor() {
        super(html, css);
    }
}
