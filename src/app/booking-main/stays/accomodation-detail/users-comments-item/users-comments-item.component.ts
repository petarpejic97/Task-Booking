import { Component, Input, OnInit } from '@angular/core';
import { UserComment } from 'src/app/shared/user-comment.model';

@Component({
  selector: 'app-users-comments-item',
  templateUrl: './users-comments-item.component.html',
  styleUrls: ['./users-comments-item.component.css']
})
export class UsersCommentsItemComponent implements OnInit {
  @Input() comment: UserComment;
  constructor() { }

  ngOnInit(): void {

  }

}
