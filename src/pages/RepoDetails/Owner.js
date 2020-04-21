import React from 'react'
import { number, string } from 'prop-types'
import { LocationPin } from '@styled-icons/entypo/LocationPin'
import { Avatar, OwnerData, Row } from './RepoDetails.style'

const Owner = ({
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
}) => (
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
        {`${followers} followers`}
      </a>
      <a href={reposUrl} target="_blank" rel="noopener noreferrer">
        {`${publicRepos} public repos`}
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

Owner.propTypes = {
  avatar_url: string.isRequired,
  bio: string.isRequired,
  company: string,
  followers: number.isRequired,
  followers_url: string.isRequired,
  html_url: string.isRequired,
  location: string.isRequired,
  login: string.isRequired,
  public_repos: number.isRequired,
  repos_url: string.isRequired,
}

Owner.defaultProps = {
  company: null,
}

export default Owner
