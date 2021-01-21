import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../service/card-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardList: any;
  errorMsg: string;

  constructor(private cardService: CardServiceService) { }

  ngOnInit(): void {
  this.allCards();
  }



  allCards() {
    this.cardService.cardList().subscribe(
      (res) => {
        this.cardList = res;
        console.log(this.cardList);
      },
      (err) => {
        this.errorMsg = 'error from backend' + err;
        
      }
    );
  }

}
