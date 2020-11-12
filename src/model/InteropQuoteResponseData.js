

import ApiClient from '../ApiClient';
import ExtensionData from './ExtensionData';
import MoneyData from './MoneyData';

/**
 * The InteropQuoteResponseData model module.
 * @module model/InteropQuoteResponseData
 * @version 1.0
 */
class InteropQuoteResponseData {
    /**
     * Constructs a new <code>InteropQuoteResponseData</code>.
     * @alias module:model/InteropQuoteResponseData
     * @param transactionCode {String} 
     * @param state {module:model/InteropQuoteResponseData.StateEnum} 
     * @param quoteCode {String} 
     */
    constructor(transactionCode, state, quoteCode) { 
        
        InteropQuoteResponseData.initialize(this, transactionCode, state, quoteCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, transactionCode, state, quoteCode) { 
        obj['transactionCode'] = transactionCode;
        obj['state'] = state;
        obj['quoteCode'] = quoteCode;
    }

    /**
     * Constructs a <code>InteropQuoteResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InteropQuoteResponseData} obj Optional instance to populate.
     * @return {module:model/InteropQuoteResponseData} The populated <code>InteropQuoteResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InteropQuoteResponseData();

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
            if (data.hasOwnProperty('quoteCode')) {
                obj['quoteCode'] = ApiClient.convertToType(data['quoteCode'], 'String');
            }
            if (data.hasOwnProperty('fspFee')) {
                obj['fspFee'] = MoneyData.constructFromObject(data['fspFee']);
            }
            if (data.hasOwnProperty('fspCommission')) {
                obj['fspCommission'] = MoneyData.constructFromObject(data['fspCommission']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
InteropQuoteResponseData.prototype['officeId'] = undefined;

/**
 * @member {Number} groupId
 */
InteropQuoteResponseData.prototype['groupId'] = undefined;

/**
 * @member {Number} clientId
 */
InteropQuoteResponseData.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
InteropQuoteResponseData.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
InteropQuoteResponseData.prototype['savingsId'] = undefined;

/**
 * @member {Number} subResourceId
 */
InteropQuoteResponseData.prototype['subResourceId'] = undefined;

/**
 * @member {String} transactionId
 */
InteropQuoteResponseData.prototype['transactionId'] = undefined;

/**
 * @member {Object.<String, Object>} changes
 */
InteropQuoteResponseData.prototype['changes'] = undefined;

/**
 * @member {Number} productId
 */
InteropQuoteResponseData.prototype['productId'] = undefined;

/**
 * @member {Number} gsimId
 */
InteropQuoteResponseData.prototype['gsimId'] = undefined;

/**
 * @member {Number} glimId
 */
InteropQuoteResponseData.prototype['glimId'] = undefined;

/**
 * @member {Boolean} rollbackTransaction
 */
InteropQuoteResponseData.prototype['rollbackTransaction'] = undefined;

/**
 * @member {String} transactionCode
 */
InteropQuoteResponseData.prototype['transactionCode'] = undefined;

/**
 * @member {module:model/InteropQuoteResponseData.StateEnum} state
 */
InteropQuoteResponseData.prototype['state'] = undefined;

/**
 * @member {String} expiration
 */
InteropQuoteResponseData.prototype['expiration'] = undefined;

/**
 * @member {Array.<module:model/ExtensionData>} extensionList
 */
InteropQuoteResponseData.prototype['extensionList'] = undefined;

/**
 * @member {String} quoteCode
 */
InteropQuoteResponseData.prototype['quoteCode'] = undefined;

/**
 * @member {module:model/MoneyData} fspFee
 */
InteropQuoteResponseData.prototype['fspFee'] = undefined;

/**
 * @member {module:model/MoneyData} fspCommission
 */
InteropQuoteResponseData.prototype['fspCommission'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
InteropQuoteResponseData['StateEnum'] = {

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



export default InteropQuoteResponseData;

