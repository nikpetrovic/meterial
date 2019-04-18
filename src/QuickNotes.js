import React, { Component } from 'react'
import { Autocomplete } from 'evergreen-ui/commonjs/autocomplete'
import { TextInput, Pane, Button } from 'evergreen-ui'

export default class QuickNotes extends Component {
  render() {
    return (
      <>
        <div>This is quick notes component</div>
        <Autocomplete
          tile="This is autocomplete title"
          onChange={item => console.log('Item changed', JSON.stringify(item))}
          items={[
            'Postanak',
            'Izlazak',
            'Levitska',
            'Brojevi',
            'Ponovljeni zakoni',
          ]}
        >
          {({
            key,
            getInputProps,
            getButtonProps,
            getRef,
            inputValue,
            openMenu,
            toggleMenu,
          }) => {
            console.log(inputValue)
            return (
              <Pane key={key} innerRef={getRef} display="flex">
                <TextInput
                  flex="1"
                  placeholder="Many Options!"
                  value={inputValue}
                  onFocus={openMenu}
                  {...getInputProps()}
                />
              </Pane>
            )
          }}
        </Autocomplete>
      </>
    )
  }
}
