/** @jsx jsx */
import { jsx } from 'theme-ui'
import './styles.scss'

const heading = Tag => {
  const Component = props => {
    return !!props.id ? (
      <Tag {...props} className={`${Tag}`}>
        {props.children}
      </Tag>
    ) : (
      <Tag {...props} className={`${Tag}`} />
    )
  }

  Component.displayName = Tag
  return Component
}
export const h1 = heading('h1')
export const h2 = heading('h2')
export const h3 = heading('h3')
export const h4 = heading('h4')
export const h5 = heading('h5')
export const h6 = heading('h6')
