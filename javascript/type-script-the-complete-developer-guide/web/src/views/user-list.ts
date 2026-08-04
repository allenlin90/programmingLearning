import { User, UserProps } from '../models/user';
import { CollectionView } from './collection-view';
import { UserShow } from './user-show';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();
  }
}
