import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BindService} from '../bind.service';

/*content: "<p class="ql-align-center"><strong class="ql-size-"
createTime: "2021-07-14 02:12:48"
id: 91
title: "通知测试"*/
@Component({
  selector: 'app-bind-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class BindItemComponent {
  detail;

  constructor(private route: ActivatedRoute, private bindSvc: BindService) {
    bindSvc.notice(this.route.snapshot.params.id).subscribe(res => {
      this.detail = res.data;
      console.log(this.detail);
    });
  }


}
