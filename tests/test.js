const tap = require('tap');
const f = require('..');

tap.test((t) => {
  t.plan(2);
  t.equal( typeof f, 'function' );
  t.equal( f(1, 5), 6 );
});

