

import ApiClient from '../ApiClient';

/**
 * The PutProvisioningEntriesResponse model module.
 * @module model/PutProvisioningEntriesResponse
 * @version 1.0
 */
class PutProvisioningEntriesResponse {
    /**
     * Constructs a new <code>PutProvisioningEntriesResponse</code>.
     * PutProvisioningEntriesResponse
     * @alias module:model/PutProvisioningEntriesResponse
     */
    constructor() { 
        
        PutProvisioningEntriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProvisioningEntriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProvisioningEntriesResponse} obj Optional instance to populate.
     * @return {module:model/PutProvisioningEntriesResponse} The populated <code>PutProvisioningEntriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProvisioningEntriesResponse();

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
PutProvisioningEntriesResponse.prototype['resourceId'] = undefined;






export default PutProvisioningEntriesResponse;

