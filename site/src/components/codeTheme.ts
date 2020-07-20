const tag = '#73787b';
const attribute = '#767e86';
const value = '#787a80';
const punctuation = '#4f565c';
const plainText = '#cfcfcf';
const meta = '#939fb0';
const other = '#cfcfcf';

export default {
	'code[class*="language-"]': {
		whiteSpace: 'pre',
		color: plainText,
	},
	'pre[class*="language-"]': {
		whiteSpace: 'pre',
		margin: 0,
	},
	comment: {
		color: meta,
	},
	prolog: {
		color: meta,
	},
	doctype: {
		color: meta,
	},
	cdata: {
		color: meta,
	},
	punctuation: {
		color: punctuation,
	},
	property: {
		color: attribute,
	},
	tag: {
		color: tag,
	},
	boolean: {
		color: value,
	},
	number: {
		color: value,
	},
	constant: {
		color: value,
	},
	symbol: {
		color: value,
	},
	selector: {
		color: value,
	},
	'attr-name': {
		color: attribute,
	},
	string: {
		color: value,
	},
	char: {
		color: value,
	},
	builtin: {
		color: other,
	},
	operator: {
		color: other,
	},
	entity: {
		color: other,
		cursor: 'help',
	},
	url: {
		color: other,
	},
	'attr-value': {
		color: value,
	},
	keyword: {
		color: value,
	},
	regex: {
		color: other,
	},
	important: {
		color: other,
		fontWeight: 'bold',
	},
	bold: {
		fontWeight: 'bold',
	},
	italic: {
		fontStyle: 'italic',
	},
	inserted: {
		color: 'green',
	},
	deleted: {
		color: 'red',
	},
};
