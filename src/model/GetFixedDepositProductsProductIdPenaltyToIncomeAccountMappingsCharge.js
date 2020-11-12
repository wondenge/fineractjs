

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge model module.
 * @module model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge
 * @version 1.0
 */
class GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge {
    /**
     * Constructs a new <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code>.
     * @alias module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge
     */
    constructor() { 
        
        GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge} The populated <code>GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge();

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
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['name'] = undefined;

/**
 * @member {Boolean} active
 */
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['active'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge.prototype['penalty'] = undefined;






export default GetFixedDepositProductsProductIdPenaltyToIncomeAccountMappingsCharge;

