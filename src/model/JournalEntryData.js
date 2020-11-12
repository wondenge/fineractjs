

import ApiClient from '../ApiClient';
import EnumOptionData from './EnumOptionData';

/**
 * The JournalEntryData model module.
 * @module model/JournalEntryData
 * @version 1.0
 */
class JournalEntryData {
    /**
     * Constructs a new <code>JournalEntryData</code>.
     * @alias module:model/JournalEntryData
     */
    constructor() { 
        
        JournalEntryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryData} obj Optional instance to populate.
     * @return {module:model/JournalEntryData} The populated <code>JournalEntryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('glAccountId')) {
                obj['glAccountId'] = ApiClient.convertToType(data['glAccountId'], 'Number');
            }
            if (data.hasOwnProperty('glAccountType')) {
                obj['glAccountType'] = EnumOptionData.constructFromObject(data['glAccountType']);
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'Date');
            }
            if (data.hasOwnProperty('entryType')) {
                obj['entryType'] = EnumOptionData.constructFromObject(data['entryType']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
JournalEntryData.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
JournalEntryData.prototype['officeId'] = undefined;

/**
 * @member {Number} glAccountId
 */
JournalEntryData.prototype['glAccountId'] = undefined;

/**
 * @member {module:model/EnumOptionData} glAccountType
 */
JournalEntryData.prototype['glAccountType'] = undefined;

/**
 * @member {Date} transactionDate
 */
JournalEntryData.prototype['transactionDate'] = undefined;

/**
 * @member {module:model/EnumOptionData} entryType
 */
JournalEntryData.prototype['entryType'] = undefined;

/**
 * @member {Number} amount
 */
JournalEntryData.prototype['amount'] = undefined;

/**
 * @member {String} transactionId
 */
JournalEntryData.prototype['transactionId'] = undefined;

/**
 * @member {Number} rowIndex
 */
JournalEntryData.prototype['rowIndex'] = undefined;






export default JournalEntryData;

