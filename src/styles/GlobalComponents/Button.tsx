import React from 'react'

import { ButtonBack, ButtonFront } from './index'

export default function Button (props: any) { 
    return (
      <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
        <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
      </ButtonBack>
    );
}

