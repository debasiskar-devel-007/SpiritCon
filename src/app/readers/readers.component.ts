import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {DomSanitizer} from '@angular/platform-browser';
import {Http} from '@angular/http';
import {NavigationEnd, Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css'],
  providers: [Commonservices],
})
export class ReadersComponent implements OnInit {
  public boothlist;
  public healerlist;
  public serverurl;
  public isModalShown3: boolean = false;
  public isModalShown: boolean = false;
  public isModalShown4: boolean = false;
  public isModalShown5: boolean = false;
  public isModalShown6: boolean = false;
  public isModalShown10: boolean = false;
  public contentdetails;

  constructor(private _http: Http, private _commonservices: Commonservices, public _sanitizer: DomSanitizer, private router: Router, private readonly meta: MetaService) {

    this.meta.setTitle('SpiritCon - Readers');
    this.meta.setTag('og:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    this.meta.setTag('twitter:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    
    this.meta.setTag('og:keyword', 'SpiritCon');
    this.meta.setTag('twitter:keyword', 'SpiritCon');
    this.meta.setTag('og:title', 'SpiritCon - Readers');
    this.meta.setTag('twitter:title', 'SpiritCon - Readers');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/meta/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/meta/logo-twitter.jpg');


    this.serverurl = _commonservices.url;
    this.getBoothList();
    this.getHealerList();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnInit() {
  }
  getBoothList() {
    let link = this.serverurl + 'vendorlist1';
    let data = {
      // selected_year: '2019'
      year_2020:1
    }
    this._http.post(link,data)
        .subscribe(res => {
          let result = res.json();
          this.boothlist = result.res;
          console.log(this.boothlist);
          console.log('==========');
        }, error => {
          console.log('Oooops!');
        });
  }
  getHealerList() {
    let link = this.serverurl + 'healerlist1';
    let data = {
      // selected_year: '2019'
      year_2020:1
    }
    this._http.post(link,data)
        .subscribe(res => {
          let result = res.json();
          this.healerlist = result.res;
          console.log('healerlist--------');
          console.log(this.healerlist);
        }, error => {
          console.log('Oooops!');
        });
  }

  getBoothList_1() {
    let link = this.serverurl + 'vendorlist';
    this._http.get(link)
        .subscribe(res => {
          let result = res.json();
          this.boothlist = result.res;
          console.log('boothlist--------');
          console.log(this.boothlist);
        }, error => {
          console.log('Oooops!');
        });
  }

  getHealerList_1() {
    let link = this.serverurl + 'healerlist';
    this._http.get(link)
        .subscribe(res => {
          let result = res.json();
          this.healerlist = result.res;
          console.log('healerlist--------');
          console.log(this.healerlist);
        }, error => {
          console.log('Oooops!');
        });
  }

  callbuyticket() {
    this.isModalShown3 = true;
  }
  onHidden() {
    this.isModalShown3 = false;
    this.isModalShown = false;
    this.isModalShown4 = false;
    this.isModalShown4 = false;
    this.isModalShown5 = false;
    this.isModalShown6 = false;
    this.isModalShown10 = false;
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

  callmodalforagendamoalnew() {
    this.isModalShown10 = true;
  }
  checkhttp(website) {
    var pattern = /^((http|https|ftp):\/\/) /;
    if (!pattern.test(website)) {
      return 'http://' + website;
    }
    else{
      return website;
    }
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
  showcontentsforreaders(itemid) {
    console.log(itemid);
    this.contentdetails = '';
    if (this.contentdetails == '') {
      this.contentdetails =  itemid;
    }
    console.log('this.contentdetails');
    console.log(this.contentdetails);
    this.isModalShown5 = true;
  }

  /*callfordescription(description) {
   var val = this._sanitizer.bypassSecurityTrustHtml(description);
   console.log(val);
   }*/
}
