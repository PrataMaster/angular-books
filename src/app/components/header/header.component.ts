import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  title: string = 'Angular Books';
  showAddBook: boolean|undefined = false;
  subscription: Subscription|undefined;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddBook = value)
  }

  ngOnInit(): void {
  }

  toggleAddBook(){
    this.uiService.toogleAddBook();
  }

}
