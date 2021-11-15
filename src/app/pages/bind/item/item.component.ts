import {Component, OnInit, NgZone} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ToastService} from 'ngx-weui';
import {BindService} from '../bind.service';

@Component({
  selector: 'app-bind-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class BindItemComponent implements OnInit {
  detail;
  code;

  constructor(private zone: NgZone, private route: ActivatedRoute, private toastSvc: ToastService,
              private bindSvc: BindService) {
  }

  ngOnInit() {
    this.zone.run(() => {
      this.toastSvc.loading('加载中...', 0);
      this.bindSvc.notice(this.route.snapshot.params.id).subscribe(res => {
        console.log(res);
        this.toastSvc.hide();
        this.code = res.code;
        res.data.content = res.data.content.replace(/<img src=\"/gi, '<img class="viewer" src="http://tp.ai-fox.cn');
        this.detail = res.data;
      });
    });
  }


}
