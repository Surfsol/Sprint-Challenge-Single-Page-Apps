import React from "react";
import {
  Card, CardText, CardBody,
 CardSubtitle
} from 'reactstrap';


export default function LocationCard(props) {
  return(
      <div>
        <Card>
          <CardBody>
            <CardSubtitle>{props.name}</CardSubtitle>
            <CardSubtitle>{props.type}</CardSubtitle>
            <CardSubtitle>{props.dimension}</CardSubtitle>
            <CardText>{props.residents}</CardText>
          </CardBody>
        </Card>
      </div>
  )
}