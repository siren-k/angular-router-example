import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  url: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // 방법 1
    //this.url = this.route.snapshot.queryParamMap.get('url');

    // 방법 2
    this.route.queryParamMap.subscribe(data => {
      console.log(data);
      console.log(data.get('url'));
      this.url = data.get('url');
    });
  }

  click(): void {
    console.log('login');

    setTimeout(() => {
      this.router.navigate([this.url || '']);
    }, 1000);
  }

}
