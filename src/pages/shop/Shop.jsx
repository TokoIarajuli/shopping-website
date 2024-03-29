import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import Collection from "../collection/Collection";

const ShopPage = ({ match }) => (
  <div className="shop_page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
