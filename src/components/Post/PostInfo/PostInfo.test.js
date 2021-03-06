// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import PostInfo from './PostInfo';

describe('PostInfo', () => {
  it('renders correctly', () => {
    const props = {
      date: '2021-03-06',
      tags: [
        'test_0',
        'test_1'
      ],
      tagSlugs: [
        '/test_0',
        '/test_1'
      ]
    };

    const tree = renderer.create(<PostInfo {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});