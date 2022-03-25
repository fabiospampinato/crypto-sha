
/* IMPORT */

import crypto from 'crypto';

/* HELPERS */

const makeHash = ( algorithm: 'sha1' | 'sha256' | 'sha384' | 'sha512' ) => {

  return ( buffer: Uint8Array | string ): Promise<string> => {

    buffer = ( typeof buffer === 'string' ) ? new TextEncoder ().encode ( buffer ) : buffer;

    const hash = crypto.createHash ( algorithm );
    const hex = hash.update ( buffer ).digest ( 'hex' );

    return Promise.resolve ( hex );

  };

};

/* MAIN */

const sha1 = makeHash ( 'sha1' );
const sha256 = makeHash ( 'sha256' );
const sha384 = makeHash ( 'sha384' );
const sha512 = makeHash ( 'sha512' );

/* EXPORT */

export {sha1, sha256, sha384, sha512};
