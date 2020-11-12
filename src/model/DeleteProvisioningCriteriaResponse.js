

import ApiClient from '../ApiClient';

/**
 * The DeleteProvisioningCriteriaResponse model module.
 * @module model/DeleteProvisioningCriteriaResponse
 * @version 1.0
 */
class DeleteProvisioningCriteriaResponse {
    /**
     * Constructs a new <code>DeleteProvisioningCriteriaResponse</code>.
     * DeleteProvisioningCriteriaResponse
     * @alias module:model/DeleteProvisioningCriteriaResponse
     */
    constructor() { 
        
        DeleteProvisioningCriteriaResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteProvisioningCriteriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteProvisioningCriteriaResponse} obj Optional instance to populate.
     * @return {module:model/DeleteProvisioningCriteriaResponse} The populated <code>DeleteProvisioningCriteriaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteProvisioningCriteriaResponse();

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
DeleteProvisioningCriteriaResponse.prototype['resourceId'] = undefined;






export default DeleteProvisioningCriteriaResponse;

