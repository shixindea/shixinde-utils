/**
 * 类型判断字符是不是纯数值
 * @param value 
 * @returns 
 */
export function isNumber(value: string) {
	var patrn = /^[0-9]*$/;
	if (patrn.exec(value) == null || value == "") {
		return false;
	} else {
		return true;
	}
}
