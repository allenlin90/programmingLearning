import { SpriteNode } from './nodes/sprite-node.js';
import { NodeMaterial } from './node-material.js';
import { NodeUtils } from '../core/node-utils.js';

class SpriteNodeMaterial extends NodeMaterial {

	constructor() {

		const node = new SpriteNode();

		super( node, node );

		this.type = 'SpriteNodeMaterial';

	}

}

NodeUtils.addShortcuts( SpriteNodeMaterial.prototype, 'fragment', [
	'color',
	'alpha',
	'mask',
	'position',
	'spherical'
] );

export { SpriteNodeMaterial };
