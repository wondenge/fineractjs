

import ApiClient from '../ApiClient';

/**
 * The GetProvisioningCriteriaResponse model module.
 * @module model/GetProvisioningCriteriaResponse
 * @version 1.0
 */
class GetProvisioningCriteriaResponse {
    /**
     * Constructs a new <code>GetProvisioningCriteriaResponse</code>.
     * GetProvisioningCriteriaResponse
     * @alias module:model/GetProvisioningCriteriaResponse
     */
    constructor() { 
        
        GetProvisioningCriteriaResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProvisioningCriteriaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProvisioningCriteriaResponse} obj Optional instance to populate.
     * @return {module:model/GetProvisioningCriteriaResponse} The populated <code>GetProvisioningCriteriaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProvisioningCriteriaResponse();

            if (data.hasOwnProperty('criteriaId')) {
                obj['criteriaId'] = ApiClient.convertToType(data['criteriaId'], 'Number');
            }
            if (data.hasOwnProperty('criteriaName')) {
                obj['criteriaName'] = ApiClient.convertToType(data['criteriaName'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} criteriaId
 */
GetProvisioningCriteriaResponse.prototype['criteriaId'] = undefined;

/**
 * @member {String} criteriaName
 */
GetProvisioningCriteriaResponse.prototype['criteriaName'] = undefined;

/**
 * @member {String} createdBy
 */
GetProvisioningCriteriaResponse.prototype['createdBy'] = undefined;






export default GetProvisioningCriteriaResponse;

