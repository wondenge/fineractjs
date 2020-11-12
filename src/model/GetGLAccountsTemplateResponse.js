

import ApiClient from '../ApiClient';
import CodeValueData from './CodeValueData';
import EnumOptionData from './EnumOptionData';
import GLAccountData from './GLAccountData';

/**
 * The GetGLAccountsTemplateResponse model module.
 * @module model/GetGLAccountsTemplateResponse
 * @version 1.0
 */
class GetGLAccountsTemplateResponse {
    /**
     * Constructs a new <code>GetGLAccountsTemplateResponse</code>.
     * GetGLAccountsTemplateResponse
     * @alias module:model/GetGLAccountsTemplateResponse
     */
    constructor() { 
        
        GetGLAccountsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGLAccountsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGLAccountsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetGLAccountsTemplateResponse} The populated <code>GetGLAccountsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGLAccountsTemplateResponse();

            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('manualEntriesAllowed')) {
                obj['manualEntriesAllowed'] = ApiClient.convertToType(data['manualEntriesAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = EnumOptionData.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = EnumOptionData.constructFromObject(data['usage']);
            }
            if (data.hasOwnProperty('accountTypeOptions')) {
                obj['accountTypeOptions'] = ApiClient.convertToType(data['accountTypeOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('usageOptions')) {
                obj['usageOptions'] = ApiClient.convertToType(data['usageOptions'], [EnumOptionData]);
            }
            if (data.hasOwnProperty('assetHeaderAccountOptions')) {
                obj['assetHeaderAccountOptions'] = ApiClient.convertToType(data['assetHeaderAccountOptions'], [GLAccountData]);
            }
            if (data.hasOwnProperty('liabilityHeaderAccountOptions')) {
                obj['liabilityHeaderAccountOptions'] = ApiClient.convertToType(data['liabilityHeaderAccountOptions'], [GLAccountData]);
            }
            if (data.hasOwnProperty('equityHeaderAccountOptions')) {
                obj['equityHeaderAccountOptions'] = ApiClient.convertToType(data['equityHeaderAccountOptions'], [GLAccountData]);
            }
            if (data.hasOwnProperty('expenseHeaderAccountOptions')) {
                obj['expenseHeaderAccountOptions'] = ApiClient.convertToType(data['expenseHeaderAccountOptions'], [GLAccountData]);
            }
            if (data.hasOwnProperty('allowedAssetsTagOptions')) {
                obj['allowedAssetsTagOptions'] = ApiClient.convertToType(data['allowedAssetsTagOptions'], [CodeValueData]);
            }
            if (data.hasOwnProperty('allowedLiabilitiesTagOptions')) {
                obj['allowedLiabilitiesTagOptions'] = ApiClient.convertToType(data['allowedLiabilitiesTagOptions'], [CodeValueData]);
            }
            if (data.hasOwnProperty('allowedEquityTagOptions')) {
                obj['allowedEquityTagOptions'] = ApiClient.convertToType(data['allowedEquityTagOptions'], [CodeValueData]);
            }
            if (data.hasOwnProperty('allowedIncomeTagOptions')) {
                obj['allowedIncomeTagOptions'] = ApiClient.convertToType(data['allowedIncomeTagOptions'], [CodeValueData]);
            }
            if (data.hasOwnProperty('allowedExpensesTagOptions')) {
                obj['allowedExpensesTagOptions'] = ApiClient.convertToType(data['allowedExpensesTagOptions'], [CodeValueData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} disabled
 */
GetGLAccountsTemplateResponse.prototype['disabled'] = undefined;

/**
 * @member {Boolean} manualEntriesAllowed
 */
GetGLAccountsTemplateResponse.prototype['manualEntriesAllowed'] = undefined;

/**
 * @member {module:model/EnumOptionData} type
 */
GetGLAccountsTemplateResponse.prototype['type'] = undefined;

/**
 * @member {module:model/EnumOptionData} usage
 */
GetGLAccountsTemplateResponse.prototype['usage'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} accountTypeOptions
 */
GetGLAccountsTemplateResponse.prototype['accountTypeOptions'] = undefined;

/**
 * @member {Array.<module:model/EnumOptionData>} usageOptions
 */
GetGLAccountsTemplateResponse.prototype['usageOptions'] = undefined;

/**
 * @member {Array.<module:model/GLAccountData>} assetHeaderAccountOptions
 */
GetGLAccountsTemplateResponse.prototype['assetHeaderAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GLAccountData>} liabilityHeaderAccountOptions
 */
GetGLAccountsTemplateResponse.prototype['liabilityHeaderAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GLAccountData>} equityHeaderAccountOptions
 */
GetGLAccountsTemplateResponse.prototype['equityHeaderAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/GLAccountData>} expenseHeaderAccountOptions
 */
GetGLAccountsTemplateResponse.prototype['expenseHeaderAccountOptions'] = undefined;

/**
 * @member {Array.<module:model/CodeValueData>} allowedAssetsTagOptions
 */
GetGLAccountsTemplateResponse.prototype['allowedAssetsTagOptions'] = undefined;

/**
 * @member {Array.<module:model/CodeValueData>} allowedLiabilitiesTagOptions
 */
GetGLAccountsTemplateResponse.prototype['allowedLiabilitiesTagOptions'] = undefined;

/**
 * @member {Array.<module:model/CodeValueData>} allowedEquityTagOptions
 */
GetGLAccountsTemplateResponse.prototype['allowedEquityTagOptions'] = undefined;

/**
 * @member {Array.<module:model/CodeValueData>} allowedIncomeTagOptions
 */
GetGLAccountsTemplateResponse.prototype['allowedIncomeTagOptions'] = undefined;

/**
 * @member {Array.<module:model/CodeValueData>} allowedExpensesTagOptions
 */
GetGLAccountsTemplateResponse.prototype['allowedExpensesTagOptions'] = undefined;






export default GetGLAccountsTemplateResponse;

