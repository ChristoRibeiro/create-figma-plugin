/** @jsx h */
import { h } from 'preact'

import { Text } from '../text/text'
import { Columns } from './columns'

export default { title: 'Columns' }

const style = {
  backgroundColor: '#daebf7'
}

export const NoSpace = function () {
  return (
    <Columns>
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export const ExtraSmallSpace = function () {
  return (
    <Columns space="extraSmall">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export const SmallSpace = function () {
  return (
    <Columns space="small">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export const MediumSpace = function () {
  return (
    <Columns space="medium">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export const LargeSpace = function () {
  return (
    <Columns space="large">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}

export const ExtraLargeSpace = function () {
  return (
    <Columns space="extraLarge">
      <div style={style}>
        <Text>foo</Text>
      </div>
      <div style={style}>
        <Text>bar</Text>
      </div>
      <div style={style}>
        <Text>baz</Text>
      </div>
    </Columns>
  )
}
