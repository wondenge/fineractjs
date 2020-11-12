

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsClientIdProductIdAccountingRule model module.
 * @module model/GetShareAccountsClientIdProductIdAccountingRule
 * @version 1.0
 */
class GetShareAccountsClientIdProductIdAccountingRule {
    /**
     * Constructs a new <code>GetShareAccountsClientIdProductIdAccountingRule</code>.
     * @alias module:model/GetShareAccountsClientIdProductIdAccountingRule
     */
    constructor() { 
        
        GetShareAccountsClientIdProductIdAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsClientIdProductIdAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsClientIdProductIdAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsClientIdProductIdAccountingRule} The populated <code>GetShareAccountsClientIdProductIdAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsClientIdProductIdAccountingRule();

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
GetShareAccountsClientIdProductIdAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsClientIdProductIdAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsClientIdProductIdAccountingRule.prototype['description'] = undefined;






export default GetShareAccountsClientIdProductIdAccountingRule;

