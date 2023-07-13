import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

interface Event {
    type: string;
    payload?: any;
}

type EventCallback = (payload?: any) => void;

@Injectable({ providedIn: 'root' })
export class EventService {

    private subject: Subject<Event> = new Subject<Event>();

    notify(type: string, payload: any = null) {
        this.subject.next({
            type: type,
            payload: payload
        });
    }

    subscribe(type: string, callback: EventCallback): Subscription {
        return this.subject
            .pipe(
                filter(t => t.type == type),
                map(t => t.payload)
            )
            .subscribe(callback);
    }

}