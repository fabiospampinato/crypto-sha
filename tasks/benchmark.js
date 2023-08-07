
/* IMPORT */

import benchmark from 'benchloop';
import {sha1, sha256, sha384, sha512} from '../dist/index.js';

/* HELPERS */

const INPUT = 'The quick brown fox jumps over the lazy dog';

/* MAIN */

benchmark.config ({
  iterations: 100_000
})

benchmark ({
  name: 'SHA-1',
  fn: async () => {
    await sha1 ( INPUT );
  }
});

benchmark ({
  name: 'SHA-256',
  fn: async () => {
    await sha256 ( INPUT );
  }
});

benchmark ({
  name: 'SHA-384',
  fn: async () => {
    await sha384 ( INPUT );
  }
});

benchmark ({
  name: 'SHA-512',
  fn: async () => {
    await sha512 ( INPUT );
  }
});

benchmark.summary ();
