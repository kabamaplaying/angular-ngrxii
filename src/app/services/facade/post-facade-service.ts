import { Post } from '../../post';
import { Observable } from 'rxjs';

export abstract class PostFacadeService {
  subscribePost$: Observable<Post[]>;
  abstract getByUserId(userId: string): Observable<Post>;
  abstract getAllPost(): Observable<Post[]>;
}