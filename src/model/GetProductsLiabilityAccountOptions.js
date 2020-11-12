

import ApiClient from '../ApiClient';
import GetProductsLiabilityType from './GetProductsLiabilityType';
import GetProductsLiabilityUsage from './GetProductsLiabilityUsage';
import GetProductsTagId from './GetProductsTagId';

/**
 * The GetProductsLiabilityAccountOptions model module.
 * @module model/GetProductsLiabilityAccountOptions
 * @version 1.0
 */
class GetProductsLiabilityAccountOptions {
    /**
     * Constructs a new <code>GetProductsLiabilityAccountOptions</code>.
     * @alias module:model/GetProductsLiabilityAccountOptions
     */
    constructor() { 
        
        GetProductsLiabilityAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsLiabilityAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsLiabilityAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetProductsLiabilityAccountOptions} The populated <code>GetProductsLiabilityAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsLiabilityAccountOptions();

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
                obj['type'] = GetProductsLiabilityType.constructFromObject(data['type']);
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
GetProductsLiabilityAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsLiabilityAccountOptions.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetProductsLiabilityAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetProductsLiabilityAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetProductsLiabilityAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetProductsLiabilityType} type
 */
GetProductsLiabilityAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetProductsLiabilityUsage} usage
 */
GetProductsLiabilityAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} description
 */
GetProductsLiabilityAccountOptions.prototype['description'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetProductsLiabilityAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetProductsTagId} tagId
 */
GetProductsLiabilityAccountOptions.prototype['tagId'] = undefined;






export default GetProductsLiabilityAccountOptions;

