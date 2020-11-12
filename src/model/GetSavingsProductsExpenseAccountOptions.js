

import ApiClient from '../ApiClient';
import GetSavingsProductsExpenseType from './GetSavingsProductsExpenseType';
import GetSavingsProductsLiabilityUsage from './GetSavingsProductsLiabilityUsage';

/**
 * The GetSavingsProductsExpenseAccountOptions model module.
 * @module model/GetSavingsProductsExpenseAccountOptions
 * @version 1.0
 */
class GetSavingsProductsExpenseAccountOptions {
    /**
     * Constructs a new <code>GetSavingsProductsExpenseAccountOptions</code>.
     * @alias module:model/GetSavingsProductsExpenseAccountOptions
     */
    constructor() { 
        
        GetSavingsProductsExpenseAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsExpenseAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsExpenseAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsExpenseAccountOptions} The populated <code>GetSavingsProductsExpenseAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsExpenseAccountOptions();

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
                obj['type'] = GetSavingsProductsExpenseType.constructFromObject(data['type']);
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
GetSavingsProductsExpenseAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsExpenseAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsExpenseAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetSavingsProductsExpenseAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetSavingsProductsExpenseAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetSavingsProductsExpenseType} type
 */
GetSavingsProductsExpenseAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityUsage} usage
 */
GetSavingsProductsExpenseAccountOptions.prototype['usage'] = undefined;

/**
 * @member {Object} tagId
 */
GetSavingsProductsExpenseAccountOptions.prototype['tagId'] = undefined;






export default GetSavingsProductsExpenseAccountOptions;

