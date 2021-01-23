import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdService {

  private readonly USER_ID = 'userId';

  constructor() { }

  getUniqueId(): string {
    if (localStorage.getItem(this.USER_ID)) {
      return localStorage.getItem(this.USER_ID);
    }

    const userId = this.generateId();
    this.storeId(userId);
    return userId;
  }

  private storeId(userId: string): void {
    localStorage.setItem(this.USER_ID, userId);
  }

  private generateId(): string {
    return Date.now().toString();
  }
}
