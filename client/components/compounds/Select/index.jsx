import React from 'react'

import { StyledSelect, Input, Options, Option } from './styles'

import { ArrowDown, ArrowUp, CloseIcon } from '../../../assets/icons'

const Select = ({ options, selected, placeholder, onSelect }) => {
   const [isOptionsVisible, setOptionVisibility] = React.useState(false)
   return (
      <StyledSelect>
         <Input
            title={selected || placeholder}
            onClick={() => setOptionVisibility(!isOptionsVisible)}
         >
            <div>{selected || placeholder}</div>
            <div data-type="icon">
               {selected && (
                  <span
                     onClick={e => {
                        e.stopPropagation()
                        onSelect('')
                     }}
                     title="Clear Selection"
                  >
                     <CloseIcon size={18} />
                  </span>
               )}
            </div>
            <div data-type="icon">
               <span
                  title="Toggle Options"
                  onClick={e => {
                     e.stopPropagation()
                     setOptionVisibility(!isOptionsVisible)
                  }}
               >
                  {isOptionsVisible ? (
                     <ArrowUp size={18} />
                  ) : (
                     <ArrowDown size={18} />
                  )}
               </span>
            </div>
         </Input>
         {isOptionsVisible && (
            <Options>
               {options.map(option => (
                  <Option
                     key={option.id}
                     title={option.title}
                     isSelected={selected === option.title}
                     onClick={() => {
                        onSelect(option.title)
                        setOptionVisibility(!isOptionsVisible)
                     }}
                  >
                     {option.title}
                  </Option>
               ))}
            </Options>
         )}
      </StyledSelect>
   )
}

export default Select
