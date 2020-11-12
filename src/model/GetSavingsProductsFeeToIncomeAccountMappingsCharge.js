

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsFeeToIncomeAccountMappingsCharge model module.
 * @module model/GetSavingsProductsFeeToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetSavingsProductsFeeToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetSavingsProductsFeeToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetSavingsProductsFeeToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetSavingsProductsFeeToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsFeeToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsFeeToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsFeeToIncomeAccountMappingsCharge} The populated <code>GetSavingsProductsFeeToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsFeeToIncomeAccountMappingsCharge();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsFeeToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsFeeToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetSavingsProductsFeeToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsProductsFeeToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetSavingsProductsFeeToIncomeAccountMappingsCharge;

