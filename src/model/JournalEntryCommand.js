

import ApiClient from '../ApiClient';
import SingleDebitOrCreditEntryCommand from './SingleDebitOrCreditEntryCommand';

/**
 * The JournalEntryCommand model module.
 * @module model/JournalEntryCommand
 * @version 1.0
 */
class JournalEntryCommand {
    /**
     * Constructs a new <code>JournalEntryCommand</code>.
     * @alias module:model/JournalEntryCommand
     */
    constructor() { 
        
        JournalEntryCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalEntryCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalEntryCommand} obj Optional instance to populate.
     * @return {module:model/JournalEntryCommand} The populated <code>JournalEntryCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalEntryCommand();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'Date');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('referenceNumber')) {
                obj['referenceNumber'] = ApiClient.convertToType(data['referenceNumber'], 'String');
            }
            if (data.hasOwnProperty('accountingRuleId')) {
                obj['accountingRuleId'] = ApiClient.convertToType(data['accountingRuleId'], 'Number');
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], [SingleDebitOrCreditEntryCommand]);
            }
            if (data.hasOwnProperty('debits')) {
                obj['debits'] = ApiClient.convertToType(data['debits'], [SingleDebitOrCreditEntryCommand]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
JournalEntryCommand.prototype['officeId'] = undefined;

/**
 * @member {Date} transactionDate
 */
JournalEntryCommand.prototype['transactionDate'] = undefined;

/**
 * @member {String} comments
 */
JournalEntryCommand.prototype['comments'] = undefined;

/**
 * @member {String} referenceNumber
 */
JournalEntryCommand.prototype['referenceNumber'] = undefined;

/**
 * @member {Number} accountingRuleId
 */
JournalEntryCommand.prototype['accountingRuleId'] = undefined;

/**
 * @member {Array.<module:model/SingleDebitOrCreditEntryCommand>} credits
 */
JournalEntryCommand.prototype['credits'] = undefined;

/**
 * @member {Array.<module:model/SingleDebitOrCreditEntryCommand>} debits
 */
JournalEntryCommand.prototype['debits'] = undefined;






export default JournalEntryCommand;

