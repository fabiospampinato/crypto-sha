
/* IMPORT */

import webcrypto from 'tiny-webcrypto';
import toHex from 'uint8-to-hex';

/* HELPERS */

const makeHash = ( algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512' ) => {

  return async ( buffer: Uint8Array | string ): Promise<string> => {

    buffer = ( typeof buffer === 'string' ) ? new TextEncoder ().encode ( buffer ) : buffer;

    const arrayBuffer = await webcrypto.subtle.digest ( algorithm, buffer );
    const uint8 = new Uint8Array ( arrayBuffer );
    const hex = toHex ( uint8 );

    return hex;

  };

};

/* MAIN */

const sha1 = makeHash ( 'SHA-1' );
const sha256 = makeHash ( 'SHA-256' );
const sha384 = makeHash ( 'SHA-384' );
const sha512 = makeHash ( 'SHA-512' );

/* EXPORT */

export {sha1, sha256, sha384, sha512};
