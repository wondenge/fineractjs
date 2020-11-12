

import ApiClient from '../ApiClient';

/**
 * The LoanProductGuaranteeDetails model module.
 * @module model/LoanProductGuaranteeDetails
 * @version 1.0
 */
class LoanProductGuaranteeDetails {
    /**
     * Constructs a new <code>LoanProductGuaranteeDetails</code>.
     * @alias module:model/LoanProductGuaranteeDetails
     */
    constructor() { 
        
        LoanProductGuaranteeDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductGuaranteeDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductGuaranteeDetails} obj Optional instance to populate.
     * @return {module:model/LoanProductGuaranteeDetails} The populated <code>LoanProductGuaranteeDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductGuaranteeDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('mandatoryGuarantee')) {
                obj['mandatoryGuarantee'] = ApiClient.convertToType(data['mandatoryGuarantee'], 'Number');
            }
            if (data.hasOwnProperty('minimumGuaranteeFromOwnFunds')) {
                obj['minimumGuaranteeFromOwnFunds'] = ApiClient.convertToType(data['minimumGuaranteeFromOwnFunds'], 'Number');
            }
            if (data.hasOwnProperty('minimumGuaranteeFromGuarantor')) {
                obj['minimumGuaranteeFromGuarantor'] = ApiClient.convertToType(data['minimumGuaranteeFromGuarantor'], 'Number');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
LoanProductGuaranteeDetails.prototype['id'] = undefined;

/**
 * @member {Number} mandatoryGuarantee
 */
LoanProductGuaranteeDetails.prototype['mandatoryGuarantee'] = undefined;

/**
 * @member {Number} minimumGuaranteeFromOwnFunds
 */
LoanProductGuaranteeDetails.prototype['minimumGuaranteeFromOwnFunds'] = undefined;

/**
 * @member {Number} minimumGuaranteeFromGuarantor
 */
LoanProductGuaranteeDetails.prototype['minimumGuaranteeFromGuarantor'] = undefined;

/**
 * @member {Boolean} new
 */
LoanProductGuaranteeDetails.prototype['new'] = undefined;






export default LoanProductGuaranteeDetails;

