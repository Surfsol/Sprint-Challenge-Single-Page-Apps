import React from "react";

export default function CharacterCard(props) {
  return <span>{props.name} {props.species} {props.status} {props.type}</span>;
}
