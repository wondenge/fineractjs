

import ApiClient from '../ApiClient';
import LoanProductData from './LoanProductData';
import ProvisioningCriteriaDefinitionData from './ProvisioningCriteriaDefinitionData';

/**
 * The GetProvisioningCriteriaCriteriaIdResponse model module.
 * @module model/GetProvisioningCriteriaCriteriaIdResponse
 * @version 1.0
 */
class GetProvisioningCriteriaCriteriaIdResponse {
    /**
     * Constructs a new <code>GetProvisioningCriteriaCriteriaIdResponse</code>.
     * GetProvisioningCriteriaCriteriaIdResponse
     * @alias module:model/GetProvisioningCriteriaCriteriaIdResponse
     */
    constructor() { 
        
        GetProvisioningCriteriaCriteriaIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProvisioningCriteriaCriteriaIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProvisioningCriteriaCriteriaIdResponse} obj Optional instance to populate.
     * @return {module:model/GetProvisioningCriteriaCriteriaIdResponse} The populated <code>GetProvisioningCriteriaCriteriaIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProvisioningCriteriaCriteriaIdResponse();

            if (data.hasOwnProperty('criteriaId')) {
                obj['criteriaId'] = ApiClient.convertToType(data['criteriaId'], 'Number');
            }
            if (data.hasOwnProperty('criteriaName')) {
                obj['criteriaName'] = ApiClient.convertToType(data['criteriaName'], 'String');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
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
 * @member {Number} criteriaId
 */
GetProvisioningCriteriaCriteriaIdResponse.prototype['criteriaId'] = undefined;

/**
 * @member {String} criteriaName
 */
GetProvisioningCriteriaCriteriaIdResponse.prototype['criteriaName'] = undefined;

/**
 * @member {String} createdBy
 */
GetProvisioningCriteriaCriteriaIdResponse.prototype['createdBy'] = undefined;

/**
 * @member {Array.<module:model/LoanProductData>} loanProducts
 */
GetProvisioningCriteriaCriteriaIdResponse.prototype['loanProducts'] = undefined;

/**
 * @member {Array.<module:model/ProvisioningCriteriaDefinitionData>} provisioningcriteria
 */
GetProvisioningCriteriaCriteriaIdResponse.prototype['provisioningcriteria'] = undefined;






export default GetProvisioningCriteriaCriteriaIdResponse;

