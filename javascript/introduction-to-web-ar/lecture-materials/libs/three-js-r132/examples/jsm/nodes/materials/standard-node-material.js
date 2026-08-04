import { StandardNode } from './nodes/standard-node.js';
import { NodeMaterial } from './node-material.js';
import { NodeUtils } from '../core/node-utils.js';

class StandardNodeMaterial extends NodeMaterial {

	constructor() {

		const node = new StandardNode();

		super( node, node );

		this.type = 'StandardNodeMaterial';

	}

}

NodeUtils.addShortcuts( StandardNodeMaterial.prototype, 'fragment', [
	'color',
	'alpha',
	'roughness',
	'metalness',
	'reflectivity',
	'clearcoat',
	'clearcoatRoughness',
	'clearcoatNormal',
	'normal',
	'emissive',
	'ambient',
	'light',
	'shadow',
	'ao',
	'environment',
	'mask',
	'position',
	'sheenTint'
] );

export { StandardNodeMaterial };
