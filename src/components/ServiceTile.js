import * as React from "react"
import * as FontAwsome from "react-icons/fa"
import * as GameIcons from "react-icons/gi"
import * as RemixIcons from "react-icons/ri"
import { Collapse } from "react-bootstrap"

const ServiceTile = ({ icon, title, description }) => {
  const [showDescription, setShowDescription] = React.useState(false)
  const lib = icon.substring(0, 2)
  let iconC = null
  switch (lib) {
    case "Fa": {
      iconC = FontAwsome[icon]
      break
    }
    case "Gi": {
      iconC = GameIcons[icon]
      break
    }
    case "Ri": {
      iconC = RemixIcons[icon]
      break
    }
    default: {
    }
  }

  return (
    <div
      role="none"
      onClick={() => setShowDescription(!showDescription)}
      onKeyDown={() => setShowDescription(!showDescription)}
    >
      {React.createElement(iconC, { size: 60 })}
      <h4>{title}</h4>
      {
        <Collapse in={showDescription}>
          <p>{description}</p>
        </Collapse>
      }
    </div>
  )
}

export default ServiceTile
