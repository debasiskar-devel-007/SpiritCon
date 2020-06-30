import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
    public isModalShown4: boolean = false;

    constructor(public router: Router, private readonly meta: MetaService) {

        this.meta.setTitle('SpiritCon - Agenda');
        this.meta.setTag('og:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
        this.meta.setTag('twitter:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    
        this.meta.setTag('og:keyword', 'SpiritCon');
        this.meta.setTag('twitter:keyword', 'SpiritCon');
        this.meta.setTag('og:title', 'SpiritCon - Agenda');
        this.meta.setTag('twitter:title', 'SpiritCon - Agenda');
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
    onHidden() {
        this.isModalShown4 = false;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }
}
