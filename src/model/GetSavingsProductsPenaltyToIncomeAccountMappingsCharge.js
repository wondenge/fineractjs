

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsPenaltyToIncomeAccountMappingsCharge model module.
 * @module model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetSavingsProductsPenaltyToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetSavingsProductsPenaltyToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsPenaltyToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsPenaltyToIncomeAccountMappingsCharge} The populated <code>GetSavingsProductsPenaltyToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsPenaltyToIncomeAccountMappingsCharge();

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
GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsProductsPenaltyToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetSavingsProductsPenaltyToIncomeAccountMappingsCharge;

