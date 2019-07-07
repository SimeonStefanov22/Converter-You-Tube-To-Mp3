import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  response: any;
  constructor( private httpClient: HttpClient) { }

  convertVideo(id){
    this.response = this.httpClient.get(`https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/?id=${id}`,
      {
        headers: {"X-RapidAPI-Host": "coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "8044cb1ef4mshf507de5444d64d0p1afdefjsnd453dfd8a0ef"}
      })
    return this.response;
  }
}
