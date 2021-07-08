import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import { HicetnuncContext } from '../../context/HicetnuncContext'
const axios = require('axios')

export class Search extends Component {
  static contextType = HicetnuncContext

  state = {
    tags: [],
    search: '',
    results: [],
    queried: false
  }

  componentWillMount = async () => {
    await axios.get(process.env.REACT_APP_UNIQUE_TAGS).then(res => this.setState({ tags: res.data.result }))
    this.state.tags.map(e => console.log(e))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  search = async () => {

    // search for alias
    // 
    if (this.state.search.length < 3) {
      alert('too short - search must be at least 3 characters')
      return;
    }

    if (this.state.queried == false) this.setState({queried:true})

    let subjkt_results = this.searchSubjkt(this.state.search)


    console.log(this.state.search)

  }

  searchSubjkt = async (search_query) => {
    const query = `
      query SearchSubjkt($search_query: String) {
        hic_et_nunc_holder(where: {name: {_ilike: $search_query}}, limit: 30) {
          name
          address
          metadata
        }
      }
    `;

    async function fetchGraphQL(operationsDoc, operationName, variables) {
      const result = await fetch(
        "https://api.hicdex.com/v1/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: operationsDoc,
            variables: variables,
            operationName: operationName
          })
        }
      );

      return await result.json();
    }

    const { errors, data } = await fetchGraphQL(query, "SearchSubjkt", {"search_query":search_query});
    if (errors) {
      console.error(errors);
    }
    const result = data.hic_et_nunc_holder
    console.log({ result })
    this.setState({ results: result })
    return result
  }

  render() {
    return (
      <Page>
        <Container>
          <Padding>
            <input
              type="text"
              name="search"
              onChange={this.handleChange}
              placeholder="search">
            </input>
            <button onClick={this.search}>x</button>
            {
              this.state.tags.map(e => {
                return <span>{e._id.tag} </span>
              })
            }
            <div className="searchResults">
            {
              this.state.queried && (
                this.state.results.length > 0 ? 
                this.state.results.map(result => {
                  return <div className="searchResult">
                    {result.name} - {result.address} - {result.metadata.description}
                  </div>
                }) : "No results"
              )
            }
            </div>
          </Padding>
        </Container>
      </Page>
    )
  }
}
