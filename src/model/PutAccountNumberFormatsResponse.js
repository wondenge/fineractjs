

import ApiClient from '../ApiClient';
import PutAccountNumberFormatschangesSwagger from './PutAccountNumberFormatschangesSwagger';

/**
 * The PutAccountNumberFormatsResponse model module.
 * @module model/PutAccountNumberFormatsResponse
 * @version 1.0
 */
class PutAccountNumberFormatsResponse {
    /**
     * Constructs a new <code>PutAccountNumberFormatsResponse</code>.
     * PutAccountNumberFormatsResponse
     * @alias module:model/PutAccountNumberFormatsResponse
     */
    constructor() { 
        
        PutAccountNumberFormatsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutAccountNumberFormatsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutAccountNumberFormatsResponse} obj Optional instance to populate.
     * @return {module:model/PutAccountNumberFormatsResponse} The populated <code>PutAccountNumberFormatsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutAccountNumberFormatsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutAccountNumberFormatschangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutAccountNumberFormatsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutAccountNumberFormatschangesSwagger} changes
 */
PutAccountNumberFormatsResponse.prototype['changes'] = undefined;






export default PutAccountNumberFormatsResponse;

