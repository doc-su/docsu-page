import type Data from './Data.js';

export default interface PageData {
	id: string;
	documentId: string;
	title: string;
	description?: string;
	data: any[];
	next?: string;
	previous?: string;
}
