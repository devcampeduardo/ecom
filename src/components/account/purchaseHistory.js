import React, { Component } from "react";

import PageTitle from '../../components/pageTitle'; 
import PurchaseDetail from "./purchaseDetail";
import Purchases from "./purchases";

class PurchaseHistory extends Component {
    render() {
        return (
            <div className="purchase-history">
                 <PageTitle className='purchase-history__page-title' title='Purcahse History'/>
                 <Purchases className='purchase-history__purchases'/>
                 <PurchaseDetail className='purchase-history__detail'/>
                 <div className='purchase-history__border-bottom'></div>
            </div>
        )
    }
}

export default PurchaseHistory;