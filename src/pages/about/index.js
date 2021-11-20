import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import { Primary, Button } from '../../components/button'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import { BottomBanner } from '../../components/bottom-banner'
import { getLanguage } from '../../constants'
import styles from './styles.module.scss'

export class About extends Component {
  static contextType = HicetnuncContext

  language = getLanguage()

  state = {
    reveal: false,
  }

  reveal = () => {
    this.setState({
      reveal: !this.state.reveal,
    })
  }

  render() {
    return (
      <Page title="about" large>
        
        <Container>
          <Padding>
            <div>
              This site includes features that were developed during HEN but never pushed to production, and possibly new features in the future.
            </div>
            &nbsp;
            <div>
              <strong>Additional features:</strong>
            </div>
            &nbsp;
            <ul>
              <li>
                rollover on OBJKTs in profile pages shows title, price, and collect button (designed and coded by @crzypatchwork (rafael lima), @_ufffd (kyle grover), & @violet_forest)
              </li>
              &nbsp;
              <li>
              feed of latest mints by wallets of which you've collected (designed and coded by @violet_forest and @secondcass (Cass) (Coming soon)
              </li>
              &nbsp;
              <li>
              finish language selection feature started by @andrevenancio (Coming soon, maybe)
              </li>
            </ul>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <strong>This site is not in charge of fees.</strong>
          </Padding>
        </Container>

        <BottomBanner>
        </BottomBanner>
      </Page>
    )
  }
}
