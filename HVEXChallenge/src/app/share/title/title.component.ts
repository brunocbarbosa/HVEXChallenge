import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent{

    @Input() titlePage: string = '';
    @Input() btnNew: string = '';
    @Input() btnUm: string = '';
    @Input() btnDois: string = '';
    @Input() urlPage: string = '';
    @Input() urlPageUm: string = '';
    @Input() urlPageDois: string = '';
}
