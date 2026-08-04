import { LineSegments2 } from 'line-segments2.js';
import { LineGeometry } from 'line-geometry.js';
import { LineMaterial } from 'line-material.js';

class Line2 extends LineSegments2 {

	constructor( geometry = new LineGeometry(), material = new LineMaterial( { color: Math.random() * 0xffffff } ) ) {

		super( geometry, material );

		this.type = 'Line2';

	}

}

Line2.prototype.isLine2 = true;

export { Line2 };
