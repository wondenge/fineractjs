  

import ApiClient from '../ApiClient';
import GetIncomeType from './GetIncomeType';
import GetProductsLiabilityUsage from './GetProductsLiabilityUsage';
import GetProductsTagId from './GetProductsTagId';

/**
 * The GetProductsIncomeAccountOptions model module.
 * @module model/GetProductsIncomeAccountOptions
 * @version 1.0
 */
class GetProductsIncomeAccountOptions {
    /**
     * Constructs a new <code>GetProductsIncomeAccountOptions</code>.
     * @alias module:model/GetProductsIncomeAccountOptions
     */
    constructor() { 
        
        GetProductsIncomeAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsIncomeAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsIncomeAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetProductsIncomeAccountOptions} The populated <code>GetProductsIncomeAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsIncomeAccountOptions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'String');
            }
            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetIncomeType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = GetProductsLiabilityUsage.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = GetProductsTagId.constructFromObject(data['tagId']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductsIncomeAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsIncomeAccountOptions.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetProductsIncomeAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetProductsIncomeAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetProductsIncomeAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetIncomeType} type
 */
GetProductsIncomeAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetProductsLiabilityUsage} usage
 */
GetProductsIncomeAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} description
 */
GetProductsIncomeAccountOptions.prototype['description'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetProductsIncomeAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetProductsTagId} tagId
 */
GetProductsIncomeAccountOptions.prototype['tagId'] = undefined;






export default GetProductsIncomeAccountOptions;

