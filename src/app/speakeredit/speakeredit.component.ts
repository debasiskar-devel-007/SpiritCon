import { Component, OnInit, NgZone, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Commonservices } from '../app.commonservices';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
declare var moment: any;

@Component({
    selector: 'app-speakeredit',
    templateUrl: './speakeredit.component.html',
    styleUrls: ['./speakeredit.component.css'],
    providers: [Commonservices],
})
export class SpeakereditComponent implements OnInit {

    public configData: any = {
        baseUrl: "https://fileupload.influxhostserver.com/",
        endpoint: "uploads",
        size: "51200", // kb
        format: ["jpg", "jpeg", "png"], // use all small font
        type: "profile-picture",
        path: "file",
        prefix: "_profile_picture",
        formSubmit: false,
        conversionNeeded: 0,
        bucketName: "spritcon-images"
    };



    public dataForm: FormGroup;
    private fb;
    public serverurl;
    options: UploaderOptions;
    files: UploadFile[];
    uploadInput: EventEmitter<UploadInput>;
    humanizeBytes: Function;
    dragOver: boolean;
    private zone: NgZone;
    public disableuploader: any = 0;
    public basicOptions: Object;
    id: number;
    public parsefile: any;
    public filedetail: any;
    public objectoffile: any;
    public filetobesubmited: any;
    public ckeditorContent;
    public errckeditor;
    public ErrCode: boolean = false;
    public imageErrCode: boolean = false;
    public fullimg: any = {};

    constructor(fb: FormBuilder, private _http: Http, private router: Router, private route: ActivatedRoute, private _commonservices: Commonservices) {
        this.fb = fb;
        this.serverurl = _commonservices.url;
        this.files = [];
        this.uploadInput = new EventEmitter<UploadInput>();
        this.humanizeBytes = humanizeBytes;
        this.ckeditorContent = '';
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            // console.log(this.id);
            this.getdetailsoffile();
        });
        this.dataForm = this.fb.group({
            speaker_name: [''],
            description: [''],
            subjects_covered: [''],
            start_date_time: [''],
            /*    end_date_time: [''],*/
            year_2018: [''],
            year_2019: [''],
            year_2020: [''],
            year_2021: ['']
        });

        console.log("aaaaaaaaaaaaa", this.dataForm);

        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: this.serverurl + 'uploads',
            filterExtensions: false,
            allowedExtensions: ['jpg', 'jpeg', 'png']

        };
    }

    getdetailsoffile() {
        let link = this.serverurl + 'speakerdetails';
        let data = { id: this.id };
        this._http.post(link, data)
            .subscribe(res => {
                let result = res.json();
                // console.log('result is  -');
                // console.log(result);
                // console.log(result.status);
                if (result.status == 'success' && typeof (result) != 'undefined') {
                    let userdet = result.res[0];
                    console.log('------------', userdet);
                    // console.log('cccccccccccccccc',userdet);
                    // console.log(JSON.parse(userdet.subjects_covered));
                    // this.parsefile = JSON.parse(userdet.servername);
                    // console.log(userdet.speaker_name);
                    // for (let i in this.parsefile) {
                    //     this.filedetail = this.parsefile[i];
                    //     this.objectoffile = {
                    //         response: this.filedetail
                    //     };
                    //     this.files.push(this.objectoffile);
                    // }

                    // Mon Oct 29 2018 11:40:37 GMT+0530 (India Standard Time)

                    let datev = (moment(userdet.start_date_time).format('YYYY-MM-DD HH:mm:ss'));

                    userdet.start_date_time = (moment(userdet.start_date_time));
                    // userdet.start_date_time=moment().utc(userdet.start_date_time).format('dd-mm-yyyy');
                    // moment.locale('cs');
                    // let timestamp = new Date();
                    // let inverseOffset = moment(timestamp).utcOffset() * -1;
                    // userdet.start_date_time = moment().utcOffset( inverseOffset  );

                    let year_2018_put;
                    let year_2019_put;
                    let year_2020_put;
                    let year_2021_put;
                    if (userdet.year_2018 == 1) {
                        year_2018_put = true;
                    } else {
                        year_2018_put = false;
                    }
                    if (userdet.year_2019 == 1) {
                        year_2019_put = true;
                    } else {
                        year_2019_put = false;
                    }
                    if (userdet.year_2020 == 1) {
                        year_2020_put = true;
                    } else {
                        year_2020_put = false;
                    }

                    if (userdet.year_2021 == 1) {
                        year_2021_put = true;
                    } else {
                        year_2021_put = false;
                    }
                    this.ckeditorContent = userdet.description;
                    this.dataForm = this.fb.group({
                        speaker_name: [userdet.speaker_name],

                        description: [userdet.description],
                        subjects_covered: [userdet.subjects_covered],
                        start_date_time: [userdet.start_date_time],

                        year_2018: year_2018_put,
                        year_2019: year_2019_put,
                        year_2020: year_2020_put,
                        year_2021: year_2021_put,

                    });
                    (<FormControl>this.dataForm.controls['speaker_name']).setValue(userdet.speaker_name);
                    var subjects_coveredJoin = userdet.subjects_covered.join();
                    (<FormControl>this.dataForm.controls['subjects_covered']).setValue(subjects_coveredJoin);
                    (<FormControl>this.dataForm.controls['start_date_time']).setValue(moment(userdet.start_date_time).format());
                    this.fullimg = userdet.image;
                    console.log(this.configData)
                } else {
                    this.router.navigate(['/speakerlist']);
                }
            }, error => {
                console.log('Ooops');
            });
    }
    dosubmit(formval) {

        let x: any;
        for (x in this.dataForm.controls) {
            this.dataForm.controls[x].markAsTouched();
        }

        if (this.configData.files) {

            if (this.configData.files.length > 1) { this.ErrCode = true; return; }
                formval.inventory_image =
                {
                    "basepath": this.configData.files[0].upload.data.basepath,
                    "image": this.configData.files[0].upload.data.data.fileservername,
                    "name": this.configData.files[0].name,
                    "type": this.configData.files[0].type
                };
                console.log('=======================', formval.inventory_image)
          
            // console.log('+++++++++++',typeof(formval.inventory_image.basepath));
        }
        if (this.fullimg != null && this.fullimg != '' && !this.configData.files) {

            formval.inventory_image =
            {
                "basepath": this.fullimg.basepath,
                "image":  this.fullimg.image,
                "name": this.fullimg.name,
                "type": this.fullimg.type
            };

            console.log('--------------------------------', formval.inventory_image)

        }
        if(formval.inventory_image == null || formval.inventory_image == '' || formval.inventory_image == undefined ) {
            formval.inventory_image = false;
            this.imageErrCode = true;
            // if (this.action == 'edit')
            // this.addinventorylistingquoteForm.value.inventory_image = this.defaultData.inventory_image;
        }





        formval.start_date_time = moment(formval.start_date_time).format('YYYY-MM-DD HH:mm:ss');
        //   console.log(formval.subjects_covered);
        //   console.log(formval.subjects_covered);
        //   var subjects_covered_array = formval.subjects_covered;
        var subjects_covered_array = formval.subjects_covered.split(',');

        console.log('zxhgfshgfsahfsahdfsahday', subjects_covered_array);

        let file = this.files;
        console.log(file);
        let sfilename = [];
        let uploadedfilename = [];
        if (typeof (file) == 'object') {  // newly added images
            for (let i in file) {
                sfilename.push(file[i].response);
                uploadedfilename.push(file[i].name);
            }
            this.filetobesubmited = JSON.stringify(sfilename); // as this is an object we have to stringfy it
        }
        else {
            sfilename = file;      // prev image remains
            uploadedfilename = file;
            this.filetobesubmited = sfilename;
        }
        if (this.ckeditorContent == null) {
            this.errckeditor = 'Give description..!';
        }
        else {
            this.errckeditor = null;
        }
        console.log('uploadedfilename---------');
        console.log(uploadedfilename);
        /* if (formval.status == true) {
             formval.status = 1;
         }
         if (formval.status == false) {
             formval.status = 0;
         }*/
        let l_year_2018;
        let l_year_2019;
        let l_year_2020;
        let l_year_2021;
        if (formval.year_2018 == true) {
            l_year_2018 = 1;
        } else {
            l_year_2018 = 0;
        }
        if (formval.year_2019 == true) {
            l_year_2019 = 1;
        } else {
            l_year_2019 = 0;
        }

        if (formval.year_2020 == true) {
            l_year_2020 = 1;
        } else {
            l_year_2020 = 0;
        }

        if (formval.year_2021 == true) {
            l_year_2021 = 1;
        } else {
            l_year_2021 = 0;
        }
        console.log(this.dataForm.valid);


        //  if (this.dataForm.valid) {
        let link = this.serverurl + 'editspeaker';
        let data = {
            id: this.id,
            speaker_name: formval.speaker_name,
            description: this.ckeditorContent,
            servername: JSON.stringify(sfilename),
            uploadedfilename: JSON.stringify(uploadedfilename),
            subjects_covered: subjects_covered_array,
            start_date_time: formval.start_date_time,
            /*  end_date_time: formval.end_date_time,*/
            year_2018: l_year_2018,
            year_2019: l_year_2019,
            year_2020: l_year_2020,
            year_2021: l_year_2021,
            image: formval.inventory_image
        };
        console.log(data);
        this._http.post(link, data)
            .subscribe(data => {
                this.router.navigate(['/speakerlist']);
            }, error => {
                console.log('Oooops!');
            });
        // }
    }


    callit(filename) {
        console.log(filename);
        if (filename == null || filename == '') {
            return '';
        }
        else {
            let filenm = JSON.parse(filename);
            console.log('filenm-------------');
            console.log(filenm);
            return '../../assets/images/uploads/' + filenm[0];
        }
    }

    deleteimage1(counter: any) {
        this.files.splice(counter, 1);
    }
}