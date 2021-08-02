import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mergeMap as observableMargeMap} from 'rxjs/operators';
import {resultProcess} from '../../utils/utils';
import {PayDto} from '../../@core/dto/pay.dto';
import {DialogService} from 'ngx-weui';
import {Router} from '@angular/router';

declare var WeixinJSBridge: any;

@Injectable({providedIn: 'root'})
export class BindService {
  constructor(@Inject('PREFIX_URL') private PREFIX_URL,
              private http: HttpClient,
              private dialog: DialogService,
              private router: Router) {
  }

  auth(callbackUrl): Observable<any> {
    return this.http.get('http://tp.ai-fox.net/prod-api/api/wechat/authorize?returnUrl=' + callbackUrl, {responseType: 'text'});
  }

  notice(id): Observable<any> {
    return this.http.get('http://tp.ai-fox.net/prod-api/api/notice/' + id);
  }

  bind(body): Observable<any> {
    return this.http.post('http://tp.ai-fox.net/prod-api/api/member/binding', body);
  }
}
