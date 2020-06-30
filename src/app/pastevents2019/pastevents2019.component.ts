import { Component, OnInit } from '@angular/core';
import {Commonservices} from '../app.commonservices' ;
import {Http} from '@angular/http';
import {DomSanitizer} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-past-events2019',
  templateUrl: 'pastevents2019.component.html',
  styleUrls: ['pastevents2019.component.css'],
  providers: [Commonservices]
})
export class PastEvents2019Component implements OnInit {
  public serverurl;
  public presenterlist;
  public contentdetails;
  public isModalShown3: boolean = false;
  public isModalShown: boolean = false;
  public isModalShown4: boolean = false;
  public isModalShown5: boolean = false;
  public isModalShown10: boolean = false;
  public isModalShown11: boolean = false;
  public isModalShowncom1: boolean = false;
  public isModalShowncom2: boolean = false;
  public boothlist;
  public healerlist;

  constructor(private _http: Http, private _commonservices: Commonservices, public _sanitizer: DomSanitizer, private router: Router, private readonly meta: MetaService) {

    this.meta.setTitle('SpiritCon - Past Events 2019');
    this.meta.setTag('og:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    this.meta.setTag('twitter:description', 'SpiritCon was born from the need to have a local place for a witchy, Pagan, metaphysical,and healing oriented individual to participate in community and support structures.There is very little awareness to how large and diverse this of the individual, groups and community    at large. We aim to "open dialogue" and build trust and connections to better lead, guide and enhance the spiritual lives of those identifying under the "Pagan" banner.');
    
    this.meta.setTag('og:keyword', 'SpiritCon');
    this.meta.setTag('twitter:keyword', 'SpiritCon');
    this.meta.setTag('og:title', 'SpiritCon - Past Events 2019');
    this.meta.setTag('twitter:title', 'SpiritCon - Past Events 2019');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/meta/logo-fb.jpg');
    this.meta.setTag('twitter:image', '../../assets/images/meta/logo-twitter.jpg');


    this.serverurl = _commonservices.url;
    this.getspeakerlist(); // speaker and presenter both are same
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

  getspeakerlist() {
    let link = this.serverurl + 'speakerlist1';
    // let data = {selected_year:'2019'};
    let data = {year_2019:1};
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
  getBoothList() {
    let link = this.serverurl + 'vendorlist1';
    // let data = {selected_year:'2019'};
    let data = {year_2019:1};
    this._http.post(link,data)
        .subscribe(res => {
          let result = res.json();
          this.boothlist = result.res;
          console.log('boothlist--------');
          console.log(this.boothlist);
        }, error => {
          console.log('Oooops!');
        });
  }

  getHealerList() {
    let link = this.serverurl + 'healerlist1';
    // let data = {selected_year:'2019'};
    let data = {year_2019:1};
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
  callit(imagename) {
    if (imagename == null || imagename == '') {
      return '';
    }
    if (imagename == '[]') {
      // alert(1);
      return 'http://www.spiritconvention.com/assets/images/home/logo.png';
      //  return '../../assets/images/home/logo.png';
    }
    else {
      let imagenm = JSON.parse(imagename);
      return 'http://www.spiritconvention.com/assets/images/uploads/' + imagenm[0];
      //   return '../../assets/images/uploads/' + imagenm[0];
    }
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
  onHidden() {
    this.isModalShown3 = false;
    this.isModalShown = false;
    this.isModalShown4 = false;
    this.isModalShown5 = false;
    this.isModalShown10 = false;
    this.isModalShown11 = false;
    this.isModalShowncom1 = false;
    this.isModalShowncom2 = false;
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

  callmodalforbuyboothnew() {
    this.isModalShown11 = true;
  }

  callmodalforagendamoalnew() {
    this.isModalShown10 = true;
  }
  showcontents(itemid) {
    console.log(itemid);
    this.contentdetails = '';
    if (this.contentdetails == '') {
      this.contentdetails =  itemid;
    }
    this.isModalShown5 = true;
  }
  showcontents1(itemid) {
    console.log(itemid);
    this.contentdetails = '';
    if (this.contentdetails == '') {
      this.contentdetails =  itemid;
    }
    this.isModalShown5 = true;
  }
  showcontentsforreaders(itemid) {
    console.log(itemid);
    this.contentdetails = '';
    if (this.contentdetails == '') {
      this.contentdetails =  itemid;
    }
    this.isModalShown5 = true;
  }
  showcontentsofhealer(val){

  }


  callmodalforagendamoalcom1() {
    this.isModalShowncom1 = true;
  }
  callmodalforagendamoalcom2() {
    this.isModalShowncom2 = true;
  }
}
