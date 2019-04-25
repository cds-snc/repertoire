import PropTypes from 'prop-types'
/** @jsx jsx **/
import { jsx, css } from '@emotion/core'
import { Container } from '../container'
import GoCSignature from '../gocsig'
import { FooterLink } from '../link'

export const TopBanner = props => {
  const { lang, bg } = props

  return (
    <header>
      <Container
        bg={bg}
        display="flex"
        flexDirection="row"
        width={1}
        height={[50, null, 60]}
        alignItems="center"
        data-testid="background-color"
      >
        <Container ml={3} width={[250, null, 300]}>
          <GoCSignature
            width="100%"
            lang={lang}
            flag="#fff"
            text="#fff"
            css={css`
              display: block;
            `}
          />
        </Container>
        <Container
          flex="1 1 auto"
          mr={3}
          css={css`
            text-align: right;
          `}
        />
        <FooterLink href="#" color="white" mr={3}>
          Language
        </FooterLink>
      </Container>
    </header>
  )
}

TopBanner.propTypes = {
  lang: PropTypes.string.isRequired,
  bg: PropTypes.string,
}

TopBanner.defaultProps = {
  bg: 'black',
}
