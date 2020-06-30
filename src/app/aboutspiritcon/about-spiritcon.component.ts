import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {DomSanitizer} from '@angular/platform-browser';
import {Http} from '@angular/http';
import {Router, NavigationEnd} from '@angular/router';
import { MetaService } from '@ngx-meta/core';
declare var $: any;

@Component({
  selector: 'app-about-spiritcon',
  templateUrl: './about-spiritcon.component.html',
  styleUrls: ['./about-spiritcon.component.css'],
    providers: [Commonservices],
})
export class AboutSpiritconComponent implements OnInit {
    public isModalShown3: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown10: boolean = false;
    public isModalShowncom1: boolean = false;
    public isModalShowncom2: boolean = false;

    constructor(private router: Router, private readonly meta: MetaService) {

        this.meta.setTitle('SpiritCon - About us');
        this.meta.setTag('og:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
        this.meta.setTag('twitter:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    
        this.meta.setTag('og:keyword', 'SpiritCon');
        this.meta.setTag('twitter:keyword', 'SpiritCon');
        this.meta.setTag('og:title', 'SpiritCon - About us');
        this.meta.setTag('twitter:title', 'SpiritCon - About us');
        this.meta.setTag('og:type', 'website');
        this.meta.setTag('og:image', '../../assets/images/meta/logo-fb.jpg');
        this.meta.setTag('twitter:image', '../../assets/images/meta/logo-twitter.jpg');


        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    ngOnInit() {
    }
    callbuyticket() {
        this.isModalShown3 = true;
    }
    onHidden() {
        this.isModalShown3 = false;
        this.isModalShown = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown10 = false;
        this.isModalShowncom1 = false;
        this.isModalShowncom2 = false;
    }
    callmodalforagenda() {
        this.isModalShown = true;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }

    callmodalforagendamoal() {
        this.isModalShown5 = true;
    }

    callmodalforagendamoalnew() {
        this.isModalShown10 = true;
    }

    callmodalforagendamoalcom1() {
        this.isModalShowncom1 = true;
    }
    callmodalforagendamoalcom2() {
        this.isModalShowncom2 = true;
    }

}
