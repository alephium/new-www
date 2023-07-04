import { FC, ReactNode } from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'

import { deviceBreakPoints } from '../styles/global-style'

import TextSnippet from './TextSnippet'
import CloseIcon from '../images/svgs/close-line.svg'

ReactModal.setAppElement('#___gatsby')

export interface ModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title?: string
  children?: ReactNode
  className?: string
}

const Modal = ({ isOpen, setIsOpen, title, children, className }: ModalProps) => (
  <ReactModal
    isOpen={isOpen}
    contentLabel={`${title} modal`}
    shouldCloseOnOverlayClick={true}
    onRequestClose={() => setIsOpen(false)}
    portalClassName={className}
    className="modal"
    overlayClassName="overlay"
    closeTimeoutMS={200}
  >
    <div className="close" onClick={() => setIsOpen(false)} role="button">
      <CloseIcon />
    </div>
    <div className="content">
      <TextSnippetStyled title={title} bigText>
        {children}
      </TextSnippetStyled>
    </div>
  </ReactModal>
)

export default styled(Modal)`
  .modal {
    position: relative;
    background-color: ${({ theme }) => theme.bgPrimary};
    border-radius: var(--radius);
    border: 1px solid ${({ theme }) => theme.separator};
    max-height: 80%;
    max-width: calc(var(--page-width) * 0.7);
    padding: var(--spacing-5) var(--spacing-8);
    box-sizing: border-box;
    margin: 0 var(--spacing-4);
    display: flex;

    @media ${deviceBreakPoints.smallMobile} {
      padding: var(--spacing-12) var(--spacing-3) var(--spacing-5);
    }
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5000;

    transition: opacity 200ms ease-in-out;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-5) var(--spacing-8) var(--spacing-5) 0;
    margin: calc(var(--spacing-5) * -1) calc(var(--spacing-8) * -1) calc(var(--spacing-5) * -1) 0;

    a {
      color: ${({ theme }) => theme.linkAlt};
    }
  }

  .close {
    position: absolute;
    left: 1rem;
    padding-top: 2px;
    background-color: transparent;

    @media ${deviceBreakPoints.smallMobile} {
      top: 1rem;
    }

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${({ theme }) => theme.textPrimary};
    }
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  > h2,
  > h3 {
    margin-bottom: var(--spacing-4);
  }

  .text-content {
    color: ${({ theme }) => theme.textSecondary};

    h3,
    h4 {
      color: ${({ theme }) => theme.textPrimary};
    }
  }
`
