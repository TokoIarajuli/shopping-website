import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import "./Collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection_page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem hey={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
