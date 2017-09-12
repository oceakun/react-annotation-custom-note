import React, { PropTypes } from "react"
import Line from "./type-line"
import Connector from "./Connector"

export default class ConnectorLine extends Connector {
  getComponents({ x, y, dy, dx, radius, outerRadius, width, height }) {
    return Line({ x, y, dx, dy, radius, outerRadius, width, height })
  }
}

ConnectorLine.defaultProps = {}

ConnectorLine.propTypes = {}