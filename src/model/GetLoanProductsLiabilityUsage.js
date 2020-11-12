

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsLiabilityUsage model module.
 * @module model/GetLoanProductsLiabilityUsage
 * @version 1.0
 */
class GetLoanProductsLiabilityUsage {
    /**
     * Constructs a new <code>GetLoanProductsLiabilityUsage</code>.
     * @alias module:model/GetLoanProductsLiabilityUsage
     */
    constructor() { 
        
        GetLoanProductsLiabilityUsage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsLiabilityUsage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsLiabilityUsage} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsLiabilityUsage} The populated <code>GetLoanProductsLiabilityUsage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsLiabilityUsage();

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
GetLoanProductsLiabilityUsage.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsLiabilityUsage.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsLiabilityUsage.prototype['description'] = undefined;






export default GetLoanProductsLiabilityUsage;

