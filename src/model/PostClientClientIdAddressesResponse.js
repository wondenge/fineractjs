

import ApiClient from '../ApiClient';

/**
 * The PostClientClientIdAddressesResponse model module.
 * @module model/PostClientClientIdAddressesResponse
 * @version 1.0
 */
class PostClientClientIdAddressesResponse {
    /**
     * Constructs a new <code>PostClientClientIdAddressesResponse</code>.
     * PostClientClientIdAddressesResponse
     * @alias module:model/PostClientClientIdAddressesResponse
     */
    constructor() { 
        
        PostClientClientIdAddressesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientClientIdAddressesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientClientIdAddressesResponse} obj Optional instance to populate.
     * @return {module:model/PostClientClientIdAddressesResponse} The populated <code>PostClientClientIdAddressesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientClientIdAddressesResponse();

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
PostClientClientIdAddressesResponse.prototype['resourceId'] = undefined;






export default PostClientClientIdAddressesResponse;

