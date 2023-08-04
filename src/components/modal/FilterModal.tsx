import React from "react";
import ModalContainer from "../Container/ModalContainer";

interface FilterModalProps {
  clicked: boolean;
  title: string;
}

export default function FilterModal({ clicked, title }: FilterModalProps) {
  return <ModalContainer clicked={clicked}>{title}</ModalContainer>;
}
