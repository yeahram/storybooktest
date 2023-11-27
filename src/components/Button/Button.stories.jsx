import React from 'react'
import Button from './Button'

export default {
    title:'control/Button',//이곳에서 폴더구조를 만들수있다. button 만 적었으면 button하나만 존재하지만 form을 앞에 적으면 상위 폴더를 추가할 수 있따.
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