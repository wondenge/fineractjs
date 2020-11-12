

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsAccountingRule model module.
 * @module model/GetLoanProductsAccountingRule
 * @version 1.0
 */
class GetLoanProductsAccountingRule {
    /**
     * Constructs a new <code>GetLoanProductsAccountingRule</code>.
     * @alias module:model/GetLoanProductsAccountingRule
     */
    constructor() { 
        
        GetLoanProductsAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsAccountingRule} The populated <code>GetLoanProductsAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsAccountingRule();

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
GetLoanProductsAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsAccountingRule.prototype['description'] = undefined;






export default GetLoanProductsAccountingRule;

