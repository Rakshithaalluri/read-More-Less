// Write your code here
// Write your code here
import {useState} from 'react'

import {
  ReactHooksContainer,
  ReactHooksDetailsContainer,
  ReactHooksHeading,
  ReactDescriptionContainer,
  ReactText,
  ReactImage,
  ReactDescription,
  ReactReadMoreButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 171)
  const [reading, setReading] = useState(false)

  const onReadMoreLess = () => {
    setReading(prevState => !prevState)
  }

  return (
    <ReactHooksContainer>
      <ReactHooksDetailsContainer>
        <ReactHooksHeading> React Hooks </ReactHooksHeading>
        <ReactText>Hooks are a new addition to React </ReactText>
        <ReactDescriptionContainer>
          <ReactImage
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          {reading ? (
            <ReactDescription>{reactHooksDescription}</ReactDescription>
          ) : (
            <ReactDescription>{slicedDescription}</ReactDescription>
          )}

          {reading ? (
            <ReactReadMoreButton onClick={onReadMoreLess}>
              {' '}
              Read Less{' '}
            </ReactReadMoreButton>
          ) : (
            <ReactReadMoreButton onClick={onReadMoreLess}>
              {' '}
              Read More{' '}
            </ReactReadMoreButton>
          )}
        </ReactDescriptionContainer>
      </ReactHooksDetailsContainer>
    </ReactHooksContainer>
  )
}

export default ReadMore
