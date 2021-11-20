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
              this site includes features that were developed during HEN but never pushed to production, and possibly new features in the future.
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
              feed of latest mints by wallets of which you've collected (designed and coded by @violet_forest and @secondcass (Cass) <strong>(coming soon)</strong>
              </li>
              &nbsp;
              <li>
              finish language selection feature started by @andrevenancio <strong>(coming soon, maybe)</strong>
              </li>
            </ul>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <strong>
            this site does not regulate fees unless otherwise stated
            </strong>
          </Padding>
        </Container>

        <Container>
          <Padding>
            &nbsp;
            <div>
              for inquiries or collaboration please contact <Button href="https://hicetnunc.art/violetforest"><strong>violetforest</strong></Button>
            </div>
          </Padding>
        </Container>

        <BottomBanner>
        </BottomBanner>
      </Page>
    )
  }
}
