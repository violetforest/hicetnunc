import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import { Button, Primary } from '../../components/button'
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
            <div className={styles.buttons}>
              <strong>Additional features:</strong>
            </div>
              &nbsp;
                <p>
                  + rollover on OBJKTs in profile pages shows title, price, and collect button (designed and coded by @crzypatchwork (rafael lima), UFFD (kyle grover), and violetforest)
                </p>
                <p>
                  + feed of latest mints by wallets of which you've collected (designed and coded by @violet_forest and @secondcass)
                </p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <strong>hic et nunc</strong>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[0]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[1]}</p>
          </Padding>
        </Container>

        <Container>
          <Padding>
            <p>{this.language.about.paragraphs[2]}</p>
          </Padding>
        </Container>

        <BottomBanner>
        </BottomBanner>
      </Page>
    )
  }
}
