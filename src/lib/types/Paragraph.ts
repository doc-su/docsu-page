import type DataType from './DataType.js';
import type Text from './Text.js';

export default interface Paragraph {
	id: string;
	type: DataType;
	content: Text[];
	textAlignment?: TextAlignment;
}

export enum TextAlignment {
	Center = 'center',
	Left = 'left',
	Right = 'right'
}
