

import ApiClient from '../ApiClient';
import GetSavingsProductsIncomeType from './GetSavingsProductsIncomeType';
import GetSavingsProductsLiabilityUsage from './GetSavingsProductsLiabilityUsage';

/**
 * The GetSavingsProductsIncomeAccountOptions model module.
 * @module model/GetSavingsProductsIncomeAccountOptions
 * @version 1.0
 */
class GetSavingsProductsIncomeAccountOptions {
    /**
     * Constructs a new <code>GetSavingsProductsIncomeAccountOptions</code>.
     * @alias module:model/GetSavingsProductsIncomeAccountOptions
     */
    constructor() { 
        
        GetSavingsProductsIncomeAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsIncomeAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsIncomeAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsIncomeAccountOptions} The populated <code>GetSavingsProductsIncomeAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsIncomeAccountOptions();

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
                obj['type'] = GetSavingsProductsIncomeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = GetSavingsProductsLiabilityUsage.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = ApiClient.convertToType(data['tagId'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsIncomeAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsIncomeAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsIncomeAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetSavingsProductsIncomeAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetSavingsProductsIncomeAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetSavingsProductsIncomeType} type
 */
GetSavingsProductsIncomeAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityUsage} usage
 */
GetSavingsProductsIncomeAccountOptions.prototype['usage'] = undefined;

/**
 * @member {Object} tagId
 */
GetSavingsProductsIncomeAccountOptions.prototype['tagId'] = undefined;






export default GetSavingsProductsIncomeAccountOptions;

