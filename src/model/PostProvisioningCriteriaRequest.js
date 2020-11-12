

import ApiClient from '../ApiClient';
import LoanProductData from './LoanProductData';
import ProvisioningCriteriaDefinitionData from './ProvisioningCriteriaDefinitionData';

/**
 * The PostProvisioningCriteriaRequest model module.
 * @module model/PostProvisioningCriteriaRequest
 * @version 1.0
 */
class PostProvisioningCriteriaRequest {
    /**
     * Constructs a new <code>PostProvisioningCriteriaRequest</code>.
     * PostProvisioningCriteriaRequest
     * @alias module:model/PostProvisioningCriteriaRequest
     */
    constructor() { 
        
        PostProvisioningCriteriaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostProvisioningCriteriaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostProvisioningCriteriaRequest} obj Optional instance to populate.
     * @return {module:model/PostProvisioningCriteriaRequest} The populated <code>PostProvisioningCriteriaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostProvisioningCriteriaRequest();

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
PostProvisioningCriteriaRequest.prototype['criteriaName'] = undefined;

/**
 * @member {Array.<module:model/LoanProductData>} loanProducts
 */
PostProvisioningCriteriaRequest.prototype['loanProducts'] = undefined;

/**
 * @member {Array.<module:model/ProvisioningCriteriaDefinitionData>} provisioningcriteria
 */
PostProvisioningCriteriaRequest.prototype['provisioningcriteria'] = undefined;






export default PostProvisioningCriteriaRequest;

