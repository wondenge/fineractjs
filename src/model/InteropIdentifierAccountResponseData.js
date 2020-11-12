

import ApiClient from '../ApiClient';

/**
 * The InteropIdentifierAccountResponseData model module.
 * @module model/InteropIdentifierAccountResponseData
 * @version 1.0
 */
class InteropIdentifierAccountResponseData {
    /**
     * Constructs a new <code>InteropIdentifierAccountResponseData</code>.
     * @alias module:model/InteropIdentifierAccountResponseData
     * @param accountId {String} 
     */
    constructor(accountId) { 
        
        InteropIdentifierAccountResponseData.initialize(this, accountId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accountId) { 
        obj['accountId'] = accountId;
    }

    /**
     * Constructs a <code>InteropIdentifierAccountResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropIdentifierAccountResponseData} obj Optional instance to populate.
     * @return {module:model/InteropIdentifierAccountResponseData} The populated <code>InteropIdentifierAccountResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropIdentifierAccountResponseData();

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
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
InteropIdentifierAccountResponseData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropIdentifierAccountResponseData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropIdentifierAccountResponseData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropIdentifierAccountResponseData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropIdentifierAccountResponseData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropIdentifierAccountResponseData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropIdentifierAccountResponseData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropIdentifierAccountResponseData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropIdentifierAccountResponseData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropIdentifierAccountResponseData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropIdentifierAccountResponseData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropIdentifierAccountResponseData.prototype['rollbackTransaction'] = undefined;

/**
 * @member {String} accountId
 */
InteropIdentifierAccountResponseData.prototype['accountId'] = undefined;






export default InteropIdentifierAccountResponseData;

