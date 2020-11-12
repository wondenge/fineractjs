

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsDepositPeriodFrequency model module.
 * @module model/GetRecurringDepositAccountsDepositPeriodFrequency
 * @version 1.0
 */
class GetRecurringDepositAccountsDepositPeriodFrequency {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsDepositPeriodFrequency</code>.
     * @alias module:model/GetRecurringDepositAccountsDepositPeriodFrequency
     */
    constructor() { 
        
        GetRecurringDepositAccountsDepositPeriodFrequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsDepositPeriodFrequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsDepositPeriodFrequency} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsDepositPeriodFrequency} The populated <code>GetRecurringDepositAccountsDepositPeriodFrequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsDepositPeriodFrequency();

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
GetRecurringDepositAccountsDepositPeriodFrequency.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsDepositPeriodFrequency.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsDepositPeriodFrequency.prototype['description'] = undefined;






export default GetRecurringDepositAccountsDepositPeriodFrequency;

