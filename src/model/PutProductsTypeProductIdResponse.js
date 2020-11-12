

import ApiClient from '../ApiClient';
import PutProductsChanges from './PutProductsChanges';

/**
 * The PutProductsTypeProductIdResponse model module.
 * @module model/PutProductsTypeProductIdResponse
 * @version 1.0
 */
class PutProductsTypeProductIdResponse {
    /**
     * Constructs a new <code>PutProductsTypeProductIdResponse</code>.
     * PutProductsTypeProductIdResponse
     * @alias module:model/PutProductsTypeProductIdResponse
     */
    constructor() { 
        
        PutProductsTypeProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProductsTypeProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProductsTypeProductIdResponse} obj Optional instance to populate.
     * @return {module:model/PutProductsTypeProductIdResponse} The populated <code>PutProductsTypeProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProductsTypeProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutProductsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutProductsTypeProductIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutProductsChanges} changes
 */
PutProductsTypeProductIdResponse.prototype['changes'] = undefined;






export default PutProductsTypeProductIdResponse;

