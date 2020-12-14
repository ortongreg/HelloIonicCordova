import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


    constructor(public photoService: PhotoService) { }

    // tslint:disable-next-line:use-lifecycle-interface
    async ngOnInit() {
        await this.photoService.loadSaved();
    }

    addPhotoToGallery() {
      console.log(` page.addNewToGallery`);
      this.photoService.addNewToGallery();
    }

}
