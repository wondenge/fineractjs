

import ApiClient from '../ApiClient';
import GetLoanProductsLiabilityTagId from './GetLoanProductsLiabilityTagId';
import GetLoanProductsLiabilityType from './GetLoanProductsLiabilityType';
import GetLoanProductsLiabilityUsage from './GetLoanProductsLiabilityUsage';

/**
 * The GetLoanProductsLiabilityAccountOptions model module.
 * @module model/GetLoanProductsLiabilityAccountOptions
 * @version 1.0
 */
class GetLoanProductsLiabilityAccountOptions {
    /**
     * Constructs a new <code>GetLoanProductsLiabilityAccountOptions</code>.
     * @alias module:model/GetLoanProductsLiabilityAccountOptions
     */
    constructor() { 
        
        GetLoanProductsLiabilityAccountOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsLiabilityAccountOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsLiabilityAccountOptions} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsLiabilityAccountOptions} The populated <code>GetLoanProductsLiabilityAccountOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsLiabilityAccountOptions();

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
GetLoanProductsLiabilityAccountOptions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanProductsLiabilityAccountOptions.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanProductsLiabilityAccountOptions.prototype['glCode'] = undefined;

/**
 * @member {Boolean} disabled
 */
GetLoanProductsLiabilityAccountOptions.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetLoanProductsLiabilityAccountOptions.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityType} type
 */
GetLoanProductsLiabilityAccountOptions.prototype['type'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityUsage} usage
 */
GetLoanProductsLiabilityAccountOptions.prototype['usage'] = undefined;

/**
 * @member {String} nameDecorated
 */
GetLoanProductsLiabilityAccountOptions.prototype['nameDecorated'] = undefined;

/**
 * @member {module:model/GetLoanProductsLiabilityTagId} tagId
 */
GetLoanProductsLiabilityAccountOptions.prototype['tagId'] = undefined;

/**
 * @member {Number} organizationRunningBalance
 */
GetLoanProductsLiabilityAccountOptions.prototype['organizationRunningBalance'] = undefined;






export default GetLoanProductsLiabilityAccountOptions;

