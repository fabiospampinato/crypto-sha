
/* IMPORT */

import benchmark from 'benchloop';
import {sha1, sha256, sha384, sha512} from '../dist/index.js';

/* HELPERS */

const INPUT = 'The quick brown fox jumps over the lazy dog';

/* MAIN */

benchmark.config ({
  iterations: 10_000
})

for ( const format of ['buffer', 'uint8', 'hex'] ) {

  benchmark.group ( format, () => {

    benchmark ({
      name: 'SHA-1',
      fn: async () => {
        await sha1[format]( INPUT );
      }
    });

    benchmark ({
      name: 'SHA-256',
      fn: async () => {
        await sha256[format]( INPUT );
      }
    });

    benchmark ({
      name: 'SHA-384',
      fn: async () => {
        await sha384[format]( INPUT );
      }
    });

    benchmark ({
      name: 'SHA-512',
      fn: async () => {
        await sha512[format]( INPUT );
      }
    });

  });

}

benchmark.summary ();
