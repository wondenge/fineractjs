

import ApiClient from '../ApiClient';
import PutRecurringDepositProductsChanges from './PutRecurringDepositProductsChanges';

/**
 * The PutRecurringDepositProductsResponse model module.
 * @module model/PutRecurringDepositProductsResponse
 * @version 1.0
 */
class PutRecurringDepositProductsResponse {
    /**
     * Constructs a new <code>PutRecurringDepositProductsResponse</code>.
     * PutRecurringDepositProductsResponse
     * @alias module:model/PutRecurringDepositProductsResponse
     */
    constructor() { 
        
        PutRecurringDepositProductsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRecurringDepositProductsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRecurringDepositProductsResponse} obj Optional instance to populate.
     * @return {module:model/PutRecurringDepositProductsResponse} The populated <code>PutRecurringDepositProductsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRecurringDepositProductsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutRecurringDepositProductsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutRecurringDepositProductsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutRecurringDepositProductsChanges} changes
 */
PutRecurringDepositProductsResponse.prototype['changes'] = undefined;






export default PutRecurringDepositProductsResponse;

