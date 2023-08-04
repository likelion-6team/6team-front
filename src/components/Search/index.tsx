import React from "react";
import Wrapper from "../Container/Wrapper";
import FilterModal from "../modal/FilterModal";

export default function Search() {
  return (
    <Wrapper>
      <FilterModal title="필터" clicked={true} />
    </Wrapper>
  );
}
