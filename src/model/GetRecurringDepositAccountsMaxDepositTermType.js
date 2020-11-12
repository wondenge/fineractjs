

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositAccountsMaxDepositTermType model module.
 * @module model/GetRecurringDepositAccountsMaxDepositTermType
 * @version 1.0
 */
class GetRecurringDepositAccountsMaxDepositTermType {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsMaxDepositTermType</code>.
     * @alias module:model/GetRecurringDepositAccountsMaxDepositTermType
     */
    constructor() { 
        
        GetRecurringDepositAccountsMaxDepositTermType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsMaxDepositTermType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsMaxDepositTermType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsMaxDepositTermType} The populated <code>GetRecurringDepositAccountsMaxDepositTermType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsMaxDepositTermType();

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
GetRecurringDepositAccountsMaxDepositTermType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositAccountsMaxDepositTermType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositAccountsMaxDepositTermType.prototype['description'] = undefined;






export default GetRecurringDepositAccountsMaxDepositTermType;

