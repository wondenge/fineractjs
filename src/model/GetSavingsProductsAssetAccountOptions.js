

import ApiClient from '../ApiClient';
import GetSavingsAssetLiabilityType from './GetSavingsAssetLiabilityType';
import GetSavingsProductsLiabilityUsage from './GetSavingsProductsLiabilityUsage';

/**
 * The GetSavingsProductsAssetAccountOptions model module.
 * @module model/GetSavingsProductsAssetAccountOptions
 * @version 1.0
 */
class GetSavingsProductsAssetAccountOptions {
    /**
     * Constructs a new <code>GetSavingsProductsAssetAccountOptions</code>.
     * @alias module:model/GetSavingsProductsAssetAccountOptions
     */
    constructor() { 
        
        GetSavingsProductsAssetAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsAssetAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsAssetAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsAssetAccountOptions} The populated <code>GetSavingsProductsAssetAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsAssetAccountOptions();

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
                obj['type'] = GetSavingsAssetLiabilityType.constructFromObject(data['type']);
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
GetSavingsProductsAssetAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetSavingsProductsAssetAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetSavingsProductsAssetAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetSavingsProductsAssetAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetSavingsProductsAssetAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetSavingsAssetLiabilityType} type
 */
GetSavingsProductsAssetAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetSavingsProductsLiabilityUsage} usage
 */
GetSavingsProductsAssetAccountOptions.prototype['usage'] = undefined;

/**
 * @member {Object} tagId
 */
GetSavingsProductsAssetAccountOptions.prototype['tagId'] = undefined;






export default GetSavingsProductsAssetAccountOptions;

