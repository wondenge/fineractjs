

import ApiClient from '../ApiClient';
import PutCodesApichangesSwagger from './PutCodesApichangesSwagger';

/**
 * The PutCodesResponse model module.
 * @module model/PutCodesResponse
 * @version 1.0
 */
class PutCodesResponse {
    /**
     * Constructs a new <code>PutCodesResponse</code>.
     * PutCodesResponse
     * @alias module:model/PutCodesResponse
     */
    constructor() { 
        
        PutCodesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutCodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutCodesResponse} obj Optional instance to populate.
     * @return {module:model/PutCodesResponse} The populated <code>PutCodesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutCodesResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutCodesApichangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutCodesResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutCodesApichangesSwagger} changes
 */
PutCodesResponse.prototype['changes'] = undefined;






export default PutCodesResponse;

