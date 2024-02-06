import React from 'react'
import { Button } from '@chakra-ui/react'
import { action, actions } from '@storybook/addon-actions'
import { text, boolean } from "@storybook/addon-knobs"
export default {
    title: 'Chakra/Button',
    component: Button,
    // argTypes: { onClick: { action: 'clicked' } }
}

export const Success = () => <Button colorScheme="blue" onClick={action('click handler')} >Success</Button>
export const Danger = () => <Button {...actions('onClick', 'onMouseOver')} colorScheme='red'>Danger</Button>
export const Log = () => <Button onClick={() => console.log('Button clicked', process.env.STORYBOOK_THEME)} colorScheme='yellow'>log</Button>



export const Knobs = () => <Button disabled={boolean("Disabled", false)} colorScheme='purple'>{text('Lable', 'Button Lable')}</Button>
