

import ApiClient from '../ApiClient';
import LoanProductData from './LoanProductData';
import ProvisioningCriteriaDefinitionData from './ProvisioningCriteriaDefinitionData';

/**
 * The PutProvisioningCriteriaRequest model module.
 * @module model/PutProvisioningCriteriaRequest
 * @version 1.0
 */
class PutProvisioningCriteriaRequest {
    /**
     * Constructs a new <code>PutProvisioningCriteriaRequest</code>.
     * PutProvisioningCriteriaRequest
     * @alias module:model/PutProvisioningCriteriaRequest
     */
    constructor() { 
        
        PutProvisioningCriteriaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProvisioningCriteriaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProvisioningCriteriaRequest} obj Optional instance to populate.
     * @return {module:model/PutProvisioningCriteriaRequest} The populated <code>PutProvisioningCriteriaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProvisioningCriteriaRequest();

            if (data.hasOwnProperty('criteriaName')) {
                obj['criteriaName'] = ApiClient.convertToType(data['criteriaName'], 'String');
            }
            if (data.hasOwnProperty('loanProducts')) {
                obj['loanProducts'] = ApiClient.convertToType(data['loanProducts'], [LoanProductData]);
            }
            if (data.hasOwnProperty('provisioningcriteria')) {
                obj['provisioningcriteria'] = ApiClient.convertToType(data['provisioningcriteria'], [ProvisioningCriteriaDefinitionData]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} criteriaName
 */
PutProvisioningCriteriaRequest.prototype['criteriaName'] = undefined;

/**
 * @member {Array.<module:model/LoanProductData>} loanProducts
 */
PutProvisioningCriteriaRequest.prototype['loanProducts'] = undefined;

/**
 * @member {Array.<module:model/ProvisioningCriteriaDefinitionData>} provisioningcriteria
 */
PutProvisioningCriteriaRequest.prototype['provisioningcriteria'] = undefined;






export default PutProvisioningCriteriaRequest;

