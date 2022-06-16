import { FC } from 'react'
import styled from 'styled-components'

import DotImage from '../images/svgs/dot.svg'

interface PaginatorProps {
  numberOfPages?: number
  currentPage: number
  setCurrentPage: (page: number) => void
  onPageClick: (page: number) => void
  className?: string
}

let Paginator: FC<PaginatorProps> = ({ numberOfPages = 2, currentPage, setCurrentPage, onPageClick, className }) => {
  const handleOnClick = (page: number) => {
    setCurrentPage(page)
    onPageClick(page)
  }

  return (
    <div className={className}>
      {Array.from({ length: numberOfPages }).map((_, index) =>
        currentPage === index ? (
          <DotImage key={`page-${index}`} />
        ) : (
          <DotImageEmpty key={`page-${index}`} onClick={() => handleOnClick(index)} />
        )
      )}
    </div>
  )
}

Paginator = styled(Paginator)`
  display: flex;
  gap: var(--spacing-2);

  svg {
    fill: ${({ theme }) => theme.textPrimary};
    width: var(--width-16);

    &:hover {
      cursor: pointer;
    }
  }
`

const DotImageEmpty = styled(DotImage)`
  fill-rule: evenodd;
  clip-rule: evenodd;
`

export default Paginator
