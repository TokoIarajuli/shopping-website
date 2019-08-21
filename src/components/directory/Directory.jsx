import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directorySelectors";
import "./Directory.scss";
import MenuItem from "../Menu-item/MenuItem";

const Directory = ({ section }) => (
  <div className="directory_menu">
    {section.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
