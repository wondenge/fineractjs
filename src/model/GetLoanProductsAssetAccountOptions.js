

import ApiClient from '../ApiClient';
import GetLoanProductsLiabilityTagId from './GetLoanProductsLiabilityTagId';
import GetLoanProductsLiabilityType from './GetLoanProductsLiabilityType';
import GetLoanProductsLiabilityUsage from './GetLoanProductsLiabilityUsage';

/**
 * The GetLoanProductsAssetAccountOptions model module.
 * @module model/GetLoanProductsAssetAccountOptions
 * @version 1.0
 */
class GetLoanProductsAssetAccountOptions {
    /**
     * Constructs a new <code>GetLoanProductsAssetAccountOptions</code>.
     * @alias module:model/GetLoanProductsAssetAccountOptions
     */
    constructor() { 
        
        GetLoanProductsAssetAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsAssetAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsAssetAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsAssetAccountOptions} The populated <code>GetLoanProductsAssetAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsAssetAccountOptions();

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
                obj['type'] = GetLoanProductsLiabilityType.constructFromObject(data['type']);
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
GetLoanProductsAssetAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsAssetAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanProductsAssetAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetLoanProductsAssetAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetLoanProductsAssetAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityType} type
 */
GetLoanProductsAssetAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityUsage} usage
 */
GetLoanProductsAssetAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetLoanProductsAssetAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityTagId} tagId
 */
GetLoanProductsAssetAccountOptions.prototype['tagId'] = undefined;

/**
 * @member {Number} organizationRunningBalance
 */
GetLoanProductsAssetAccountOptions.prototype['organizationRunningBalance'] = undefined;






export default GetLoanProductsAssetAccountOptions;

