import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {Http} from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-presenters',
  templateUrl: './presenters.component.html',
  styleUrls: ['./presenters.component.css'],
    providers: [Commonservices]
})
export class PresentersComponent implements OnInit {
    public serverurl;
    public presenterlist;
    public contentdetails;
    public isModalShown3: boolean = false;
    public isModalShown: boolean = false;
    public isModalShown4: boolean = false;
    public isModalShown5: boolean = false;
    public isModalShown6: boolean = false;

  constructor(private _http: Http, private _commonservices: Commonservices, public _sanitizer: DomSanitizer, private router: Router, private readonly meta: MetaService) {

    this.meta.setTitle('SpiritCon - Presenters');
    this.meta.setTag('og:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    this.meta.setTag('twitter:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    
    this.meta.setTag('og:keyword', 'SpiritCon');
    this.meta.setTag('twitter:keyword', 'SpiritCon');
    this.meta.setTag('og:title', 'SpiritCon - Presenters');
    this.meta.setTag('twitter:title', 'SpiritCon - Presenters');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/meta/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/meta/logo-twitter.jpg');

      this.serverurl = _commonservices.url;
      this.getspeakerlist(); // speaker and presenter both are same
      this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
  }
    getspeakerlist() {
        let link = this.serverurl + 'speakerlist1';
        let data = {
            // selected_year: '2019'
            year_2020:1
        }
        this._http.post(link,data)
            .subscribe(res => {
                let result = res.json();
                this.presenterlist = result.res;
                console.log(this.presenterlist);
                console.log('==========');
            }, error => {
                console.log('Oooops!');
            });
    }

    callit(imagename) {
        if (imagename == null || imagename == '') {
            return '';
        }
        if (imagename == '[]') {
            // alert(1);
            return '../../assets/images/home/logo.png';
        }
        else {
            let imagenm = JSON.parse(imagename);
            return '../../assets/images/uploads/' + imagenm[0];
        }
    }

    onHidden() {
        this.isModalShown3 = false;
        this.isModalShown = false;
        this.isModalShown4 = false;
        this.isModalShown5 = false;
        this.isModalShown6 = false;
    }
    callbuyticket() {
        this.isModalShown3 = true;
    }
    callmodalforagenda() {
        this.isModalShown = true;
    }
    callmodalforbuybooth() {
        this.isModalShown4 = true;
    }
    callmodalforagendamoal() {
        this.isModalShown6 = true;
    }

    showcontents(itemid) {
        console.log(itemid);
        this.contentdetails = '';
        if (this.contentdetails == '') {
          this.contentdetails =  itemid;
        }
        console.log('this.contentdetails');
        console.log(this.contentdetails);
        this.isModalShown5 = true;
    }
}
