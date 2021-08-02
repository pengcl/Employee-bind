import {Component, Inject, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {ToastService} from 'ngx-weui';
import {DialogService} from 'ngx-weui';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BindService} from '../bind.service';

@Component({
  selector: 'app-bind-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BindListComponent implements OnInit {
  form: FormGroup;
  openid = this.route.snapshot.queryParams.openid;

  constructor(private route: ActivatedRoute,
              private bindSvc: BindService,
              @Inject('FILE_PREFIX_URL') public FILE_PREFIX_URL,
              private dialogSvc: DialogService,
              private toastSvc: ToastService) {


  }

  /*code: 500
  data: null
  mapResult: null
  msg: "无法找到匹配的信息，请联系管理员。"*/
  ngOnInit() {
    console.log(window.location.href);
    if (!this.route.snapshot.queryParams.openid) {
      this.bindSvc.auth(window.location.href).subscribe(res => {
        console.log(res);
        window.location.href = res;
      });
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      jobNumber: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^1[3456789]\d{9}$/)]),
      openId: new FormControl(this.openid, [Validators.required])
    });
  }

  bind() {
    if (this.form.invalid) {
      return false;
    }
    this.toastSvc.loading('绑定中...', 0);
    this.bindSvc.bind(this.form.value).subscribe(res => {
      this.toastSvc.hide();
      if (res.code) {
        this.dialogSvc.show({content: res.msg, cancel: '', confirm: '我知道了!'}).subscribe();
      } else {
        this.toastSvc.success('绑定成功', 1500);
      }
    });
  }


}
