import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, pipe, interval, throwError, Observable, timer } from 'rxjs';
import { filter, map, tap, catchError, shareReplay, retryWhen, delayWhen} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  _http:HttpClient

  constructor(http:HttpClient) { 
    this._http = http
  }

  getProductList(){
    /*
    return this._http.get('http://localhost:4200/assets/product.json')
    .pipe(
      tap(() => console.log('HTTP requestexecuted')),
      map(res => Object.values(res) ),
      shareReplay(),
      retryWhen(errors => {return errors
              .pipe(
                delayWhen(() => timer(2000)),
                tap(() => console.log('retrying...'))
              )
            }
     )
    )
    */

    const promise = new Promise((resolve, reject) => {
      this._http.get('http://localhost:4200/assets/product.json')
                .toPromise()
                .then( res => {
                  console.log(res)
                  resolve(res)
                })
    })
    return promise;
  }

  handleError(op, result?:Observable<Object>, err?:any){
    return (err:any):Observable<Object> => {
      console.log('Op:',op)
      console.log('error:',err)
      return of([err])
    }
  }

}
