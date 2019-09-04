import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  fileUploadUrl = 'http://localhost:4040/file/upload'

  constructor(private http: HttpClient) { }

  fileUpload(fileItem: File, data){
    const formData = new FormData()
    formData.append('file',fileItem, fileItem.name)
    const req = new HttpRequest('POST', this.fileUploadUrl, formData,
    {reportProgress: true})
    if(data){
      for(let key in data){
        formData.append(key, data[key])
      }
    }
    return this.http.request(req)
  }
}
