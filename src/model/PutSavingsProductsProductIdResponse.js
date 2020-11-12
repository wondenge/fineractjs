

import ApiClient from '../ApiClient';
import PutSavingsChanges from './PutSavingsChanges';

/**
 * The PutSavingsProductsProductIdResponse model module.
 * @module model/PutSavingsProductsProductIdResponse
 * @version 1.0
 */
class PutSavingsProductsProductIdResponse {
    /**
     * Constructs a new <code>PutSavingsProductsProductIdResponse</code>.
     * PutSavingsProductsProductIdResponse
     * @alias module:model/PutSavingsProductsProductIdResponse
     */
    constructor() { 
        
        PutSavingsProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSavingsProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSavingsProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/PutSavingsProductsProductIdResponse} The populated <code>PutSavingsProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSavingsProductsProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutSavingsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutSavingsProductsProductIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSavingsChanges} changes
 */
PutSavingsProductsProductIdResponse.prototype['changes'] = undefined;






export default PutSavingsProductsProductIdResponse;

