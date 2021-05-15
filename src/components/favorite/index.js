import React, { useContext, useState, setState} from 'react'
import { Button, Primary } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import { SigningType } from '@airgap/beacon-sdk'
import { char2Bytes } from '@taquito/utils'

export const Favorite = () => {
  const context = useContext(HicetnuncContext)

  let isSynced = false
  const [canFavorite, setCanFavorite] = useState(false)
  const wallet = window.location.pathname.split('/')[2]

  if (context.acc?.address) {
    isSynced = true
  }
  else {
    isSynced = false
  }

  const favorite = function() {
    setCanFavorite(false)
    alert("canFavorite: " + wallet + " my wallet id: " + context.acc?.address);

    const bytes =
      '05' +
      char2Bytes("hicetnunc")
    console.log("bytes " + bytes)
    const payload = {
      signingType: SigningType.MICHELINE,
      payload: bytes,
      sourceAddress: this.context.addr,
    }
    console.log("payload " + payload)
    this.context.sign(payload)
  }

  const unfavorite = function() {
    setCanFavorite(true)
    alert("canFavorite : " + wallet + " my wallet id: " + context.acc?.address);
  }

  return (
   <span>
      {!isSynced ? <span></span> :
        [
          (canFavorite
            ? <Button onClick={favorite}>
                <Primary>
                  -
                </Primary>
              </Button>
            : <Button onClick={unfavorite}>
                <Primary>
                  +
                </Primary>
            </Button>
          )
        ]
      }
   </span>
  )
}
