import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences} from '@capacitor/preferences';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.ceklogin();
  }

  async ceklogin(){
    const token = await Preferences.get({ key: 'token'});
    if (token.value == null) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    }else{
      this.router.navigateByUrl('/tabs/beranda', {replaceUrl: true});
    }
  }
}
