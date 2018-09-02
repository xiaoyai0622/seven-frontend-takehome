/**
 * Created by xiaoY on 2/9/18.
 */
import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Thumbnail from '../src/Thumbnail';

test('it works', () => {
	const tree = renderer.create(<Thumbnail />).toJSON()
	expect(tree).toHaveStyleRule('width', '500px')
	expect(tree).toHaveStyleRule('height', '280px')
	
})