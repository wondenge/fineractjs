

import ApiClient from '../ApiClient';

/**
 * The GetRecurringTransactionsTransactionType model module.
 * @module model/GetRecurringTransactionsTransactionType
 * @version 1.0
 */
class GetRecurringTransactionsTransactionType {
    /**
     * Constructs a new <code>GetRecurringTransactionsTransactionType</code>.
     * @alias module:model/GetRecurringTransactionsTransactionType
     */
    constructor() { 
        
        GetRecurringTransactionsTransactionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringTransactionsTransactionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringTransactionsTransactionType} obj Optional instance to populate.
     * @return {module:model/GetRecurringTransactionsTransactionType} The populated <code>GetRecurringTransactionsTransactionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringTransactionsTransactionType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('deposit')) {
                obj['deposit'] = ApiClient.convertToType(data['deposit'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawal')) {
                obj['withdrawal'] = ApiClient.convertToType(data['withdrawal'], 'Boolean');
            }
            if (data.hasOwnProperty('interestPosting')) {
                obj['interestPosting'] = ApiClient.convertToType(data['interestPosting'], 'Boolean');
            }
            if (data.hasOwnProperty('feeDeduction')) {
                obj['feeDeduction'] = ApiClient.convertToType(data['feeDeduction'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringTransactionsTransactionType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringTransactionsTransactionType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringTransactionsTransactionType.prototype['description'] = undefined;

/**
 * @member {Boolean} deposit
 */
GetRecurringTransactionsTransactionType.prototype['deposit'] = undefined;

/**
 * @member {Boolean} withdrawal
 */
GetRecurringTransactionsTransactionType.prototype['withdrawal'] = undefined;

/**
 * @member {Boolean} interestPosting
 */
GetRecurringTransactionsTransactionType.prototype['interestPosting'] = undefined;

/**
 * @member {Boolean} feeDeduction
 */
GetRecurringTransactionsTransactionType.prototype['feeDeduction'] = undefined;






export default GetRecurringTransactionsTransactionType;

