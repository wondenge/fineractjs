

import ApiClient from '../ApiClient';

/**
 * The CommandProcessingResult model module.
 * @module model/CommandProcessingResult
 * @version 1.0
 */
class CommandProcessingResult {
    /**
     * Constructs a new <code>CommandProcessingResult</code>.
     * @alias module:model/CommandProcessingResult
     */
    constructor() { 
        
        CommandProcessingResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CommandProcessingResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommandProcessingResult} obj Optional instance to populate.
     * @return {module:model/CommandProcessingResult} The populated <code>CommandProcessingResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommandProcessingResult();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('groupId')) {
                obj['groupId'] = ApiClient.convertToType(data['groupId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('subResourceId')) {
                obj['subResourceId'] = ApiClient.convertToType(data['subResourceId'], 'Number');
            }
            if (data.hasOwnProperty('transactionId')) {
                obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], {'String': Object});
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('gsimId')) {
                obj['gsimId'] = ApiClient.convertToType(data['gsimId'], 'Number');
            }
            if (data.hasOwnProperty('glimId')) {
                obj['glimId'] = ApiClient.convertToType(data['glimId'], 'Number');
            }
            if (data.hasOwnProperty('rollbackTransaction')) {
                obj['rollbackTransaction'] = ApiClient.convertToType(data['rollbackTransaction'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
CommandProcessingResult.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
CommandProcessingResult.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
CommandProcessingResult.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
CommandProcessingResult.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
CommandProcessingResult.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
CommandProcessingResult.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
CommandProcessingResult.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
CommandProcessingResult.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
CommandProcessingResult.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
CommandProcessingResult.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
CommandProcessingResult.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
CommandProcessingResult.prototype['rollbackTransaction'] = undefined;






export default CommandProcessingResult;

