/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello World"', () => {
    const app = shallow(<App />)

    expect(app.find('a').text()).toEqual('View Settings')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello World"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
