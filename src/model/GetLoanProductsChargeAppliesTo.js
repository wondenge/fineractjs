

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsChargeAppliesTo model module.
 * @module model/GetLoanProductsChargeAppliesTo
 * @version 1.0
 */
class GetLoanProductsChargeAppliesTo {
    /**
     * Constructs a new <code>GetLoanProductsChargeAppliesTo</code>.
     * @alias module:model/GetLoanProductsChargeAppliesTo
     */
    constructor() { 
        
        GetLoanProductsChargeAppliesTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsChargeAppliesTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsChargeAppliesTo} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsChargeAppliesTo} The populated <code>GetLoanProductsChargeAppliesTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsChargeAppliesTo();

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
GetLoanProductsChargeAppliesTo.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsChargeAppliesTo.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsChargeAppliesTo.prototype['description'] = undefined;






export default GetLoanProductsChargeAppliesTo;

