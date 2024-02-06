import React from "react";
import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    argTypes: {
        variantColor: { control: 'text' },
        children: { control: 'text' },
        onClick: { action: 'clicked' }
    }
};

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />;
export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}
export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary Args'
}

export const SecondaryA = Template.bind({})
PrimaryA.args = {
    variant: 'secondary',
    children: 'Secondary Args'
}

export const SuccessA = Template.bind({})
SuccessA.args = {
    variantColor: 'green',
    children: 'Success'
}