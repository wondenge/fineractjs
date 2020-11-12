

import ApiClient from '../ApiClient';
import PutFixedDepositProductsChanges from './PutFixedDepositProductsChanges';

/**
 * The PutFixedDepositProductsProductIdResponse model module.
 * @module model/PutFixedDepositProductsProductIdResponse
 * @version 1.0
 */
class PutFixedDepositProductsProductIdResponse {
    /**
     * Constructs a new <code>PutFixedDepositProductsProductIdResponse</code>.
     * PutFixedDepositProductsProductIdResponse
     * @alias module:model/PutFixedDepositProductsProductIdResponse
     */
    constructor() { 
        
        PutFixedDepositProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFixedDepositProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFixedDepositProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/PutFixedDepositProductsProductIdResponse} The populated <code>PutFixedDepositProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFixedDepositProductsProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutFixedDepositProductsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutFixedDepositProductsProductIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutFixedDepositProductsChanges} changes
 */
PutFixedDepositProductsProductIdResponse.prototype['changes'] = undefined;






export default PutFixedDepositProductsProductIdResponse;

