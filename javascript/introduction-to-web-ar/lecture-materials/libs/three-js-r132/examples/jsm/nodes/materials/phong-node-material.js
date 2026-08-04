import { PhongNode } from './nodes/phong-node.js';
import { NodeMaterial } from './node-material.js';
import { NodeUtils } from '../core/node-utils.js';

class PhongNodeMaterial extends NodeMaterial {

	constructor() {

		const node = new PhongNode();

		super( node, node );

		this.type = 'PhongNodeMaterial';

	}

}

NodeUtils.addShortcuts( PhongNodeMaterial.prototype, 'fragment', [
	'color',
	'alpha',
	'specular',
	'shininess',
	'normal',
	'emissive',
	'ambient',
	'light',
	'shadow',
	'ao',
	'environment',
	'environmentAlpha',
	'mask',
	'position'
] );

export { PhongNodeMaterial };
