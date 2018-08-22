import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { FileUpload } from '../../shared/models/FileUpload';
import { Injectable } from '../../../../node_modules/@angular/core';
import { ImageAnalisys } from '../../shared/models/ImageAnalysis';
import { Observable } from '../../../../node_modules/rxjs';
import { environment } from '../../../environments/environment';

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
