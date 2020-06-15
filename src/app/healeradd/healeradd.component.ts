import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';
import {Http} from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Commonservices} from '../app.commonservices' ;

@Component({
  selector: 'app-healeradd',
  templateUrl: './healeradd.component.html',
  styleUrls: ['./healeradd.component.css'],
    providers: [Commonservices],
})
export class HealeraddComponent implements OnInit {
    public dataForm: FormGroup;
    private fb;
    public serverurl;
    public ckeditorContent;
    public errckeditor;

    constructor(fb: FormBuilder, private _http: Http, private router: Router, private _commonservices: Commonservices) {
        this.fb = fb;
        this.ckeditorContent = '';
        this.serverurl = _commonservices.url;
    }

    ngOnInit() {
        this.dataForm = this.fb.group({
            table_no: ['', Validators.required],
            business_name: ['', Validators.required],
            description: [''],
            email: [''],
            phone: [''],
            website: [''],
            year_2018: [''],
            year_2019: [''],
            year_2020: [''],
        });
    }
    onChange(event: any) {
        this.dataForm.patchValue({description: this.ckeditorContent});

    }
    dosubmit(formval) {
        let x: any;
        for (x in this.dataForm.controls) {
            this.dataForm.controls[x].markAsTouched();
        }
        if (this.ckeditorContent == null) {
            this.errckeditor = 'Give description..!';
        }
        else {
            this.errckeditor = null;
        }
        console.log('inside submit');
        let l_year_2018;
        let l_year_2019;
        let l_year_2020;
        if(formval.year_2018==true){
            l_year_2018=1;
        }else{
            l_year_2018 = 0;
        }
        if(formval.year_2019==true){
            l_year_2019=1;
        }else{
            l_year_2019 = 0;
        }
        if(formval.year_2020==true){
            l_year_2020=1;
        }else{
            l_year_2020 = 0;
        }
        if (this.dataForm.valid && this.ckeditorContent != null) {
            console.log('inside dataformvalid');
            let link = this.serverurl + 'addhealer';
            let data = {
                table_no: formval.table_no,
                business_name: formval.business_name,
                email: formval.email,
                description: this.ckeditorContent,
                website: formval.website,
                phone: formval.phone,
                year_2018: l_year_2018,
                year_2019: l_year_2019,
                year_2020: l_year_2020,
            };
            console.log(data);
            this._http.post(link, data)
                .subscribe(res => {
                    let result = res.json();
                    if (result.status == 'success') {
                        console.log('done');
                        this.router.navigate(['/healerlist']);
                    }
                }, error => {
                    console.log('Oooops!');
                });
        }
    }
}
