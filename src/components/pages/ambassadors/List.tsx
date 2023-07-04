import { ReactNode } from 'react'
import styled from 'styled-components'

interface ListProps {
  children: ReactNode
}

const List = ({ children }: ListProps) => <ListContainer>{children}</ListContainer>

export default List

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

List.Item = styled.div``

List.ItemTitle = styled.b``

List.ItemContent = styled.span`
  opacity: 0.8;
`
