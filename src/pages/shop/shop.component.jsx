import React, { Component } from "react"
import SHOP_DATA from "./shop.data"

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class Shop extends Component {
  render() {
    const collections = SHOP_DATA

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop
