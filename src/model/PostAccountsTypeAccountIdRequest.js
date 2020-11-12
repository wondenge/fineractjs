

import ApiClient from '../ApiClient';
import PostAccountsRequestedShares from './PostAccountsRequestedShares';

/**
 * The PostAccountsTypeAccountIdRequest model module.
 * @module model/PostAccountsTypeAccountIdRequest
 * @version 1.0
 */
class PostAccountsTypeAccountIdRequest {
    /**
     * Constructs a new <code>PostAccountsTypeAccountIdRequest</code>.
     * PostAccountsTypeAccountIdRequest
     * @alias module:model/PostAccountsTypeAccountIdRequest
     */
    constructor() { 
        
        PostAccountsTypeAccountIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostAccountsTypeAccountIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostAccountsTypeAccountIdRequest} obj Optional instance to populate.
     * @return {module:model/PostAccountsTypeAccountIdRequest} The populated <code>PostAccountsTypeAccountIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostAccountsTypeAccountIdRequest();

            if (data.hasOwnProperty('requestedShares')) {
                obj['requestedShares'] = ApiClient.convertToType(data['requestedShares'], [PostAccountsRequestedShares]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PostAccountsRequestedShares>} requestedShares
 */
PostAccountsTypeAccountIdRequest.prototype['requestedShares'] = undefined;






export default PostAccountsTypeAccountIdRequest;

