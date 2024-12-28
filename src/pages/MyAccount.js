import React, { useState, useEffect } from "react";
import UserDtl from "../components/my-account/UserDtl";
import HeaderMenu from "../components/my-account/HeaderMenu";
import OfferSlider from "../components/my-account/OfferSlider";
import TabList from "../components/my-account/TabList";
import LoaderModal from "../modals/LoaderModal";

function MyAccount() {
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  }, [isLoader]);
  return (
    <>
      {isLoader ? <LoaderModal /> : null}
      <div className="container main-div-hight">
        <UserDtl />
        <HeaderMenu />
        <OfferSlider />
        <TabList />
      </div>
    </>
  );
}

export default MyAccount;
