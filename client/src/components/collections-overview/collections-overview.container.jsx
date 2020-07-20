import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import CollectionsOverview from "./collections-overview.component";
import { withSpinner } from "../with-spinner/withSpinner";

const GET_COLLECTIONS = gql`
  {
    collections {
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

export const CollectionsOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {({ loading, data }) => {
      if (loading) return <withSpinner />;
      return (
        <CollectionsOverview
          collections={data.collections}
        ></CollectionsOverview>
      );
    }}
  </Query>
);
