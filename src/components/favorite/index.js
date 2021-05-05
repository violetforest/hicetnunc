import React, { useContext, useState, setState} from 'react'
import { Button, Primary } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'

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
