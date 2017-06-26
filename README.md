# Elo7 Scraper

[![Build Status](https://travis-ci.org/ricardotulio/elo7.svg?branch=master)](https://travis-ci.org/ricardotulio/elo7) [![Coverage Status](https://coveralls.io/repos/github/ricardotulio/elo7/badge.svg?branch=master)](https://coveralls.io/github/ricardotulio/elo7?branch=master)

## Description

Scraper to consume elo7 sales data

## Install

`yarn add elo7`

Or using npm:

`npm install elo7`

## Usage

Import like usual:

```js
import elo7 from 'elo7'
```

also works using `require`:

```js
const elo7 = require('elo7')
```

Connect to Elo7 account:

```js
elo7.connect({ email: 'john.due@email.com', password: '123456' })
```

## Testing

To run the library tests, use `npm test`.

## License

```
The MIT License (MIT)
```
