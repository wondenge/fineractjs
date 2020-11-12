

import ApiClient from '../ApiClient';

/**
 * The GetLoanChargeTemplateChargeAppliesTo model module.
 * @module model/GetLoanChargeTemplateChargeAppliesTo
 * @version 1.0
 */
class GetLoanChargeTemplateChargeAppliesTo {
    /**
     * Constructs a new <code>GetLoanChargeTemplateChargeAppliesTo</code>.
     * @alias module:model/GetLoanChargeTemplateChargeAppliesTo
     */
    constructor() { 
        
        GetLoanChargeTemplateChargeAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanChargeTemplateChargeAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanChargeTemplateChargeAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetLoanChargeTemplateChargeAppliesTo} The populated <code>GetLoanChargeTemplateChargeAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanChargeTemplateChargeAppliesTo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanChargeTemplateChargeAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanChargeTemplateChargeAppliesTo.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanChargeTemplateChargeAppliesTo.prototype['description'] = undefined;






export default GetLoanChargeTemplateChargeAppliesTo;

