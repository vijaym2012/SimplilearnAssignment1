import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:number=0;
  name:string='';
  email:string='';
  address:string='';
  pswd:string='';
  rpswd:string='';
  message:string='';

  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const idParam=params.get('id');
      if(idParam!==null){
        this.id=+idParam;
        this.fetchClient();
      }
      else{
        console.error("id is missing  or null");
      }


    })
  }


fetchClient(){
  this.http.get('http://localhost:3000/getClient/'+this.id)
      .subscribe((response:any)=>
    {
      const client=response[0];
      this.name=client.name;
      this.email=client.email;
      this.address=client.address;
      this.pswd=client.pswd;
      console.log(this.pswd)
      this.rpswd=client.rpswd;
    },
    (error)=>{console.error('Error fetching the client',error);}
  );
}


  updateClient(){
    const client={
      id:this.id,
      name:this.name,
      email:this.email,
      address:this.address,
      pswd:this.pswd,
      rpswd:this.rpswd
    };


    this.http.put('http://localhost:3000/updateClient',client)
    .subscribe((response:any)=>
    {this.message=response.message},
    (error)=>{console.error('Error updating the client',error);}
  );


  }


}
