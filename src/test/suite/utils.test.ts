import * as assert from 'assert';

import { ParseString } from '../../utils/parseString';

suite('Utils test', () => {
  test('toTitleCase - should be return with all words in capitalize', () => {
    const expect1 = {
      input: 'readme-files-generator',
      output: 'Readme Files Generator',
    };

    const expect2 = {
      input: '~other.extension-name',
      output: 'Other Extension Name',
    };

    const expect3 = {
      input: 'whatsnameextension',
      output: 'Whatsnameextension',
    };

    const expect4 = {
      input: 'some any file',
      output: 'Some Any File',
    };

    const expect5 = {
      input: 'some any a with o b de file',
      output: 'Some Any a With o b De File',
    };

    const result1 = new ParseString(expect1.input).toTitleCase();
    const result2 = new ParseString(expect2.input).toTitleCase();
    const result3 = new ParseString(expect3.input).toTitleCase();
    const result4 = new ParseString(expect4.input).toTitleCase();
    const result5 = new ParseString(expect5.input).toTitleCase();

    assert.equal(result1, expect1.output);
    assert.equal(result2, expect2.output);
    assert.equal(result3, expect3.output);
    assert.equal(result4, expect4.output);
    assert.equal(result5, expect5.output);
  });

  test('toKebabLowerCase - should be pass the text to lowercase and transform in kebab-case', () => {
    const expect1 = {
      input: 'Readme Files Generator',
      output: 'readme-files-generator',
    };

    const expect2 = {
      input: 'Other Extension Name',
      output: 'other-extension-name',
    };

    const expect3 = {
      input: 'Whatsnameextension',
      output: 'whatsnameextension',
    };

    const expect4 = {
      input: 'Some Any File',
      output: 'some-any-file',
    };

    const expect5 = {
      input: 'Some Any a With o b De File',
      output: 'some-any-a-with-o-b-de-file',
    };

    const result1 = new ParseString(expect1.input).toKebabLowerCase();
    const result2 = new ParseString(expect2.input).toKebabLowerCase();
    const result3 = new ParseString(expect3.input).toKebabLowerCase();
    const result4 = new ParseString(expect4.input).toKebabLowerCase();
    const result5 = new ParseString(expect5.input).toKebabLowerCase();

    assert.equal(result1, expect1.output);
    assert.equal(result2, expect2.output);
    assert.equal(result3, expect3.output);
    assert.equal(result4, expect4.output);
    assert.equal(result5, expect5.output);
  });

  test('toContinuosLowerCase - should be pass the text to lowercase and transform in continouscase', () => {
    const expect1 = {
      input: 'Readme Files Generator',
      output: 'readmefilesgenerator',
    };

    const expect2 = {
      input: 'Other Extension Name',
      output: 'otherextensionname',
    };

    const expect3 = {
      input: 'Whatsnameextension',
      output: 'whatsnameextension',
    };

    const expect4 = {
      input: 'Some Any File',
      output: 'someanyfile',
    };

    const expect5 = {
      input: 'Some Any a With o b De File',
      output: 'someanyawithobdefile',
    };

    const result1 = new ParseString(expect1.input).toContinuosLowerCase();
    const result2 = new ParseString(expect2.input).toContinuosLowerCase();
    const result3 = new ParseString(expect3.input).toContinuosLowerCase();
    const result4 = new ParseString(expect4.input).toContinuosLowerCase();
    const result5 = new ParseString(expect5.input).toContinuosLowerCase();

    assert.equal(result1, expect1.output);
    assert.equal(result2, expect2.output);
    assert.equal(result3, expect3.output);
    assert.equal(result4, expect4.output);
    assert.equal(result5, expect5.output);
  });
});
