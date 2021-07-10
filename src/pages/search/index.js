import React, { Component } from 'react'
import { Page, Container, Padding } from '../../components/layout'
import {SearchItem} from '../../components/search-item'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ResponsiveMasonry } from '../../components/responsive-masonry'

const axios = require('axios')

export class Search extends Component {
  static contextType = HicetnuncContext

  state = {
    tags: [],
    search: '',
    results: [],
    queried: false,
    searchCat: 'subjkt'
  }

  componentWillMount = async () => {
    await axios.get(process.env.REACT_APP_UNIQUE_TAGS).then(res => this.setState({ tags: res.data.result }))
    this.state.tags.map(e => console.log(e))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRadioChange = (e) => {
    this.setState({
      searchCat: e.target.value,
      queried: false
    })
  }

  search = async () => {
    // search for alias
    // 
    if (this.state.search.length < 3) {
      alert('too short - search must be at least 3 characters')
      return;
    }

    if (this.state.queried == false) this.setState({queried:true})
    console.log(this.state.searchCat)

    if (this.state.searchCat == "subjkt") {
      let subjkt_results = this.searchSubjkt(this.state.search)
    } else if (this.state.searchCat == "objkt") {
      let objkt_results = this.searchObjkt(this.state.search)
    }

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

  searchObjkt = async (search_query) => {
    const query = `
      query searchObjkt($search_query: String) {
        hic_et_nunc_token(where: {title: {_ilike: $search_query}}) {
          title
          description
          metadata
          thumbnail_uri
          id
          mime
          display_uri
          artifact_uri
          thumbnail_uri
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

    const { errors, data } = await fetchGraphQL(query, "searchObjkt", {"search_query":search_query});
    if (errors) {
      console.error(errors);
    }
    const result = data.hic_et_nunc_token
    console.log({ result })
    this.setState({ results: result })
    return result
  }

  render() {
    return (
      <Page title="Search">
        <Container>
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            placeholder="search">
          </input>
          <input
            type="radio"
            value="subjkt"
            id="subjkt"
            name="searchCat"
            onChange={this.handleRadioChange}
            defaultChecked/>
          <label for="subjkt">subjkt</label>
          <input
            type="radio"
            value="objkt"
            id="objkt"
            name="searchCat"
            onChange={this.handleRadioChange}/>
          <label for="subjkt">objkt</label>
          <button onClick={this.search}>x</button>
            {/* {
              this.state.tags.map(e => {
                return <span>{e._id.tag} </span>
              })
            } */}
            <div className="searchResults">
            {
              this.state.queried && 
              (
                this.state.results.length > 0 ?
                (
                  this.state.searchCat == 'subjkt'
                  ? 
                  this.state.results.map(result => {
                    return <div className="searchResult">
                      {result.name} - {result.address} - {result.metadata.description}
                    </div>
                  })
                  :
                  this.state.searchCat == 'objkt'
                  ?
                  <ResponsiveMasonry>
                    {this.state.results.map((result, index) => (
                      <SearchItem key={`${result.id}-${index}`} {...result} />
                    ))}
                  </ResponsiveMasonry>
                  :
                  ""
                )
                : "No results"
              )
            }
          </div>
        </Container>
  {/*       <BottomBanner>
          Collecting has been temporarily disabled. Follow <a href="https://twitter.com/hicetnunc2000" target="_blank">@hicetnunc2000</a> or <a href="https://discord.gg/jKNy6PynPK" target="_blank">join the discord</a> for updates.
        </BottomBanner> */}
      </Page>
    )
  }
}