import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'

window.moment = moment
window._ = _

moment.locale('sr', {
  weekdays: [
    'nedelja',
    'ponedeljak',
    'utorak',
    'sreda',
    'četvrtak',
    'petak',
    'subota',
  ],
})

export default class Calendar extends Component {
  render() {
    return <div>{moment().format()}</div>
  }
}

const Header = () => {
  return <div>{}</div>
}
