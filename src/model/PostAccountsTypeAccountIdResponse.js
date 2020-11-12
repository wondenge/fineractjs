

import ApiClient from '../ApiClient';

/**
 * The PostAccountsTypeAccountIdResponse model module.
 * @module model/PostAccountsTypeAccountIdResponse
 * @version 1.0
 */
class PostAccountsTypeAccountIdResponse {
    /**
     * Constructs a new <code>PostAccountsTypeAccountIdResponse</code>.
     * PostAccountsTypeAccountIdResponse
     * @alias module:model/PostAccountsTypeAccountIdResponse
     */
    constructor() { 
        
        PostAccountsTypeAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsTypeAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsTypeAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PostAccountsTypeAccountIdResponse} The populated <code>PostAccountsTypeAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsTypeAccountIdResponse();

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
PostAccountsTypeAccountIdResponse.prototype['resourceId'] = undefined;






export default PostAccountsTypeAccountIdResponse;

