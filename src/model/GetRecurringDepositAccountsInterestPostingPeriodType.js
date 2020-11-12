

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsInterestPostingPeriodType model module.
 * @module model/GetRecurringDepositAccountsInterestPostingPeriodType
 * @version 1.0
 */
class GetRecurringDepositAccountsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsInterestPostingPeriodType</code>.
     * @alias module:model/GetRecurringDepositAccountsInterestPostingPeriodType
     */
    constructor() { 
        
        GetRecurringDepositAccountsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsInterestPostingPeriodType} The populated <code>GetRecurringDepositAccountsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsInterestPostingPeriodType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositAccountsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsInterestPostingPeriodType;

