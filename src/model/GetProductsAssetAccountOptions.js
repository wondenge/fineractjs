

import ApiClient from '../ApiClient';
import GetAssetType from './GetAssetType';
import GetProductsLiabilityUsage from './GetProductsLiabilityUsage';
import GetProductsTagId from './GetProductsTagId';

/**
 * The GetProductsAssetAccountOptions model module.
 * @module model/GetProductsAssetAccountOptions
 * @version 1.0
 */
class GetProductsAssetAccountOptions {
    /**
     * Constructs a new <code>GetProductsAssetAccountOptions</code>.
     * @alias module:model/GetProductsAssetAccountOptions
     */
    constructor() { 
        
        GetProductsAssetAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsAssetAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsAssetAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetProductsAssetAccountOptions} The populated <code>GetProductsAssetAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsAssetAccountOptions();

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
                obj['type'] = GetAssetType.constructFromObject(data['type']);
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
GetProductsAssetAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsAssetAccountOptions.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetProductsAssetAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetProductsAssetAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetProductsAssetAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetAssetType} type
 */
GetProductsAssetAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetProductsLiabilityUsage} usage
 */
GetProductsAssetAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} description
 */
GetProductsAssetAccountOptions.prototype['description'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetProductsAssetAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetProductsTagId} tagId
 */
GetProductsAssetAccountOptions.prototype['tagId'] = undefined;






export default GetProductsAssetAccountOptions;

