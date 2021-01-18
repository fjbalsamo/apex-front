import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IData } from '../interfaces/data.interface';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
@Injectable()
export class FaqComponent implements OnInit {

  @Input('url')
  fetchUrl:string;

  data:IData;

  loading:boolean = false;

  constructor(private http:HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.fecthData()
  }

  async fecthData():Promise<void>{
    try {
      this.loading = true;
      let data = await this.http.get(this.fetchUrl).toPromise();

      this.data = await (data as IData);

    } catch (error) {
      console.error(error);      
    }finally{
      this.loading = false;
    }
  }

  refresh(){
    (async () => {
      await this.fecthData()
    })();
  }

  

}
