import Object3DNode from './object3-d-node.js';

class ModelNode extends Object3DNode {

	constructor( scope = ModelNode.VIEW_MATRIX ) {

		super( scope );

	}

}

export default ModelNode;
