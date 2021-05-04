import React from 'react'
import { PATH } from '../../constants'
import { Padding } from '../layout'
import { Button } from '../button'
import { ItemInfo } from '../item-info'
import { renderMediaType } from '../media-types'
import { VisuallyHidden } from '../visually-hidden'
import styles from './styles.module.scss'

export const FeedItem = (props) => {
  const { token_info, token_id, owners, swaps, total_amount } = props
  const { mimeType, uri } = token_info.formats[0]

  // const url =
  //   token_info.displayUri !== ''
  //     ? token_info.displayUri
  //     : token_info.artifactUri

  return (
    <>
      <Button to={`${PATH.OBJKT}/${token_id}`}>
        <VisuallyHidden>{`Go to OBJKT: ${token_info.name}`}</VisuallyHidden>
        <div className={styles.container}>
          {renderMediaType({
            mimeType,
            uri: uri.split('//')[1],
            metadata: props,
          })}
        </div>
      </Button>
      <Padding>
        {/* 
        
render only

        */}

        <ItemInfo
          token_info={token_info}
          owners={owners}
          token_id={token_id}
          swaps={swaps}
          total_amount={total_amount}
          feed={true}
        />
      </Padding>
    </>
  )
}
