import React from 'react'
import { PATH } from '../../constants'
import { Padding } from '../layout'
import { Button } from '../button'
import { ItemInfo } from '../item-info'
import { renderMediaType } from '../media-types'
import { VisuallyHidden } from '../visually-hidden'
import styles from './styles.module.scss'
import { ResponsiveMasonry } from '../../components/responsive-masonry'

export const SearchItem = (props) => {
  return (
    <Button key={props.id} to={`${PATH.OBJKT}/${props.id}`}>
      <div className={styles.container}>
        {renderMediaType({
          mimeType: props.mime,
          artifactUri: props.artifact_uri,
          displayUri: props.display_uri,
          displayView: true
        })}
      </div>
      {/* <div>{props.title}</div>
      <div>{props.description}</div> */}
    </Button>
  )
}