import * as assert from 'assert';

import toTitleCase from '../../utils/toTitleCase';
import toKebabLowercase from '../../utils/toKebabLowercase';
import toContinuosLowerCase from '../../utils/toContinuosLowerCase';

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

    const result1 = toTitleCase(expect1.input);
    const result2 = toTitleCase(expect2.input);
    const result3 = toTitleCase(expect3.input);
    const result4 = toTitleCase(expect4.input);
    const result5 = toTitleCase(expect5.input);

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

    const result1 = toKebabLowercase(expect1.input);
    const result2 = toKebabLowercase(expect2.input);
    const result3 = toKebabLowercase(expect3.input);
    const result4 = toKebabLowercase(expect4.input);
    const result5 = toKebabLowercase(expect5.input);

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

    const result1 = toContinuosLowerCase(expect1.input);
    const result2 = toContinuosLowerCase(expect2.input);
    const result3 = toContinuosLowerCase(expect3.input);
    const result4 = toContinuosLowerCase(expect4.input);
    const result5 = toContinuosLowerCase(expect5.input);

    assert.equal(result1, expect1.output);
    assert.equal(result2, expect2.output);
    assert.equal(result3, expect3.output);
    assert.equal(result4, expect4.output);
    assert.equal(result5, expect5.output);
  });
});
