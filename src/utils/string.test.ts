import { escapseNewline } from './string';

test('hello', () => {
  expect('Hello\nWorld').toEqual(escapseNewline('Hello\\nWorld'));
});
