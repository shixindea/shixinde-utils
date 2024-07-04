import { isNumber, isNullObject } from '../src/determine-type'








// 测试 determine-type 中的函数
describe('my-app:isNullObject', () => {
    test('isNullObject(): true', () => {
        expect(
            isNullObject({}),
        ).toBe(true)
    })

    test('isNullObject(): false', () => {
        expect(
            isNullObject('abc'),

        ).toBe(false)
    })
    test('isNullObject(): false', () => {
        expect(
            isNullObject({ a: 1 }),

        ).toBe(false)
    })
})


describe('my-app:isNumber', () => {
    test('isNumber(): true', () => {
        expect(
            isNumber('123456'),
        ).toBe(true)
    })

    test('isNumber(): false', () => {
        expect(
            isNumber('aaccd123'),

        ).toBe(false)
    })
})