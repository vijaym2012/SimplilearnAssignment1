import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-meet',
  templateUrl: './view-meet.component.html',
  styleUrls: ['./view-meet.component.css']
})

export class ViewMeetComponent implements OnInit {
meets:any[]=[];
message:string='';
  constructor(private http:HttpClient) { }


  ngOnInit(): void {
this.fetchMeet();
  }


  fetchMeet(){
    this.http.get('http://localhost:3000/getMeet')
      .subscribe((response:any)=>
    {this.meets=response},
    (error)=>{console.error('Error fetching the meeting',error);}
  );
  }
  deleteMeet(id:number){
    if(confirm('Are you sure you want to delete this meeting?')){
      this.http.delete('http://localhost:3000/deleteMeet/'+id)
      .subscribe((response:any)=>
    {this.message=response.message;
     
      this.fetchMeet();},
   
    (error)=>{console.error('Error deleting the meeting',error);}
  );
}
}
}
