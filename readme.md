# Crypto SHA

Isomorphic wrapper for the SHA family of hash functions.

## Install

```sh
npm install --save crypto-sha
```

## Usage

```ts
import {sha1, sha256, sha384, sha512} from 'crypto-sha';

// Hash the input with the default format (hex)

await sha1 ( 'The quick brown fox jumps over the lazy dog' ); // => '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12'
await sha256 ( 'The quick brown fox jumps over the lazy dog' ); // => 'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592'
await sha384 ( 'The quick brown fox jumps over the lazy dog' ); // => 'ca737f1014a48f4c0b6dd43cb177b0afd9e5169367544c494011e3317dbf9a509cb1e5dc1e85a941bbee3d7f2afbc9b1'
await sha512 ( 'The quick brown fox jumps over the lazy dog' ); // => '07e547d9586f6a73f73fbac0435ed76951218fb7d0c8d788a309d785436bbb642e93a252a954f23912547d1e8a3b5ed6e1bfd7097821233fa0538f3db854fee6'

// Hash the input with a specific supported format

await sha1.buffer ( 'The quick brown fox jumps over the lazy dog' ); // => ArrayBuffer(20) <2f d4 e1 c6 7a 2d 28 fc ed 84 9e e1 bb 76 e7 39 1b 93 eb 12>
await sha1.uint8 ( 'The quick brown fox jumps over the lazy dog' ); // => Uint8Array(20) [47, 212, 225, 198, 122, 45, 40, 252, 237, 132, 158, 225, 187, 118, 231, 57,  27, 147, 235, 18]
await sha1.hex ( 'The quick brown fox jumps over the lazy dog' ); // => '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12'
```

## License

MIT © Fabio Spampinato
