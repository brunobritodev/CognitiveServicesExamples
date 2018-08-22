import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../../shared/models/FileUpload';
import { ComputerVisionService } from './computer-vision.service';
import { ImageAnalisys } from '../../shared/models/ImageAnalysis';

@Component({
  selector: 'app-computer-vision',
  templateUrl: './computer-vision.component.html',
  styleUrls: ['./computer-vision.component.scss']
})
export class ComputerVisionComponent implements OnInit {

  public url: string;
  public uploadingImage: boolean;
  public imageData: ImageAnalisys;

  constructor(private computerVision: ComputerVisionService) { }

  ngOnInit() {
    this.url = 'http://placehold.it/400x400';
  }

  public handleFileInput(files: FileList) {
    this.uploadingImage = true;

    const fileToUpload = files.item(0);
    const reader = new FileReader();
    let fileData: FileUpload;
    reader.readAsDataURL(fileToUpload);
    reader.onload = () => {
      fileData = new FileUpload(
        fileToUpload.name,
        fileToUpload.type,
        reader.result.split(',')[1]
      );

      this.computerVision.getImageInfo(fileData).subscribe(
        s => {
          this.imageData = s;
        }
      );
    };
  }
  public getFileInfoFromUrl(url: string) {
    this.computerVision.getImageInfoFromUrl(url).subscribe(s => {
      this.imageData = s;
    });
  }

}
