#!/usr/bin/env node --harmony

import colors from 'colors'
import Table from 'tty-table'
import _ from 'lodash'

var datas = [];
var headers = [
	{
		value: "item",
		headerColor: "cyan",
		color: "yellow",
		align: "center",
		paddingRight: 5,
		width: 15
	}
];
var defaultHeader = {
	value: "item",
	headerColor: "cyan",
	color: "yellow",
	align: "center",
	paddingRight: 5,
	width: 10,
	formatter: formatter
}

var error = {};

function formatter (value) {
	if (value) {
		return colors.green(value.toString())
	}
	else {
		return colors.red(value.toString())
	}
}

export function setHeaders (header) {
	headers = _.cloneDeep(header)
}

export function setHeader (header) {
	let _header = _.assign(defaultHeader, { value: header })

	return headers.push(_header)
}

export function logError (job, errmsg) {
	error[job] = errmsg
}

export function setData (head, key, value) {
	let rowIndex = -1;
	let colIndex = -1;

	_.each(headers, (val, _index) => {
		if (val.value === key) {
			rowIndex = _index;
		}
	})

	_.each(datas, (val, _index) => {
		if (val[0] === head) {
			colIndex = _index;
		}
	})

	if (colIndex < 0 && rowIndex < 0) {
		setHeader(key);
		datas.push([head, value]);
	} else if (rowIndex < 0) {
		rowIndex = setHeader(key);
		datas[colIndex][rowIndex] = value;
	} else if (colIndex < 0) {
		colIndex = datas.push([head]) - 1;
		datas[colIndex][rowIndex] = value;
	} else {
		datas[colIndex][rowIndex] = value;
	}

//	if (itemIndex < 0) {
//		setHeader(key)
//		datas.push([head, value])
//	}
//	else if (keyIndex < 0){
//		datas[itemIndex].push(head)
//		datas[itemIndex].push(value)
//	}
//	else {
//		datas[itemIndex][keyIndex] = value
//	}
}

export function tableRender () {

	var t1 = Table(headers, datas, {
		borderStyle: 1,
		paddingBottom: 0,
		headerAlign: "center",
		align: "center",
		color: "white"
	});

	console.log(t1.render())
	console.log('use ./cli <type> <name> to debug')
}

//var tableHeader = [{
//	value: "item",
//	headerColor: "cyan",
//	color: "yellow",
//	align: "center",
//	paddingRight: 5,
//	width: 15
//}, {
//	value: "clean",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "build",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "patch",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "publish",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "commit",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "pull",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}, {
//	value: "push",
//	align: "center",
//	paddingRight: 5,
//	width: 10,
//	formatter: formatter
//}];
//
//var rows = [
//	['pc/button', true, true, true, true, true, true, true],
//	['pc/select', true, true, true, true, false, true, true],
//	['tb/button', true, true, true, true, true, true, true],
//	['common/drag', true, true, true, true, true, true, true]
//];
//
//var t1 = Table(tableHeader, rows, {
//	borderStyle: 1,
//	paddingBottom: 0,
//	headerAlign: "center",
//	align: "center",
//	color: "white"
//});
//
//console.log(t1.render())

