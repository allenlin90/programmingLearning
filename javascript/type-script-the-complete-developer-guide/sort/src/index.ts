import { Sorter } from './sorter';
import { NumbersCollection } from './numbers-collection';
import { CharacterCollection } from './characters-collection';
import { LinkedList } from './linked-list';

const numberCollection = new NumbersCollection([4, 2, 10, -2]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharacterCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
