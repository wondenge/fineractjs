

import ApiClient from '../ApiClient';
import GetSavingsProductsLiabilityTagId from './GetSavingsProductsLiabilityTagId';
import GetSavingsProductsLiabilityType from './GetSavingsProductsLiabilityType';
import GetSavingsProductsLiabilityUsage from './GetSavingsProductsLiabilityUsage';

/**
 * The GetSavingsProductsLiabilityAccountOptions model module.
 * @module model/GetSavingsProductsLiabilityAccountOptions
 * @version 1.0
 */
class GetSavingsProductsLiabilityAccountOptions {
    /**
     * Constructs a new <code>GetSavingsProductsLiabilityAccountOptions</code>.
     * @alias module:model/GetSavingsProductsLiabilityAccountOptions
     */
    constructor() { 
        
        GetSavingsProductsLiabilityAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsLiabilityAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsLiabilityAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsLiabilityAccountOptions} The populated <code>GetSavingsProductsLiabilityAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsLiabilityAccountOptions();

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
                obj['type'] = GetSavingsProductsLiabilityType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = GetSavingsProductsLiabilityUsage.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('nameDecorated')) {
                obj['nameDecorated'] = ApiClient.convertToType(data['nameDecorated'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = GetSavingsProductsLiabilityTagId.constructFromObject(data['tagId']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsLiabilityAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsLiabilityAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsLiabilityAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetSavingsProductsLiabilityAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetSavingsProductsLiabilityAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityType} type
 */
GetSavingsProductsLiabilityAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityUsage} usage
 */
GetSavingsProductsLiabilityAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetSavingsProductsLiabilityAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityTagId} tagId
 */
GetSavingsProductsLiabilityAccountOptions.prototype['tagId'] = undefined;






export default GetSavingsProductsLiabilityAccountOptions;

