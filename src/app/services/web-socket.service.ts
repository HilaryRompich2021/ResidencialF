// web-socket.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WebSocketService {
  private socket!: WebSocket;
  private messages$ = new Subject<string>();

  connect(): void {
    const url = `${environment.wsUrl}/talanquera`;
    this.socket = new WebSocket(url);
    this.socket.onopen    = () => console.log('[WS] conectado a', url);
    this.socket.onmessage = msg => this.messages$.next(msg.data);
    this.socket.onerror   = err => console.error('[WS] error', err);
    this.socket.onclose   = () => console.log('[WS] desconectado');
  }

  onMessage(): Observable<string> {
    return this.messages$.asObservable();
  }

  broadcast(msg: string) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(msg);
    }
  }
}
