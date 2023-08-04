import React from "react";
import ModalContainer from "../Container/ModalContainer";
import { useRecoilState } from "recoil";
import { filterClicked } from "../../recoil/atoms/filterClicked";

interface FilterModalProps {
  title: string;
}

export default function FilterModal({ title }: FilterModalProps) {
  const [clicked, setClicked] = useRecoilState<boolean>(filterClicked);
  return (
    <ModalContainer clicked={clicked} setClicked={setClicked} title={title}>
    
    
    </ModalContainer>
  );
}
