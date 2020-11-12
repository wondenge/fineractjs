import ApiClient from '../ApiClient';
import AccountingTagRuleData from './AccountingTagRuleData';

/**
 * The AccountingRuleData model module.
 * @module model/AccountingRuleData
 * @version 1.0
 */
class AccountingRuleData {
    /**
     * Constructs a new <code>AccountingRuleData</code>.
     * @alias module:model/AccountingRuleData
     */
    constructor() {

        AccountingRuleData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>AccountingRuleData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountingRuleData} obj Optional instance to populate.
     * @return {module:model/AccountingRuleData} The populated <code>AccountingRuleData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountingRuleData();

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
 * @member {Array.<module:model/AccountingTagRuleData>} creditTags
 */
AccountingRuleData.prototype['creditTags'] = undefined;

/**
 * @member {Array.<module:model/AccountingTagRuleData>} debitTags
 */
AccountingRuleData.prototype['debitTags'] = undefined;


export default AccountingRuleData;

