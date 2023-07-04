import { useStaticQuery, graphql, navigate } from 'gatsby'
import Modal from '../../Modal'
import { WindowLocation } from '@reach/router'

interface ModalTermsAndConditionsProps {
  location: WindowLocation<unknown>
}

const ModalTermsAndConditions = ({ location }: ModalTermsAndConditionsProps) => {
  const params = new URLSearchParams(location.search)

  const isOpen = params.get('modal') === 'terms'

  const setIsClosed = (shouldBeOpen: boolean) => {
    if (!shouldBeOpen) {
      params.delete('modal')
      const newSearch = params.toString()
      navigate(location.pathname + '?' + newSearch + location.hash)
    }
  }

  const { modal } = useStaticQuery(graphql`
    query {
      modal: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/modals/ambassadors-terms.md/" } }) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }
    }
  `)

  const data = modal.nodes[0]

  return (
    <Modal title={data.frontmatter.title} isOpen={isOpen} setIsOpen={setIsClosed}>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </Modal>
  )
}

export default ModalTermsAndConditions
