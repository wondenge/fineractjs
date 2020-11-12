

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge model module.
 * @module model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} The populated <code>GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge();

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
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge;

