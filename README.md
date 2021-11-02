<div align="center">

   <p>
    <h1>array-initializer</h1>
  </p>
  <p>
     A simple library to initialize your array in any format you want
  </p>
  <p>
     String | Characters | Special Characters | Anything and Everything
  </p>
  <p>A javascript based library</p>

  <p>

  </p>
</div>

---

![GitHub watchers](https://img.shields.io/github/watchers/koustov/array-initializer.svg?logo=github&label=Watch) ![GitHub watchers](https://img.shields.io/github/issues/koustov/array-initializer?logo=github&label=Issues) ![GitHub watchers](https://img.shields.io/github/stars/koustov/array-initializer?logo=github&label=Stars) ![GitHub watchers](https://img.shields.io/npm/dt/array-initializer.svg?logo=npm&label=downloads)

This is a **fully flexible** array initializer based on [`Node`](https://nodejs.org/en/)

**Table of Contents**

- [Features](#features)
- [🤲 Want to Motivate?](#-want-to-motivate)
- [When do you need it](#when-do-you-need-it)
  - [Install 🐙](#install-)
- [Usage](#usage)
- [Highlight 🔥](#highlight-)
- [Methods](#methods)
- [Arguments](#arguments)
- [Items in queue](#items-in-queue)
- [Contribution 🍰](#contribution-)
- [License](#license)


## Features

- Node based
- Simple Javascript methods

## 🤲 Want to Motivate?

Who doesn't need motivation? Please give the project a star(⭐) and/or share it in your dev circle.

<!-- ## Many Thanks to all the `Stargazers` who has supported this project with stars(⭐)

[![Stargazers repo roster for @koustov/array-initializer](https://reporoster.com/stars/koustov/array-initializer)](https://github.com/koustov/array-initializer/stargazers) -->

## When do you need it

- You want to initialize your array?
- Initialize with complex values?


### Install 🐙

```bash
npm install array-initializer
```

or

```bash
yarn add array-initializer
```

## Usage
```js
import {numberRange, specialChars} from 'array-initializer'

const your_int_array = range(50,100);
const your_spl_char_array = specialChars();
```
## Highlight 🔥

It was frustrating for me when I was looking for some easy library to initialize various types of array throughout in my application.

## Methods

|Type|Method | Arguments |Description|
|---|---|---|---|
|Number| range0to100 | exceptions: `array` | Initialize for 0 to 100|
|Number| range0to1000 | exceptions: `array` |Initialize for 0 to 1000|
|Number| rangeNegative100to100 | exceptions: `array` |Initialize for -100 to 100|
|Number| numberRange | start: `number`,<br/> end: `number`, <br/>exceptions: `array`,  |A custom range to initialize for|
|Char| smallChars | exceptions: `array` | Initialize for a to z|
|Char| capitalChars | exceptions: `array` | Initialize for A to Z|
|Char| specialChars | exceptions: `array` | Initialize for special characters|
|Char| printableChars | exceptions: `array` | Initialize for printable characters|
|Char| randomString | count: `number` <br/>exceptions: `array` | Initialize for random string|

## Arguments
|Name|Type|Default|Description|
|---|---|---|---|
|exceptions| array | empty | If you wish to avoid certain entries|
|start| source type | undefined | When you wish to define a start point for a range |
|end| source type | undefined | When you wish to define a end point for a range |
|count| number | max possible size | When you wish to restrict a length |

## Items in queue

- Logically endless combinations

## Contribution 🍰

If you understand the importance please feel free to create issue and make pull request

Refer [code of conduct ](./CODE_OF_CONDUCT.md)

Refer [contributing ](./CONTRIBUTING.md)

## License

MIT © [Koustov](https://github.com/koustov)


