

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsRecurringDepositFrequencyType model module.
 * @module model/GetRecurringDepositAccountsRecurringDepositFrequencyType
 * @version 1.0
 */
class GetRecurringDepositAccountsRecurringDepositFrequencyType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsRecurringDepositFrequencyType</code>.
     * @alias module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType
     */
    constructor() { 
        
        GetRecurringDepositAccountsRecurringDepositFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsRecurringDepositFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsRecurringDepositFrequencyType} The populated <code>GetRecurringDepositAccountsRecurringDepositFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsRecurringDepositFrequencyType();

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
GetRecurringDepositAccountsRecurringDepositFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsRecurringDepositFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsRecurringDepositFrequencyType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsRecurringDepositFrequencyType;

