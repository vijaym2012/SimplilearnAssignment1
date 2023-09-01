import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meet',
  templateUrl: './add-meet.component.html',
  styleUrls: ['./add-meet.component.css']
})

export class AddMeetComponent implements OnInit {
id:number=0;
mtopic:string='';
nop:string='';
mdate:string='';
mtime:string='';
message:string='';
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
  }
  addMeet(){
    const meet={
      id:this.id,
      mtopic:this.mtopic,
      nop:this.nop,
      mdate:this.mdate,
      mtime:this.mtime
    };


    this.http.post('http://localhost:3000/addMeet',meet)
    .subscribe((response:any)=>
    {this.message=response.message},
    (error)=>{console.error('Error adding the Meeting',error);}
  );
}
}
