

import ApiClient from '../ApiClient';

/**
 * The PostProvisioningEntriesResponse model module.
 * @module model/PostProvisioningEntriesResponse
 * @version 1.0
 */
class PostProvisioningEntriesResponse {
    /**
     * Constructs a new <code>PostProvisioningEntriesResponse</code>.
     * PostProvisioningEntriesResponse
     * @alias module:model/PostProvisioningEntriesResponse
     */
    constructor() { 
        
        PostProvisioningEntriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProvisioningEntriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProvisioningEntriesResponse} obj Optional instance to populate.
     * @return {module:model/PostProvisioningEntriesResponse} The populated <code>PostProvisioningEntriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProvisioningEntriesResponse();

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
PostProvisioningEntriesResponse.prototype['resourceId'] = undefined;






export default PostProvisioningEntriesResponse;

