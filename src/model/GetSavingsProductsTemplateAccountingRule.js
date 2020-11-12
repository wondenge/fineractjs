

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsTemplateAccountingRule model module.
 * @module model/GetSavingsProductsTemplateAccountingRule
 * @version 1.0
 */
class GetSavingsProductsTemplateAccountingRule {
    /**
     * Constructs a new <code>GetSavingsProductsTemplateAccountingRule</code>.
     * @alias module:model/GetSavingsProductsTemplateAccountingRule
     */
    constructor() { 
        
        GetSavingsProductsTemplateAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsTemplateAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsTemplateAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsTemplateAccountingRule} The populated <code>GetSavingsProductsTemplateAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsTemplateAccountingRule();

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
GetSavingsProductsTemplateAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsTemplateAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsTemplateAccountingRule.prototype['description'] = undefined;






export default GetSavingsProductsTemplateAccountingRule;

