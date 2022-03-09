import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './chegg-user-info';


@Component({
  selector: 'chegg-user-info',
  templateUrl: './chegg-user-info.component.html',
  styleUrls: ['./chegg-user-info.component.css']
})
export class CheggUserInfoComponent implements OnInit {
  
  myInfo: UserInfo | undefined;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    console.log("Sending get request");
    this.showUserInfo();
    
  }

  getUserInfo() {
    return this.http.get<UserInfo>("https://chegg-app-de05e-default-rtdb.firebaseio.com/myinfo.json")
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
