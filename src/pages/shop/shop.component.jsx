import React from 'react';
// import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import CollectionPage from '../collection/collection.component';

const ShopPage = () => (
  <div className='shop-page'>
    <CollectionsOverview/>
    {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`/:collectionId`} component={CollectionPage} /> */}
  </div>
);

export default ShopPage;
