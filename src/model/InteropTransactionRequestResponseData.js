

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';

/**
 * The InteropTransactionRequestResponseData model module.
 * @module model/InteropTransactionRequestResponseData
 * @version 1.0
 */
class InteropTransactionRequestResponseData {
    /**
     * Constructs a new <code>InteropTransactionRequestResponseData</code>.
     * @alias module:model/InteropTransactionRequestResponseData
     * @param transactionCode {String} 
     * @param state {module:model/InteropTransactionRequestResponseData.StateEnum} 
     * @param requestCode {String} 
     */
    constructor(transactionCode, state, requestCode) { 
        
        InteropTransactionRequestResponseData.initialize(this, transactionCode, state, requestCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, state, requestCode) { 
        obj['transactionCode'] = transactionCode;
        obj['state'] = state;
        obj['requestCode'] = requestCode;
    }

    /**
     * Constructs a <code>InteropTransactionRequestResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransactionRequestResponseData} obj Optional instance to populate.
     * @return {module:model/InteropTransactionRequestResponseData} The populated <code>InteropTransactionRequestResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransactionRequestResponseData();

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
            if (data.hasOwnProperty('transactionCode')) {
                obj['transactionCode'] = ApiClient.convertToType(data['transactionCode'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'String');
            }
            if (data.hasOwnProperty('extensionList')) {
                obj['extensionList'] = ApiClient.convertToType(data['extensionList'], [ExtensionData]);
            }
            if (data.hasOwnProperty('requestCode')) {
                obj['requestCode'] = ApiClient.convertToType(data['requestCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
InteropTransactionRequestResponseData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropTransactionRequestResponseData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropTransactionRequestResponseData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropTransactionRequestResponseData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropTransactionRequestResponseData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropTransactionRequestResponseData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropTransactionRequestResponseData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropTransactionRequestResponseData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropTransactionRequestResponseData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropTransactionRequestResponseData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropTransactionRequestResponseData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropTransactionRequestResponseData.prototype['rollbackTransaction'] = undefined;

/**
 * @member {String} transactionCode
 */
InteropTransactionRequestResponseData.prototype['transactionCode'] = undefined;

/**
 * @member {module:model/InteropTransactionRequestResponseData.StateEnum} state
 */
InteropTransactionRequestResponseData.prototype['state'] = undefined;

/**
 * @member {String} expiration
 */
InteropTransactionRequestResponseData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropTransactionRequestResponseData.prototype['extensionList'] = undefined;

/**
 * @member {String} requestCode
 */
InteropTransactionRequestResponseData.prototype['requestCode'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransactionRequestResponseData['StateEnum'] = {

    /**
     * value: "ACCEPTED"
     * @const
     */
    "ACCEPTED": "ACCEPTED",

    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED"
};



export default InteropTransactionRequestResponseData;

