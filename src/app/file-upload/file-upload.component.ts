import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadForm
  fileToUpload

  constructor(private fb:FormBuilder, private uploadService: FileUploadService) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({
      file:['file']
    })
  }

  handleFileInput(files: FileList){
    console.log(files)
    const fileItem = files.item(0)
    console.log('File Item:', fileItem)
    this.fileToUpload = fileItem

  }
  handleSubmit(statusForm){
    console.log('submit called')
    console.log('Form Status:',statusForm.submitted)  
    if(statusForm.submitted){
      console.log(this.uploadForm.value)
    }
    this.uploadService.fileUpload(this.fileToUpload, this.uploadForm.value)
                      .subscribe( event => {
                        console.log('file uploading...')
                      }, 
                      error => {
                        console.log('upload failed.')
                      })
    console.log('File submitted')
    statusForm.resetForm({})
  }

}
