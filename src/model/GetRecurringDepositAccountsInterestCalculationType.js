

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsInterestCalculationType model module.
 * @module model/GetRecurringDepositAccountsInterestCalculationType
 * @version 1.0
 */
class GetRecurringDepositAccountsInterestCalculationType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsInterestCalculationType</code>.
     * @alias module:model/GetRecurringDepositAccountsInterestCalculationType
     */
    constructor() { 
        
        GetRecurringDepositAccountsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsInterestCalculationType} The populated <code>GetRecurringDepositAccountsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsInterestCalculationType();

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
GetRecurringDepositAccountsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsInterestCalculationType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsInterestCalculationType;

