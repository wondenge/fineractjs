

import ApiClient from '../ApiClient';

/**
 * The InteropTransactionsData model module.
 * @module model/InteropTransactionsData
 * @version 1.0
 */
class InteropTransactionsData {
    /**
     * Constructs a new <code>InteropTransactionsData</code>.
     * @alias module:model/InteropTransactionsData
     */
    constructor() { 
        
        InteropTransactionsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InteropTransactionsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransactionsData} obj Optional instance to populate.
     * @return {module:model/InteropTransactionsData} The populated <code>InteropTransactionsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransactionsData();

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
InteropTransactionsData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropTransactionsData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropTransactionsData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropTransactionsData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropTransactionsData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropTransactionsData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropTransactionsData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropTransactionsData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropTransactionsData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropTransactionsData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropTransactionsData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropTransactionsData.prototype['rollbackTransaction'] = undefined;






export default InteropTransactionsData;

