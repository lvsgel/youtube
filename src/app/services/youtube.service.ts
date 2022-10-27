import { Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getChannels(channelName: string):Observable<any>{

    const API_KEY = "AIzaSyD8K30EUSKvutqKEZTFpPFZ-4D90_cur3k"

    const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q= "+channelName+"&type=channel&key="+API_KEY+ "&maxResults50"

    return this.http.get<any>(url)

  }
}
