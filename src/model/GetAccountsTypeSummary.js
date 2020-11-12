

import ApiClient from '../ApiClient';
import GetAccountsChargesCurrency from './GetAccountsChargesCurrency';

/**
 * The GetAccountsTypeSummary model module.
 * @module model/GetAccountsTypeSummary
 * @version 1.0
 */
class GetAccountsTypeSummary {
    /**
     * Constructs a new <code>GetAccountsTypeSummary</code>.
     * @alias module:model/GetAccountsTypeSummary
     */
    constructor() { 
        
        GetAccountsTypeSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeSummary} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeSummary} The populated <code>GetAccountsTypeSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountsChargesCurrency.constructFromObject(data['currency']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetAccountsChargesCurrency} currency
 */
GetAccountsTypeSummary.prototype['currency'] = undefined;






export default GetAccountsTypeSummary;

