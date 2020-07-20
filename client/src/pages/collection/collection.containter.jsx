import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionPage from "./collection.component";
import { withSpinner } from "../../components/with-spinner/withSpinner";

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION_BY_TITLE}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, data }) => {
      if (loading) return <withSpinner />;
      const { getCollectionsByTitle } = data;
      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);
