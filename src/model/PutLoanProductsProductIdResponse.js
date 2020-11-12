

import ApiClient from '../ApiClient';
import PutLoanChanges from './PutLoanChanges';

/**
 * The PutLoanProductsProductIdResponse model module.
 * @module model/PutLoanProductsProductIdResponse
 * @version 1.0
 */
class PutLoanProductsProductIdResponse {
    /**
     * Constructs a new <code>PutLoanProductsProductIdResponse</code>.
     * PutLoanProductsProductIdResponse
     * @alias module:model/PutLoanProductsProductIdResponse
     */
    constructor() { 
        
        PutLoanProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoanProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoanProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/PutLoanProductsProductIdResponse} The populated <code>PutLoanProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoanProductsProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutLoanChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutLoanProductsProductIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutLoanChanges} changes
 */
PutLoanProductsProductIdResponse.prototype['changes'] = undefined;






export default PutLoanProductsProductIdResponse;

