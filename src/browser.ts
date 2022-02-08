
/* HELPERS */

const toHex = (() => { // The fastest way to convert a buffer to hex

  const alphabet = '0123456789abcdef';
  const lookup = new Array ( 256 );

  for  ( let i = 0; i < 256; i++ ) {

    lookup[i] = `${alphabet[(i >>> 4) & 0xF]}${alphabet[i & 0xF]}`;

  }

  return ( buffer: Uint8Array ): string => {

    let hex = '';

    for ( let i = 0, l = buffer.length; i < l; i++ ) {

      hex += lookup[buffer[i]];

    }

    return hex;

  };

})();

const makeHash = ( algorithm: 'SHA-1' | 'SHA-224' | 'SHA-256' | 'SHA-384' | 'SHA-512' ) => {

  return async ( buffer: Uint8Array | string ): Promise<string> => {

    buffer = ( typeof buffer === 'string' ) ? new TextEncoder ().encode ( buffer ) : buffer;

    const arrayBuffer = await crypto.subtle.digest ( algorithm, buffer );
    const uint8 = new Uint8Array ( arrayBuffer );
    const hex = toHex ( uint8 );

    return hex;

  };

};

/* MAIN */

const sha1 = makeHash ( 'SHA-1' );
const sha224 = makeHash ( 'SHA-224' );
const sha256 = makeHash ( 'SHA-256' );
const sha384 = makeHash ( 'SHA-384' );
const sha512 = makeHash ( 'SHA-512' );

/* EXPORT */

export {sha1, sha224, sha256, sha384, sha512};
