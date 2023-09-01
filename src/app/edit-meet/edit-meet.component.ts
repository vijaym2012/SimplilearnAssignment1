import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-meet',
  templateUrl: './edit-meet.component.html',
  styleUrls: ['./edit-meet.component.css']
})
export class EditMeetComponent implements OnInit {
  id:number=0;
  mtopic:string='';
  nop:string='';
  mdate:string='';
  mtime:string='';
  message:string='';
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const idParam=params.get('id');
      if(idParam!==null){
        this.id=+idParam;
        this.fetchMeet();
      }
      else{
        console.error("id is missing  or null");
      }


    })
  }


fetchMeet(){
  this.http.get('http://localhost:3000/getMeet/'+this.id)
      .subscribe((response:any)=>
    {
      const meet=response[0];
      this.mtopic=meet.mtopic;
      console.log(this.mtopic)
      this.nop=meet.nop;     
      this.mdate=meet.mdate;
      this.mtime=meet.mtime;
    },
    (error)=>{console.error('Error fetching the meet',error);}
  );
}


  updateMeet(){
    const meet={
      id:this.id,
      mtopic:this.mtopic,
      nop:this.nop,
      mdate:this.mdate,
      mtime:this.mtime
    };


    this.http.put('http://localhost:3000/updateMeet',meet)
    .subscribe((response:any)=>
    {this.message=response.message;},
    (error)=>{console.error('Error updating the meet',error);}
  );


  }


}
