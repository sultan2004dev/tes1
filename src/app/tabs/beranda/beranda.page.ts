import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Swiper } from 'swiper';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
@ViewChild('swiper')
swiperRef:ElementRef | undefined;
swiper?: Swiper;
swiperModules = [IonicSlides];
  constructor(private router:Router) { }

  ngOnInit() {
  }

  keluar(){
    Preferences.clear();
    this.router.navigateByUrl('/home', {replaceUrl: true});
  }

}
