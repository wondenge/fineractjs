

import ApiClient from '../ApiClient';
import PutProvisioningCriteriaResponseChanges from './PutProvisioningCriteriaResponseChanges';

/**
 * The PutProvisioningCriteriaResponse model module.
 * @module model/PutProvisioningCriteriaResponse
 * @version 1.0
 */
class PutProvisioningCriteriaResponse {
    /**
     * Constructs a new <code>PutProvisioningCriteriaResponse</code>.
     * PutProvisioningCriteriaResponse
     * @alias module:model/PutProvisioningCriteriaResponse
     */
    constructor() { 
        
        PutProvisioningCriteriaResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProvisioningCriteriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProvisioningCriteriaResponse} obj Optional instance to populate.
     * @return {module:model/PutProvisioningCriteriaResponse} The populated <code>PutProvisioningCriteriaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProvisioningCriteriaResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutProvisioningCriteriaResponseChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutProvisioningCriteriaResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutProvisioningCriteriaResponseChanges} changes
 */
PutProvisioningCriteriaResponse.prototype['changes'] = undefined;






export default PutProvisioningCriteriaResponse;

