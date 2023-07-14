import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export class GlobalErrorHandler implements ErrorHandler {
    constructor(private messageService:MessageService) { }

    handleError(error: any): void {
        this.messageService.add({ severity: 'warn', summary: 'Uyarı', detail: error });
    }
}