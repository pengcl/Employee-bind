import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BindService {
  constructor(@Inject('PREFIX_URL') private PREFIX_URL,
              private http: HttpClient) {
  }

  auth(callbackUrl): Observable<any> {
    return this.http.get('http://tp.ai-fox.cn/prod-api/api/wechat/authorize?returnUrl=' + callbackUrl, {responseType: 'text'});
  }

  notice(id): Observable<any> {
    return this.http.get('http://tp.ai-fox.cn/prod-api/api/notice/' + id);
  }

  bind(body): Observable<any> {
    return this.http.post('http://tp.ai-fox.cn/prod-api/api/member/binding', body);
  }
}
