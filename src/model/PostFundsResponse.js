

import ApiClient from '../ApiClient';

/**
 * The PostFundsResponse model module.
 * @module model/PostFundsResponse
 * @version 1.0
 */
class PostFundsResponse {
    /**
     * Constructs a new <code>PostFundsResponse</code>.
     * PostFundsResponse
     * @alias module:model/PostFundsResponse
     */
    constructor() { 
        
        PostFundsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFundsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFundsResponse} obj Optional instance to populate.
     * @return {module:model/PostFundsResponse} The populated <code>PostFundsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFundsResponse();

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
PostFundsResponse.prototype['resourceId'] = undefined;






export default PostFundsResponse;

