

import ApiClient from '../ApiClient';
import PutHookResponseChangesSwagger from './PutHookResponseChangesSwagger';

/**
 * The PutHookResponse model module.
 * @module model/PutHookResponse
 * @version 1.0
 */
class PutHookResponse {
    /**
     * Constructs a new <code>PutHookResponse</code>.
     * PutHookResponse
     * @alias module:model/PutHookResponse
     */
    constructor() { 
        
        PutHookResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutHookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutHookResponse} obj Optional instance to populate.
     * @return {module:model/PutHookResponse} The populated <code>PutHookResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutHookResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutHookResponseChangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutHookResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutHookResponseChangesSwagger} changes
 */
PutHookResponse.prototype['changes'] = undefined;






export default PutHookResponse;

