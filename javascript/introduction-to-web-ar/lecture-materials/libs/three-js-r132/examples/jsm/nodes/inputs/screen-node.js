import { InputNode } from '../core/input-node.js';
import { TextureNode } from './texture-node.js';

class ScreenNode extends TextureNode {

	constructor( uv ) {

		super( undefined, uv );

	}

	getUnique() {

		return true;

	}

	getTexture( builder, output ) {

		return InputNode.prototype.generate.call( this, builder, output, this.getUuid(), 't', 'renderTexture' );

	}

}

ScreenNode.prototype.nodeType = 'Screen';

export { ScreenNode };
