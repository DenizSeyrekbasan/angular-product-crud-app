import { Injectable, Testability } from '@angular/core';
import { MessageService as PrimeNgMessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private messageService: PrimeNgMessageService) {}

  showSuccess(summary: string, detail: string) {
    this.messageService.clear();
    this.messageService.add({
      severity: 'success',
      summary,
      detail,
    });
  }
}
