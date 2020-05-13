import React from "react";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, ...otherSectionProps }) => (
        <MenuItem key={id} title={title} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
