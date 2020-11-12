

import ApiClient from '../ApiClient';

/**
 * The SingleDebitOrCreditEntryCommand model module.
 * @module model/SingleDebitOrCreditEntryCommand
 * @version 1.0
 */
class SingleDebitOrCreditEntryCommand {
    /**
     * Constructs a new <code>SingleDebitOrCreditEntryCommand</code>.
     * @alias module:model/SingleDebitOrCreditEntryCommand
     */
    constructor() { 
        
        SingleDebitOrCreditEntryCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SingleDebitOrCreditEntryCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SingleDebitOrCreditEntryCommand} obj Optional instance to populate.
     * @return {module:model/SingleDebitOrCreditEntryCommand} The populated <code>SingleDebitOrCreditEntryCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SingleDebitOrCreditEntryCommand();

            if (data.hasOwnProperty('glAccountId')) {
                obj['glAccountId'] = ApiClient.convertToType(data['glAccountId'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('parametersPassedInRequest')) {
                obj['parametersPassedInRequest'] = ApiClient.convertToType(data['parametersPassedInRequest'], ['String']);
            }
            if (data.hasOwnProperty('glAccountIdChanged')) {
                obj['glAccountIdChanged'] = ApiClient.convertToType(data['glAccountIdChanged'], 'Boolean');
            }
            if (data.hasOwnProperty('glAmountChanged')) {
                obj['glAmountChanged'] = ApiClient.convertToType(data['glAmountChanged'], 'Boolean');
            }
            if (data.hasOwnProperty('commentsChanged')) {
                obj['commentsChanged'] = ApiClient.convertToType(data['commentsChanged'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} glAccountId
 */
SingleDebitOrCreditEntryCommand.prototype['glAccountId'] = undefined;

/**
 * @member {Number} amount
 */
SingleDebitOrCreditEntryCommand.prototype['amount'] = undefined;

/**
 * @member {String} comments
 */
SingleDebitOrCreditEntryCommand.prototype['comments'] = undefined;

/**
 * @member {Array.<String>} parametersPassedInRequest
 */
SingleDebitOrCreditEntryCommand.prototype['parametersPassedInRequest'] = undefined;

/**
 * @member {Boolean} glAccountIdChanged
 */
SingleDebitOrCreditEntryCommand.prototype['glAccountIdChanged'] = undefined;

/**
 * @member {Boolean} glAmountChanged
 */
SingleDebitOrCreditEntryCommand.prototype['glAmountChanged'] = undefined;

/**
 * @member {Boolean} commentsChanged
 */
SingleDebitOrCreditEntryCommand.prototype['commentsChanged'] = undefined;






export default SingleDebitOrCreditEntryCommand;

