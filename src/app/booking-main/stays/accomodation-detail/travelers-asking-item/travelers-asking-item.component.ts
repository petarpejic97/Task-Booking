import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-travelers-asking-item',
  templateUrl: './travelers-asking-item.component.html',
  styleUrls: ['./travelers-asking-item.component.css']
})
export class TravelersAskingItemComponent implements OnInit, AfterViewInit {
  @Input() ask;
  @ViewChild('answerWrapper') answerWrapper: any;
  @ViewChild('answerText') answerText: any;
  showMoreVisibility: boolean;
  moreLess = 'Show more';
  wrapperHeight;
  txtDissapear;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  editWrapper(): void{
    if (this.moreLess === 'Show more'){
      const height = this.answerText.nativeElement.offsetHeight;
      if (height > 80 && height <= 110){
        this.wrapperHeight = '110px';
      }
      else if (height > 110 && height <= 140){
        this.wrapperHeight = '140px';
      }
      else if (height > 140 && height <= 170){
        this.wrapperHeight = '170px';
      }
      else if (height > 170 && height <= 200){
        this.wrapperHeight = '200px';
      }
      else if (height > 200 && height <= 230){
        this.wrapperHeight = '230px';
      }
      else{
        this.wrapperHeight = '250px';
      }
      this.txtDissapear = false;
      this.moreLess = 'Show less';
    }
    else{
      this.wrapperHeight = '6em';
      this.txtDissapear = true;
      this.moreLess = 'Show more';
    }
  }
  ngAfterViewInit(): void {
    if (this.answerText.nativeElement.offsetHeight >= this.answerWrapper.nativeElement.offsetHeight){
      this.showMoreVisibility = true;
      this.txtDissapear = true;
    }
    else{
      this.showMoreVisibility = false;
    }
    this.cdr.detectChanges();
  }
}
