import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit, OnDestroy {
 productId: number = 1;

 constructor(private route: ActivatedRoute){}
  

  ngOnInit(): void {
    console.log('This is ngOnInit')
    this.productId = this.route.snapshot.params['productid'];
    // When you make some connections, we need to close this connections in ngOnDestroy...
  }




  ngOnDestroy(): void {
    console.log('This is ng on Destroy...')
  }



 


}
