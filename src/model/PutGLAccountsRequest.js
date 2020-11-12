

import ApiClient from '../ApiClient';

/**
 * The PutGLAccountsRequest model module.
 * @module model/PutGLAccountsRequest
 * @version 1.0
 */
class PutGLAccountsRequest {
    /**
     * Constructs a new <code>PutGLAccountsRequest</code>.
     * PutGLAccountsRequest
     * @alias module:model/PutGLAccountsRequest
     */
    constructor() { 
        
        PutGLAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutGLAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutGLAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PutGLAccountsRequest} The populated <code>PutGLAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutGLAccountsRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PutGLAccountsRequest.prototype['name'] = undefined;






export default PutGLAccountsRequest;

