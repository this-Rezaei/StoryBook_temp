import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input,
};

export const Small = () => <Input size='small' placeholder='Small size' />
export const Medium = () => <Input size='medium' placeholder='Medium size' />
export const large = () => <Input size='large' placeholder='Large size' />

Small.storyName = 'Small Input'