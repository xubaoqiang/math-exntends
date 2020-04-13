/**
 * @class 数字精度
 * @author MR.X
 * @constructor {Number} decimal全局保留位数
 * @api
 *      
 */

export default class MathExtends {
    // 保留位数 {Number}
    decimal: number

    constructor(decimal?: number) {
        this.decimal = decimal
    }

    /**
     * @method 判断数据是否超过js最大值
     * @param {Number} num
     * @returns {Boolean} 
     */
    judgeJSMathMax(num: number): boolean {
        var result: boolean = num > Math.pow(2, 53)
        result ? (
            console.warn("The calculation length has exceeded the JS maximum security integer, suggest to find another higher, otherwise there will be an error in the calculation results"),
            console.warn("计算长度已超过JS最大的安全整数，建议另谋高就，否则计算结果将有错误")
        ) : null
        return result
    }

    /**
     * @method 获取整数值
     * @param {Number} num1
     * @param {Number} num2
     * @return {Number} pow
     */
    getInteger(num1: number, num2: number): number {
        var numDecimal1 = num1.toString().split('.').length > 1 ? num1.toString().split('.')[1].length : 0
        var numDecimal2 = num2.toString().split('.').length > 1 ? num2.toString().split('.')[1].length : 0
        return Math.pow(10, Math.max(numDecimal1, numDecimal2))
    }

    /**
     * @method 加法函数
     * @param {Number} num1
     * @param {Number} num2
     * @param {Number} decimal  
     */
    $add(num1: number, num2: number, decimal?: number): number {
        var pow = this.getInteger(num1, num2)
        var resultPow: number = num1 * pow + num2 * pow
        this.judgeJSMathMax(resultPow)
        var result: any = resultPow / pow
        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result
        return Number(result)
    }

    /**
     * @method 减法函数
     * @param {Number} num1
     * @param {Number} num2
     * @param {Number} decimal
     */
    $sub(num1: number, num2: number, decimal?: number): number {
        var pow = this.getInteger(num1, num2)
        var resultPow: number = num1 * pow - num2 * pow
        this.judgeJSMathMax(resultPow)
        var result: any = resultPow / pow
        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result
        return Number(result)
    }

    /**
     * @method 乘法函数
     * @param {Number} num1
     * @param {Number} num2
     * @param {Number} decimal
     */
    $mul(num1: number, num2: number, decimal?: number): number {
        var pow = this.getInteger(num1, num2)
        var resultPow: number = (num1 * pow) * (num2 * pow)
        this.judgeJSMathMax(resultPow)
        var result: any = resultPow / (pow * pow)
        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result
        return Number(result)
    }

    /**
     * @method 除法函数
     * @param {Number} num1
     * @param {Number} num2
     * @param {Number} decimal
     */
    $dev(num1: number, num2: number, decimal?: number): number {
        var pow = this.getInteger(num1, num2)
        var result: any = (num1 * pow) / (num2 * pow)
        this.judgeJSMathMax(result)
        result = decimal ? result.toFixed(decimal) : this.decimal ? result.toFixed(this.decimal) : result
        return Number(result)
    }
}