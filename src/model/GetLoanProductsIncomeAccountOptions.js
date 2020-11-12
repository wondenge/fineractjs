

import ApiClient from '../ApiClient';
import GetLoanProductsIncomeType from './GetLoanProductsIncomeType';
import GetLoanProductsLiabilityTagId from './GetLoanProductsLiabilityTagId';
import GetLoanProductsLiabilityUsage from './GetLoanProductsLiabilityUsage';

/**
 * The GetLoanProductsIncomeAccountOptions model module.
 * @module model/GetLoanProductsIncomeAccountOptions
 * @version 1.0
 */
class GetLoanProductsIncomeAccountOptions {
    /**
     * Constructs a new <code>GetLoanProductsIncomeAccountOptions</code>.
     * @alias module:model/GetLoanProductsIncomeAccountOptions
     */
    constructor() { 
        
        GetLoanProductsIncomeAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsIncomeAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsIncomeAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsIncomeAccountOptions} The populated <code>GetLoanProductsIncomeAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsIncomeAccountOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetLoanProductsIncomeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = GetLoanProductsLiabilityUsage.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = GetLoanProductsLiabilityTagId.constructFromObject(data['tagId']);
            }
            if (data.hasOwnProperty('organizationRunningBalance')) {
                obj['organizationRunningBalance'] = ApiClient.convertToType(data['organizationRunningBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanProductsIncomeAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsIncomeAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanProductsIncomeAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetLoanProductsIncomeAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetLoanProductsIncomeAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetLoanProductsIncomeType} type
 */
GetLoanProductsIncomeAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityUsage} usage
 */
GetLoanProductsIncomeAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetLoanProductsIncomeAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityTagId} tagId
 */
GetLoanProductsIncomeAccountOptions.prototype['tagId'] = undefined;

/**
 * @member {Number} organizationRunningBalance
 */
GetLoanProductsIncomeAccountOptions.prototype['organizationRunningBalance'] = undefined;






export default GetLoanProductsIncomeAccountOptions;

