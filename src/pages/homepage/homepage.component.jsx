import React from "react";
import "./homepage.styles.scss";
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}
export default HomePage;
