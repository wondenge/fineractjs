

import ApiClient from '../ApiClient';

/**
 * The InteropAccountData model module.
 * @module model/InteropAccountData
 * @version 1.0
 */
class InteropAccountData {
    /**
     * Constructs a new <code>InteropAccountData</code>.
     * @alias module:model/InteropAccountData
     */
    constructor() { 
        
        InteropAccountData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InteropAccountData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropAccountData} obj Optional instance to populate.
     * @return {module:model/InteropAccountData} The populated <code>InteropAccountData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropAccountData();

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
InteropAccountData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropAccountData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropAccountData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropAccountData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropAccountData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropAccountData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropAccountData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropAccountData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropAccountData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropAccountData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropAccountData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropAccountData.prototype['rollbackTransaction'] = undefined;






export default InteropAccountData;

