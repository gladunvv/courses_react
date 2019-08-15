import React, { Fragment } from "react";

import { StartedScreen } from "../../components/StartedScreen/StartedScreen";
import { Content } from "../../components/Content/Content";
import { Partners } from "../../components/Partners/Parthers";

export const MainPage = () => {
  return (
    <Fragment>
      <StartedScreen />
      <Content />
      <Partners />
    </Fragment>
  );
};
