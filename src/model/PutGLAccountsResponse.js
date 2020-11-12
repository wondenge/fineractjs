

import ApiClient from '../ApiClient';
import PutGLAccountsResponsechangesSwagger from './PutGLAccountsResponsechangesSwagger';

/**
 * The PutGLAccountsResponse model module.
 * @module model/PutGLAccountsResponse
 * @version 1.0
 */
class PutGLAccountsResponse {
    /**
     * Constructs a new <code>PutGLAccountsResponse</code>.
     * PutGLAccountsResponse
     * @alias module:model/PutGLAccountsResponse
     */
    constructor() { 
        
        PutGLAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGLAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGLAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PutGLAccountsResponse} The populated <code>PutGLAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGLAccountsResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutGLAccountsResponsechangesSwagger.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutGLAccountsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutGLAccountsResponsechangesSwagger} changes
 */
PutGLAccountsResponse.prototype['changes'] = undefined;






export default PutGLAccountsResponse;

