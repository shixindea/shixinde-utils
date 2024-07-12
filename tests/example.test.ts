import * as theCheck from '../src/check-validate'


// 测试 check-validate 中的函数
describe('my-app:checkNum', () => {
    test('checkNum(): true', () => {
        expect(
            theCheck.checkNum('11111')
        ).toBe(true)
    })
    test('checkNum(): false', () => {
        expect(
            theCheck.checkNum('aaa')
        ).toBe(false)
    })
    test('checkNum(): false', () => {
        expect(
            theCheck.checkNum('22')
        ).toBe(true)
    })

})


