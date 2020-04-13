import React from 'react'
import { number, shape, string } from 'prop-types'
import { RepoForked } from '@styled-icons/octicons/RepoForked'
import { Star } from '@styled-icons/octicons/Star'
import { IssueOpened } from '@styled-icons/octicons/IssueOpened'
import { RepoData, Row } from './RepoDetails.style'

const Repo = ({ data }) => {
  const {
    description,
    forks,
    language,
    name,
    created_at: createdDate,
    open_issues: openIssues,
    stargazers_count: stars,
  } = data
  const date = new Date(createdDate)
  const month = date.getMonth()
  const createdAt = `${date.getDate()}/${
    month > 9 ? month : `0${month}`
  }/${date.getFullYear()}`

  function formatNumber(num) {
    const numberInThousands = num / 1000
    return numberInThousands >= 1 ? `${numberInThousands}k` : num
  }

  return (
    <RepoData>
      <Row>
        <h2>{name}</h2>
      </Row>

      <Row>
        <p>{description || 'No description :('}</p>
      </Row>

      <Row>
        <span>Language: {language}</span>
        <span>Created at {createdAt}</span>
      </Row>

      <Row>
        <span>
          <RepoForked width="16" /> {formatNumber(forks)}
        </span>
        <span>
          <Star color="#f3d06b" width="20" /> {formatNumber(stars)}
        </span>
        <span>
          <IssueOpened width="16" /> Open issues: {formatNumber(openIssues)}
        </span>
      </Row>
    </RepoData>
  )
}

Repo.propTypes = {
  data: shape({
    created_at: string,
    description: string,
    forks: number,
    language: string,
    name: string,
    open_issues: string,
    stargazers_count: number,
  }).isRequired,
}

export default Repo
