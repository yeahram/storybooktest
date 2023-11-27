import React from 'react'
import Button from './Button'

export default {
    title:'form/Button',//스토리북의 Manager Area에 에 폴더 구조를 통해 나타낼 수 있습니다. '/' 를 통해 계층을 구분할 수 있습니다.
    component:Button
}

export const Primary = ()=>(
    <Button variant='primary'>Primary</Button>
)
export const Secondary = ()=>(
    <Button variant='secondary'>Secondary</Button>
)
export const Success = ()=>(
    <Button variant='success'>Success</Button>
)
export const Danger = ()=>(
    <Button variant='danger'>Danger</Button>
)

// 먼저 Template.bind({}) 구문을 통해 만들어진 Template 이라는 기본적인 틀, 즉 템플릿을 만들면 거기에 args를 할당할 수 있게 되고,
const Template = args =><Button {...args} />
export const PrimaryA = Template.bind({})
PrimaryA.args={
    variant:'primary',
    children:'PrimaryArgs'
}
export const LongPrimaryA = Template.bind({})
LongPrimaryA.arg={
    ...PrimaryA.args,
    children:'Long Primary Ags'
}
export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant:'secondary',
    children:'Secondary Args'
}