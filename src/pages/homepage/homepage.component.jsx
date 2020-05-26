import React from "react";
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";
import HomePageContainer from "./homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
export default HomePage;
