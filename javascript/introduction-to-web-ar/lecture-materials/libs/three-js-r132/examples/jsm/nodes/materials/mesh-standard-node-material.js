import { MeshStandardNode } from './nodes/mesh-standard-node.js';
import { NodeMaterial } from './node-material.js';
import { NodeUtils } from '../core/node-utils.js';

class MeshStandardNodeMaterial extends NodeMaterial {

	constructor() {

		const node = new MeshStandardNode();

		super( node, node );

		this.type = 'MeshStandardNodeMaterial';

	}

}

NodeUtils.addShortcuts( MeshStandardNodeMaterial.prototype, 'properties', [
	'color',
	'roughness',
	'metalness',
	'map',
	'normalMap',
	'normalScale',
	'metalnessMap',
	'roughnessMap',
	'envMap'
] );

export { MeshStandardNodeMaterial };
