import { expect, test } from "bun:test";
import { multiple10K, devide10K, formatNumber } from '../src/format.ts';

test('formatNumber: 精度 eg. 288.9*100===28889.999999999996', () => {
  expect(formatNumber(288.9*100, 2)).toBe('28,890.00')
})

test('formatNumber: 整数，保留两位小数', () => {
  expect(formatNumber(720, 2)).toBe('720.00')
})

test('formatNumber: 一位小数，保留两位小数', () => {
  expect(formatNumber(2.3, 2)).toBe('2.30')
})

test('formatNumber: 0, 保留两位小数', () => {
  expect(formatNumber(0, 2)).toBe('0.00')
})

test('formatNumber: 保留多位小数，小数位不被千分符格式化', () => {
  expect(formatNumber(28889.111222333, 7)).toBe('28,889.1112223')
})

test('multiple10K: 正常情况', () => {
  expect(multiple10K(2.5)).toBe(25000)
})

test('multiple10K: 负数', () => {
  expect(multiple10K(-3.5)).toBe(-35000)
})

test('multiple10K: 0', () => {
  expect(multiple10K(0)).toBe(0)
})

test('devide10K: 正常情况', () => {
  expect(devide10K(25000)).toBe(2.5)
})

test('devide10K: 负数', () => {
  expect(devide10K(-35000)).toBe(-3.5)
})

test('devide10K: 0', () => {
  expect(devide10K(0)).toBe(0)
})

test('formatNumber: 默认精度', () => {
  expect(formatNumber(1234567.891)).toBe('1,234,567.891')
})

test('formatNumber: 指定精度', () => {
  expect(formatNumber(1234567.891, 2)).toBe('1,234,567.89')
})

test('formatNumber: 整数', () => {
  expect(formatNumber(1234567)).toBe('1,234,567')
})

test('formatNumber: 负数', () => {
  expect(formatNumber(-1234567.891, 2)).toBe('-1,234,567.89')
})

test('formatNumber: 0', () => {
  expect(formatNumber(0, 2)).toBe('0.00')
})

test('formatNumber: 空字符串', () => {
  expect(formatNumber('' as unknown as number, 2)).toBe('')
})