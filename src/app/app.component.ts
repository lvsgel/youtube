import { getLocaleDateFormat } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {YoutubeService} from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  channels:any

  @ViewChild('channelName')
  channelName!: ElementRef;

  constructor(private youtube:YoutubeService){}

  ngOnInit(){
    this.youtube.getChannels("awani").subscribe((data) =>{
    console.log(data)
    this.channels = data.items
  })

  }

  getData(){
    var channelName = this.channelName.nativeElement.value

      this.youtube.getChannels(channelName).subscribe((data) =>{
      console.log(data)
      this.channels = data.items
    })
  }
}
