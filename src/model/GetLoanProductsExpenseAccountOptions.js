

import ApiClient from '../ApiClient';
import GetLoanProductsExpenseType from './GetLoanProductsExpenseType';
import GetLoanProductsLiabilityTagId from './GetLoanProductsLiabilityTagId';
import GetLoanProductsLiabilityUsage from './GetLoanProductsLiabilityUsage';

/**
 * The GetLoanProductsExpenseAccountOptions model module.
 * @module model/GetLoanProductsExpenseAccountOptions
 * @version 1.0
 */
class GetLoanProductsExpenseAccountOptions {
    /**
     * Constructs a new <code>GetLoanProductsExpenseAccountOptions</code>.
     * @alias module:model/GetLoanProductsExpenseAccountOptions
     */
    constructor() { 
        
        GetLoanProductsExpenseAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsExpenseAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsExpenseAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsExpenseAccountOptions} The populated <code>GetLoanProductsExpenseAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsExpenseAccountOptions();

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
                obj['type'] = GetLoanProductsExpenseType.constructFromObject(data['type']);
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
GetLoanProductsExpenseAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsExpenseAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanProductsExpenseAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetLoanProductsExpenseAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetLoanProductsExpenseAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetLoanProductsExpenseType} type
 */
GetLoanProductsExpenseAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityUsage} usage
 */
GetLoanProductsExpenseAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetLoanProductsExpenseAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityTagId} tagId
 */
GetLoanProductsExpenseAccountOptions.prototype['tagId'] = undefined;

/**
 * @member {Number} organizationRunningBalance
 */
GetLoanProductsExpenseAccountOptions.prototype['organizationRunningBalance'] = undefined;






export default GetLoanProductsExpenseAccountOptions;

