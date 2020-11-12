

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';

/**
 * The InteropTransferResponseData model module.
 * @module model/InteropTransferResponseData
 * @version 1.0
 */
class InteropTransferResponseData {
    /**
     * Constructs a new <code>InteropTransferResponseData</code>.
     * @alias module:model/InteropTransferResponseData
     * @param transactionCode {String} 
     * @param state {module:model/InteropTransferResponseData.StateEnum} 
     * @param transferCode {String} 
     */
    constructor(transactionCode, state, transferCode) { 
        
        InteropTransferResponseData.initialize(this, transactionCode, state, transferCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, state, transferCode) { 
        obj['transactionCode'] = transactionCode;
        obj['state'] = state;
        obj['transferCode'] = transferCode;
    }

    /**
     * Constructs a <code>InteropTransferResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropTransferResponseData} obj Optional instance to populate.
     * @return {module:model/InteropTransferResponseData} The populated <code>InteropTransferResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropTransferResponseData();

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
            if (data.hasOwnProperty('transferCode')) {
                obj['transferCode'] = ApiClient.convertToType(data['transferCode'], 'String');
            }
            if (data.hasOwnProperty('completedTimestamp')) {
                obj['completedTimestamp'] = ApiClient.convertToType(data['completedTimestamp'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
InteropTransferResponseData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropTransferResponseData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropTransferResponseData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropTransferResponseData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropTransferResponseData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropTransferResponseData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropTransferResponseData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropTransferResponseData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropTransferResponseData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropTransferResponseData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropTransferResponseData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropTransferResponseData.prototype['rollbackTransaction'] = undefined;

/**
 * @member {String} transactionCode
 */
InteropTransferResponseData.prototype['transactionCode'] = undefined;

/**
 * @member {module:model/InteropTransferResponseData.StateEnum} state
 */
InteropTransferResponseData.prototype['state'] = undefined;

/**
 * @member {String} expiration
 */
InteropTransferResponseData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropTransferResponseData.prototype['extensionList'] = undefined;

/**
 * @member {String} transferCode
 */
InteropTransferResponseData.prototype['transferCode'] = undefined;

/**
 * @member {String} completedTimestamp
 */
InteropTransferResponseData.prototype['completedTimestamp'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
InteropTransferResponseData['StateEnum'] = {

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



export default InteropTransferResponseData;

