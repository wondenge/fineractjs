

import ApiClient from '../ApiClient';

/**
 * The GetProductsAccountingRule model module.
 * @module model/GetProductsAccountingRule
 * @version 1.0
 */
class GetProductsAccountingRule {
    /**
     * Constructs a new <code>GetProductsAccountingRule</code>.
     * @alias module:model/GetProductsAccountingRule
     */
    constructor() { 
        
        GetProductsAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetProductsAccountingRule} The populated <code>GetProductsAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsAccountingRule();

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
GetProductsAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetProductsAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetProductsAccountingRule.prototype['description'] = undefined;






export default GetProductsAccountingRule;

