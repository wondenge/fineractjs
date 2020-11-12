

import ApiClient from '../ApiClient';

/**
 * The PostFundsRequest model module.
 * @module model/PostFundsRequest
 * @version 1.0
 */
class PostFundsRequest {
    /**
     * Constructs a new <code>PostFundsRequest</code>.
     * PostFundsRequest
     * @alias module:model/PostFundsRequest
     */
    constructor() { 
        
        PostFundsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFundsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFundsRequest} obj Optional instance to populate.
     * @return {module:model/PostFundsRequest} The populated <code>PostFundsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFundsRequest();

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
PostFundsRequest.prototype['name'] = undefined;






export default PostFundsRequest;

