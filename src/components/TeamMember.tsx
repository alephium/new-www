import { FC } from 'react'
import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import ResponsiveImage from './ResponsiveImage'

export interface TeamMemberProps {
  name: string
  role: string
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  className?: string
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, image, className }) => (
  <div className={className}>
    <ResponsiveImage image={{ src: image, altText: name }} />
    <TeamMemberName>{name}</TeamMemberName>
    <TeamMemberRole>{role}</TeamMemberRole>
  </div>
)

const TeamMemberName = styled.div`
  font-weight: var(--fontWeight-bold);
  margin-top: var(--spacing-2);
`

const TeamMemberRole = styled.div`
  font-size: var(--fontSize-14);
  line-height: var(--lineHeight-22);
  color: ${({ theme }) => theme.textSecondary};
`

export default TeamMember
