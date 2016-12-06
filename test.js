'use strict';

import test from 'ava';
import bubu from './';

test(t => {
  t.is(bubu(1), 1);
});

test(t => {
  t.deepEqual(bubu([]), []);
});

test(t => {
  t.deepEqual(bubu({answer: 42}), {answer: 42});
});


test(t => {
  t.is(bubu(() => 4), 4);
});
