

import ApiClient from '../ApiClient';

/**
 * The PutPasswordPreferencesTemplateRequest model module.
 * @module model/PutPasswordPreferencesTemplateRequest
 * @version 1.0
 */
class PutPasswordPreferencesTemplateRequest {
    /**
     * Constructs a new <code>PutPasswordPreferencesTemplateRequest</code>.
     * PutPasswordPreferencesTemplateRequest
     * @alias module:model/PutPasswordPreferencesTemplateRequest
     */
    constructor() { 
        
        PutPasswordPreferencesTemplateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutPasswordPreferencesTemplateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutPasswordPreferencesTemplateRequest} obj Optional instance to populate.
     * @return {module:model/PutPasswordPreferencesTemplateRequest} The populated <code>PutPasswordPreferencesTemplateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutPasswordPreferencesTemplateRequest();

            if (data.hasOwnProperty('validationPolicyId')) {
                obj['validationPolicyId'] = ApiClient.convertToType(data['validationPolicyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} validationPolicyId
 */
PutPasswordPreferencesTemplateRequest.prototype['validationPolicyId'] = undefined;






export default PutPasswordPreferencesTemplateRequest;

