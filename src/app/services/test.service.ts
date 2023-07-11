import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  logType:string='normal';

  log() {
    console.log('Log');
  }
}

export class FileLogService {

  logType:string='file';

  log() {
    console.log('File Log');
  }
}

export class ApiLogService {

  logType:string='api';

  log() {
    console.log('Api Log');
  }
}
