
/* IMPORT */

import webcrypto from 'tiny-webcrypto';
import toHex from 'uint8-to-hex';

/* HELPERS */

const encoder = new TextEncoder ();

const makeHash = ( algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512' ) => {

  const buffer = ( input: Uint8Array | string ): Promise<ArrayBuffer> => {

    input = ( typeof input === 'string' ) ? encoder.encode ( input ) : input;

    return webcrypto.subtle.digest ( algorithm, input );

  };

  const uint8 = async ( input: Uint8Array | string ): Promise<Uint8Array> => {

    return new Uint8Array ( await buffer ( input ) );

  };

  const hex = async ( input: Uint8Array | string ): Promise<string> => {

    return toHex ( await uint8 ( input ) );

  };

  hex.buffer = buffer;
  hex.hex = hex;
  hex.uint8 = uint8;

  return hex;

};

/* MAIN */

const sha1 = makeHash ( 'SHA-1' );
const sha256 = makeHash ( 'SHA-256' );
const sha384 = makeHash ( 'SHA-384' );
const sha512 = makeHash ( 'SHA-512' );

/* EXPORT */

export {sha1, sha256, sha384, sha512};
