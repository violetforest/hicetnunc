import React from 'react'
import { PATH } from '../../constants'
import { Padding } from '../layout'
import { Button } from '../button'
import { ItemInfo } from '../item-info'
import { renderMediaType } from '../media-types'
import { VisuallyHidden } from '../visually-hidden'
import styles from './styles.module.scss'

export const SearchItem = (props) => {
  return (
    <Padding>
      <Button to={`${PATH.OBJKT}/${props.id}`}>
        <div>{props.title}</div>
        <div>{props.description}</div>
      </Button>
    </Padding>
  )
}
