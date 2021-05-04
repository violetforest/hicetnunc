import React, { useContext, useState, setState} from 'react'
import { Button, Primary } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'

export const Favorite = () => {
  const context = useContext(HicetnuncContext)

  let isSynced = false
  const [isFavorited, setIsFavorited] = useState(false)

  if (context.acc?.address) {
    isSynced = true
  }
  else {
    isSynced = false
  }

  const favorite = function() {
    setIsFavorited(false)
    alert("favorited: " + isFavorited);
  }

  const unfavorite = function() {
    setIsFavorited(true)
    alert("unfavorited : " + isFavorited);
  }

  return (
   <span>
      {!isSynced ? <span></span> :
        [
          (isFavorited
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
