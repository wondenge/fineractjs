

import ApiClient from '../ApiClient';

/**
 * The PostAccountsTypeResponse model module.
 * @module model/PostAccountsTypeResponse
 * @version 1.0
 */
class PostAccountsTypeResponse {
    /**
     * Constructs a new <code>PostAccountsTypeResponse</code>.
     * PostAccountsTypeResponse
     * @alias module:model/PostAccountsTypeResponse
     */
    constructor() { 
        
        PostAccountsTypeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsTypeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsTypeResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountsTypeResponse} The populated <code>PostAccountsTypeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsTypeResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PostAccountsTypeResponse.prototype['resourceId'] = undefined;






export default PostAccountsTypeResponse;

