import React, { Component } from 'react'
import ExampleComponent, { Table } from 'reactive'

export default class App extends Component<any, any> {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />

        <Table></Table>
      </div>
    )
  }
}
