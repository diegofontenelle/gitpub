import React from 'react'
import { number, shape, string } from 'prop-types'
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Avatar, OwnerData, Row } from './RepoDetails.style'

const Owner = ({ data }) => {
  const {
    avatar_url: avatarUrl,
    bio,
    company,
    followers,
    followers_url: followersUrl,
    html_url: htmlUrl,
    location,
    login,
    public_repos: publicRepos,
    repos_url: reposUrl,
  } = data

  return (
    <OwnerData>
      <Row align="center" justify="flex-start" spacing={1}>
        <Avatar src={avatarUrl} alt="Owner avatar" />
        <h2>
          {login}
          {company && <p>@{company}</p>}
        </h2>
      </Row>

      <Row>
        <a href={followersUrl} target="_blank" rel="noopener noreferrer">
          {followers} followers
        </a>
        <a href={reposUrl} target="_blank" rel="noopener noreferrer">
          {publicRepos} public repos
        </a>
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
          Github page
        </a>
      </Row>

      <Row>
        <p>{bio || `${login} does not have a bio :(`}</p>
      </Row>

      {location && (
        <Row>
          <span>
            <LocationPin width="16" /> {location}
          </span>
        </Row>
      )}
    </OwnerData>
  )
}

Owner.propTypes = {
  data: shape({
    avatar_url: string,
    bio: string,
    company: string,
    followers: number,
    followers_url: string,
    html_url: string,
    login: string,
    public_repos: number,
    repos_url: string,
  }).isRequired,
}

export default Owner
