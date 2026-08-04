import Node from '../core/node.js';
import Object3DNode from '../accessors/object3-d-node.js';
import PositionNode from '../accessors/position-node.js';
import ColorNode from '../inputs/color-node.js';
import FloatNode from '../inputs/float-node.js';
import OperatorNode from '../math/operator-node.js';
import MathNode from '../math/math-node.js';
import { NodeUpdateType } from '../core/constants.js';
import { getDistanceAttenuation } from '../functions/bsd-fs.js';

import { Color } from 'three';

class LightNode extends Node {

	constructor( light = null ) {

		super( 'vec3' );

		this.updateType = NodeUpdateType.Object;

		this.light = light;

		this.color = new ColorNode( new Color() );

		this.lightCutoffDistance = new FloatNode( 0 );
		this.lightDecayExponent = new FloatNode( 0 );

		this.lightPositionView = new Object3DNode( Object3DNode.VIEW_POSITION );
		this.positionView = new PositionNode( PositionNode.VIEW );

		this.lVector = new OperatorNode( '-', this.lightPositionView, this.positionView );

		this.lightDirection = new MathNode( MathNode.NORMALIZE, this.lVector );

		this.lightDistance = new MathNode( MathNode.LENGTH, this.lVector );

		this.lightAttenuation = getDistanceAttenuation.call( {
			lightDistance: this.lightDistance,
			cutoffDistance: this.lightCutoffDistance,
			decayExponent: this.lightDecayExponent
		} );

		this.lightColor = new OperatorNode( '*', this.color, this.lightAttenuation );

	}

	update( /* frame */ ) {

		this.color.value.copy( this.light.color ).multiplyScalar( this.light.intensity );
		this.lightCutoffDistance.value = this.light.distance;
		this.lightDecayExponent.value = this.light.decay;

	}

	generate( builder, output ) {

		this.lightPositionView.object3d = this.light;

		const lightingModelFunctionNode = builder.getContextValue( 'lightingModel' );

		if ( lightingModelFunctionNode !== undefined ) {

			const reflectedLightStructNode = builder.getContextValue( 'reflectedLight' );

			const lightingModelCallNode = lightingModelFunctionNode.call( {
				lightDirection: this.lightDirection,
				lightColor: this.lightColor,
				reflectedLight:	reflectedLightStructNode
			} );

			builder.addFlowCode( lightingModelCallNode.build( builder ) );

		}

		return this.color.build( builder, output );

	}

}

export default LightNode;
