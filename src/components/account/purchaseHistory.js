import React, { Component } from "react";

import PageTitle from '../../components/pageTitle'; 

class PurchaseHistory extends Component {
    render() {
        return (
            <div className="purchase-history">
                 <PageTitle className='purchase-history__page-title' title='Purcahse History'/>
            </div>
        )
    }
}

export default PurchaseHistory;