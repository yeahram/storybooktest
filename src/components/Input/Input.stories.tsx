import React from 'react'
import Input from './Input'

export default {
    title:'form/Input',
    component:Input
}
export const Small = ()=><Input size='small' placeholder='Small size' />
export const Medium = ()=><Input size='medium' placeholder='Small Medium' />
export const Large = ()=><Input size='large' placeholder='Small Large' />