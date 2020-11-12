

import ApiClient from '../ApiClient';
import GetEquityType from './GetEquityType';
import GetProductsLiabilityUsage from './GetProductsLiabilityUsage';
import GetProductsTagId from './GetProductsTagId';

/**
 * The GetProductsEquityAccountOptions model module.
 * @module model/GetProductsEquityAccountOptions
 * @version 1.0
 */
class GetProductsEquityAccountOptions {
    /**
     * Constructs a new <code>GetProductsEquityAccountOptions</code>.
     * @alias module:model/GetProductsEquityAccountOptions
     */
    constructor() { 
        
        GetProductsEquityAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsEquityAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsEquityAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetProductsEquityAccountOptions} The populated <code>GetProductsEquityAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsEquityAccountOptions();

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
                obj['type'] = GetEquityType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = GetProductsLiabilityUsage.constructFromObject(data['usage']);
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
GetProductsEquityAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProductsEquityAccountOptions.prototype['name'] = undefined;

/**
 * @member {String} glCode
 */
GetProductsEquityAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetProductsEquityAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetProductsEquityAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetEquityType} type
 */
GetProductsEquityAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetProductsLiabilityUsage} usage
 */
GetProductsEquityAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetProductsEquityAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetProductsTagId} tagId
 */
GetProductsEquityAccountOptions.prototype['tagId'] = undefined;






export default GetProductsEquityAccountOptions;

