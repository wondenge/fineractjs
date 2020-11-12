

import ApiClient from '../ApiClient';
import AccountingTagRuleData from './AccountingTagRuleData';

/**
 * The GetAccountRulesResponse model module.
 * @module model/GetAccountRulesResponse
 * @version 1.0
 */
class GetAccountRulesResponse {
    /**
     * Constructs a new <code>GetAccountRulesResponse</code>.
     * GetAccountRulesResponse
     * @alias module:model/GetAccountRulesResponse
     */
    constructor() { 
        
        GetAccountRulesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountRulesResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountRulesResponse} The populated <code>GetAccountRulesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountRulesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('systemDefined')) {
                obj['systemDefined'] = ApiClient.convertToType(data['systemDefined'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMultipleDebitEntries')) {
                obj['allowMultipleDebitEntries'] = ApiClient.convertToType(data['allowMultipleDebitEntries'], 'Boolean');
            }
            if (data.hasOwnProperty('allowMultipleCreditEntries')) {
                obj['allowMultipleCreditEntries'] = ApiClient.convertToType(data['allowMultipleCreditEntries'], 'Boolean');
            }
            if (data.hasOwnProperty('creditTags')) {
                obj['creditTags'] = ApiClient.convertToType(data['creditTags'], [AccountingTagRuleData]);
            }
            if (data.hasOwnProperty('debitTags')) {
                obj['debitTags'] = ApiClient.convertToType(data['debitTags'], [AccountingTagRuleData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountRulesResponse.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetAccountRulesResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetAccountRulesResponse.prototype['officeName'] = undefined;

/**
 * @member {String} name
 */
GetAccountRulesResponse.prototype['name'] = undefined;

/**
 * @member {String} description
 */
GetAccountRulesResponse.prototype['description'] = undefined;

/**
 * @member {Boolean} systemDefined
 */
GetAccountRulesResponse.prototype['systemDefined'] = undefined;

/**
 * @member {Boolean} allowMultipleDebitEntries
 */
GetAccountRulesResponse.prototype['allowMultipleDebitEntries'] = undefined;

/**
 * @member {Boolean} allowMultipleCreditEntries
 */
GetAccountRulesResponse.prototype['allowMultipleCreditEntries'] = undefined;

/**
 * @member {Array.<module:model/AccountingTagRuleData>} creditTags
 */
GetAccountRulesResponse.prototype['creditTags'] = undefined;

/**
 * @member {Array.<module:model/AccountingTagRuleData>} debitTags
 */
GetAccountRulesResponse.prototype['debitTags'] = undefined;






export default GetAccountRulesResponse;

