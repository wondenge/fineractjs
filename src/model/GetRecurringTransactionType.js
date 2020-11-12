

import ApiClient from '../ApiClient';

/**
 * The GetRecurringTransactionType model module.
 * @module model/GetRecurringTransactionType
 * @version 1.0
 */
class GetRecurringTransactionType {
    /**
     * Constructs a new <code>GetRecurringTransactionType</code>.
     * @alias module:model/GetRecurringTransactionType
     */
    constructor() { 
        
        GetRecurringTransactionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringTransactionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringTransactionType} obj Optional instance to populate.
     * @return {module:model/GetRecurringTransactionType} The populated <code>GetRecurringTransactionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringTransactionType();

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
            if (data.hasOwnProperty('initiateTransfer')) {
                obj['initiateTransfer'] = ApiClient.convertToType(data['initiateTransfer'], 'Boolean');
            }
            if (data.hasOwnProperty('approveTransfer')) {
                obj['approveTransfer'] = ApiClient.convertToType(data['approveTransfer'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawTransfer')) {
                obj['withdrawTransfer'] = ApiClient.convertToType(data['withdrawTransfer'], 'Boolean');
            }
            if (data.hasOwnProperty('rejectTransfer')) {
                obj['rejectTransfer'] = ApiClient.convertToType(data['rejectTransfer'], 'Boolean');
            }
            if (data.hasOwnProperty('overdraftInterest')) {
                obj['overdraftInterest'] = ApiClient.convertToType(data['overdraftInterest'], 'Boolean');
            }
            if (data.hasOwnProperty('writtenoff')) {
                obj['writtenoff'] = ApiClient.convertToType(data['writtenoff'], 'Boolean');
            }
            if (data.hasOwnProperty('overdraftFee')) {
                obj['overdraftFee'] = ApiClient.convertToType(data['overdraftFee'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringTransactionType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringTransactionType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringTransactionType.prototype['description'] = undefined;

/**
 * @member {Boolean} deposit
 */
GetRecurringTransactionType.prototype['deposit'] = undefined;

/**
 * @member {Boolean} withdrawal
 */
GetRecurringTransactionType.prototype['withdrawal'] = undefined;

/**
 * @member {Boolean} interestPosting
 */
GetRecurringTransactionType.prototype['interestPosting'] = undefined;

/**
 * @member {Boolean} feeDeduction
 */
GetRecurringTransactionType.prototype['feeDeduction'] = undefined;

/**
 * @member {Boolean} initiateTransfer
 */
GetRecurringTransactionType.prototype['initiateTransfer'] = undefined;

/**
 * @member {Boolean} approveTransfer
 */
GetRecurringTransactionType.prototype['approveTransfer'] = undefined;

/**
 * @member {Boolean} withdrawTransfer
 */
GetRecurringTransactionType.prototype['withdrawTransfer'] = undefined;

/**
 * @member {Boolean} rejectTransfer
 */
GetRecurringTransactionType.prototype['rejectTransfer'] = undefined;

/**
 * @member {Boolean} overdraftInterest
 */
GetRecurringTransactionType.prototype['overdraftInterest'] = undefined;

/**
 * @member {Boolean} writtenoff
 */
GetRecurringTransactionType.prototype['writtenoff'] = undefined;

/**
 * @member {Boolean} overdraftFee
 */
GetRecurringTransactionType.prototype['overdraftFee'] = undefined;






export default GetRecurringTransactionType;

