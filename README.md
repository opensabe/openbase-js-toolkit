# openbase-js-toolkit

## 简介

`openbase-js-toolkit` 是一个简单的 JavaScript 工具包，提供了一些常用的数值格式化和计算函数。

## 安装

使用 npm 安装：

```sh
npm install openbase-js-toolkit
```

## 使用
```js
import { multiple10K, devide10K, formatNumber } from 'openbase-js-toolkit/format'
```

## API 文档
1. `multiple10K(value: number): number`

    将给定的值乘以 10,000 并将结果四舍五入到最接近的整数。

    参数:
      - `value` - 要乘以的数字。

    返回值:
      - 乘法结果，四舍五入到最接近的整数。

    示例:
      ```js
      const result = multiple10K(2.5); // 25000
      ```

2. `devide10K(value: number): number`

    将给定的数字除以 10,000。

    参数:
      - value - 要除以的数字。

    返回值:
      - 除法结果。

    示例:
    ```js
    const result = devide10K(25000); // 2.5
    ```

3. `formatNumber(num: number | string, decimals: number | null = null): string`

    格式化带有逗号和指定小数位数的数字。

    参数:
      - `num` - 要格式化的数字。
      - `decimals` - 要包含的小数位数（可选）。

    返回值:
      - 带有逗号的格式化数字字符串。

    示例:
      ```js
      const formattedNumber = formatNumber(1234567.891, 2); // '1,234,567.89'
      ```

## 开发
```sh
# install
bun install

# test
bun test

# build
bun run build
```