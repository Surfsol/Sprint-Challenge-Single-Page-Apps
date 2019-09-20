import React from "react";
import {
  Card, CardBody,
 CardSubtitle
} from 'reactstrap';


export default function LocationCard(props) {
  return(
      <div>
        <Card>
          <CardBody>
            <CardSubtitle>{props.name}</CardSubtitle>
            <CardSubtitle>{props.airdate}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
  )
}