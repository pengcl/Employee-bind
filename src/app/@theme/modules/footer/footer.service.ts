import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {take} from 'rxjs/operators';
import {FOOTER_NAV_ITEMS} from './footer.config';

import {StorageService} from '../../../@core/utils/storage.service';


export interface Nav {
  page: string;
  icon: string;
  selectedIcon: string;
  name: string;
  selected: boolean;
  badge: 'new' | number;
}

@Injectable({providedIn: 'root'})
export class FooterService {

  items = new BehaviorSubject<Nav[]>(FOOTER_NAV_ITEMS);
  private _items = FOOTER_NAV_ITEMS;

  constructor(private storageSvc: StorageService) {
  }

  set(items) {
    this.items.next(items);
  }

  get(): Observable<any> {
    return this.items.asObservable();
  }

  setActive(index) {
    this._items.forEach((item, i) => {
      this._items[i].selected = false;
    });
    this._items[index].selected = true;
    this.items.next(this._items);
  }
}
