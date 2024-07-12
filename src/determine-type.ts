/**
 * 类型判断字符是不是纯数值
 * @param value 
 * @returns 
 */
export function isNumber(value: string) {
	var patrn = /^[0-9]*$/;
	return !(patrn.exec(value) == null || value == "")
}


/**
 * 类型判断字符是不是  空对象
 * @param value 
 * @returns 
 */
export function isNullObject(value: Object) {
	return Object.keys(value).length === 0;
}
