
import { Student } from './student';
import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 

@Injectable()
export class studentservice{
    
    constructor(private http : Http){

    }
    getStudents():Observable<Student[]>{
       return this.http.get("http://localhost:1710/api/Students")
       .map(this.extractData)
       .catch(this.handleError);
    }

    private extractData(res : Response){
        let body = res.json();
        return body || {};
    }
    private handleError(error : any){
        let errormsg : string 
       if(error instanceof Response)
       {
           const body = error.json() || '';
           const err = body.error || JSON.stringify(body);
           errormsg = `${error.status} - ${error.statusText || ''}  ${err}`;
       
       }else{
           errormsg = error.message ? error.message : error.toString();
       }
       return errormsg;
    }
}