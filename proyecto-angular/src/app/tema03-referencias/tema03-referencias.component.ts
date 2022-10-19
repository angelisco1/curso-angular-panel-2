import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema03-referencias',
  templateUrl: './tema03-referencias.component.html',
  styleUrls: ['./tema03-referencias.component.css']
})
export class Tema03ReferenciasComponent implements OnInit {
  // currentTime: number = 0
  // duration: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  play(video: HTMLVideoElement) {
    video.play()
  }

  pause(video: HTMLVideoElement) {
    video.pause()
  }

  cambiarVolumen(video: HTMLVideoElement, event: any) {
    video.volume = Number(event.target.value) / 100
  }

  fullScreen(video: HTMLVideoElement) {
    video.requestFullscreen()
  }

}
