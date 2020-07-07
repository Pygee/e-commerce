import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import { withSpinner } from "../../components/with-spinner/withSpinner";
import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

export const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);
