

import ApiClient from '../ApiClient';
import CashierTransactionData from './CashierTransactionData';

/**
 * The PageCashierTransactionData model module.
 * @module model/PageCashierTransactionData
 * @version 1.0
 */
class PageCashierTransactionData {
    /**
     * Constructs a new <code>PageCashierTransactionData</code>.
     * @alias module:model/PageCashierTransactionData
     */
    constructor() { 
        
        PageCashierTransactionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageCashierTransactionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageCashierTransactionData} obj Optional instance to populate.
     * @return {module:model/PageCashierTransactionData} The populated <code>PageCashierTransactionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageCashierTransactionData();

            if (data.hasOwnProperty('totalFilteredRecords')) {
                obj['totalFilteredRecords'] = ApiClient.convertToType(data['totalFilteredRecords'], 'Number');
            }
            if (data.hasOwnProperty('pageItems')) {
                obj['pageItems'] = ApiClient.convertToType(data['pageItems'], [CashierTransactionData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} totalFilteredRecords
 */
PageCashierTransactionData.prototype['totalFilteredRecords'] = undefined;

/**
 * @member {Array.<module:model/CashierTransactionData>} pageItems
 */
PageCashierTransactionData.prototype['pageItems'] = undefined;






export default PageCashierTransactionData;

