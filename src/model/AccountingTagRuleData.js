import ApiClient from '../ApiClient';
import CodeValueData from './CodeValueData';

/**
 * The AccountingTagRuleData model module.
 * @module model/AccountingTagRuleData
 * @version 1.0
 */
class AccountingTagRuleData {
    /**
     * Constructs a new <code>AccountingTagRuleData</code>.
     * @alias module:model/AccountingTagRuleData
     */
    constructor() {

        AccountingTagRuleData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) {
    }

    /**
     * Constructs a <code>AccountingTagRuleData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountingTagRuleData} obj Optional instance to populate.
     * @return {module:model/AccountingTagRuleData} The populated <code>AccountingTagRuleData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountingTagRuleData();

            if (data.hasOwnProperty('tag')) {
                obj['tag'] = CodeValueData.constructFromObject(data['tag']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CodeValueData} tag
 */
AccountingTagRuleData.prototype['tag'] = undefined;


export default AccountingTagRuleData;

