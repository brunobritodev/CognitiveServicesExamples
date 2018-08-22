import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ImageAnalisys } from '../../../shared/models/ImageAnalysis';
import { FileUpload } from '../../../shared/models/FileUpload';

@Injectable()
export class ComputerVisionService {
    constructor(private http: HttpClient) {
        // set token if saved in local storage
    }
    public getImageInfo(data: FileUpload): Observable<ImageAnalisys> {
        return this.http.post<ImageAnalisys>(environment.API_URL + 'computer-vision/getInfo', data);
    }

    public getImageInfoFromUrl(data: string): Observable<ImageAnalisys> {
        return this.http.post<ImageAnalisys>(environment.API_URL + 'computer-vision/getInfoFromUrl', { url: data });
    }
}
