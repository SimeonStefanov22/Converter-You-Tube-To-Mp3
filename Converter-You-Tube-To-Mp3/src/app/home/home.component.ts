import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {NgModel} from "@angular/forms";
import {ConvertService} from "../services/convert.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RouterModule} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videoId: string;
  text: string;
  diff: number;
  response: any;
  link: string;

  constructor(private convertService: ConvertService, private router: Router) { }

  ngOnInit() {
  }
  convertVideo(videoURL){

    this.text = videoURL.video;
    for(let i = 0; i < this.text.length ; i++){
      if(this.text[i] === "="){
        this.diff = i + 1;
      }

    }
    this.videoId = this.text.substr(this.diff);

    this.convertService.convertVideo(this.videoId)
      .subscribe( data => {
        this.response = data;
        console.log(this.response.data.html);
        console.log(this.response.data.iframe);
        console.log(this.response.data.js);
        console.log(this.response.data.link);
        this.link = this.response.data.html;

      })

  }

  info(){
    this.router.navigate(["InfoComponent"])
  }

}
