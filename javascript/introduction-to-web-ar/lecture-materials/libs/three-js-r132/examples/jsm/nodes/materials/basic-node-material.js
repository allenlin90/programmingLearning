import { BasicNode } from './nodes/basic-node.js';
import { NodeMaterial } from './node-material.js';
import { NodeUtils } from '../core/node-utils.js';

class BasicNodeMaterial extends NodeMaterial {

	constructor() {

		const node = new BasicNode();

		super( node, node );

		this.type = 'BasicNodeMaterial';

	}

}

NodeUtils.addShortcuts( BasicNodeMaterial.prototype, 'fragment', [
	'color',
	'alpha',
	'mask',
	'position'
] );

export { BasicNodeMaterial };
