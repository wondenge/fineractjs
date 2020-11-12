

import ApiClient from '../ApiClient';

/**
 * The PostLinkDelinkAccountsToFromPocketResponse model module.
 * @module model/PostLinkDelinkAccountsToFromPocketResponse
 * @version 1.0
 */
class PostLinkDelinkAccountsToFromPocketResponse {
    /**
     * Constructs a new <code>PostLinkDelinkAccountsToFromPocketResponse</code>.
     * PostLinkDelinkAccountsToFromPocketResponse
     * @alias module:model/PostLinkDelinkAccountsToFromPocketResponse
     */
    constructor() { 
        
        PostLinkDelinkAccountsToFromPocketResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLinkDelinkAccountsToFromPocketResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLinkDelinkAccountsToFromPocketResponse} obj Optional instance to populate.
     * @return {module:model/PostLinkDelinkAccountsToFromPocketResponse} The populated <code>PostLinkDelinkAccountsToFromPocketResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLinkDelinkAccountsToFromPocketResponse();

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
PostLinkDelinkAccountsToFromPocketResponse.prototype['resourceId'] = undefined;






export default PostLinkDelinkAccountsToFromPocketResponse;

