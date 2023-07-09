import type DataType from './DataType.js';

export default interface Text {
	id: string;
	type: DataType;
	content: string;
	isBold?: boolean;
	isItalic?: boolean;
	isUnderlined?: boolean;
	isStrikethrough?: boolean;
}
