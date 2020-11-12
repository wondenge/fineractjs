

import ApiClient from '../ApiClient';

/**
 * The PostProvisioningCriteriaResponse model module.
 * @module model/PostProvisioningCriteriaResponse
 * @version 1.0
 */
class PostProvisioningCriteriaResponse {
    /**
     * Constructs a new <code>PostProvisioningCriteriaResponse</code>.
     * PostProvisioningCriteriaResponse
     * @alias module:model/PostProvisioningCriteriaResponse
     */
    constructor() { 
        
        PostProvisioningCriteriaResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProvisioningCriteriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProvisioningCriteriaResponse} obj Optional instance to populate.
     * @return {module:model/PostProvisioningCriteriaResponse} The populated <code>PostProvisioningCriteriaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProvisioningCriteriaResponse();

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
PostProvisioningCriteriaResponse.prototype['resourceId'] = undefined;






export default PostProvisioningCriteriaResponse;

