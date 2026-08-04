import ContextNode from '../core/context-node.js';
import NormalNode from '../accessors/normal-node.js';
import ExpressionNode from '../core/expression-node.js';
import FloatNode from '../inputs/float-node.js';

class PhysicalMaterialContextNode extends ContextNode {

	static RADIANCE = 'radiance';
	static IRRADIANCE = 'irradiance';

	constructor( scope, node ) {

		super( node, 'vec3' );

		this.scope = scope;

	}

	generate( builder, output ) {

		const scope = this.scope;

		let roughness = null;

		if ( scope === PhysicalMaterialContextNode.RADIANCE ) {

			roughness = new ExpressionNode( 'roughnessFactor', 'float' );

		} else if ( scope === PhysicalMaterialContextNode.IRRADIANCE ) {

			roughness = new FloatNode( 1.0 ).setConst( true );

			this.setContextValue( 'uv', new NormalNode( NormalNode.WORLD ) );

		}

		this.setContextValue( 'roughness', roughness );

		return super.generate( builder, output );

	}

}

export default PhysicalMaterialContextNode;
