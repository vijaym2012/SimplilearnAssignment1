import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
id:number=0;
name:string='';
email:string='';
address:string='';
pswd:string='';
rpswd:string='';
message:string='';
constructor(private http:HttpClient) { }

ngOnInit(): void {
}

addClient(){
  const client={
    id:this.id,
    name:this.name,
    email:this.email,
    address:this.address,
    pswd:this.pswd,
    rpswd:this.rpswd

  };
    this.http.post('http://localhost:3000/addClient',client)
    .subscribe((response:any)=>
    {this.message=response.message},
    (error)=>{console.error('Error adding the client',error);}
  );
}
}
