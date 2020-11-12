

import ApiClient from '../ApiClient';
import CashierData from './CashierData';
import CashierTxnType from './CashierTxnType';

/**
 * The CashierTransactionData model module.
 * @module model/CashierTransactionData
 * @version 1.0
 */
class CashierTransactionData {
    /**
     * Constructs a new <code>CashierTransactionData</code>.
     * @alias module:model/CashierTransactionData
     */
    constructor() { 
        
        CashierTransactionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CashierTransactionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CashierTransactionData} obj Optional instance to populate.
     * @return {module:model/CashierTransactionData} The populated <code>CashierTransactionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CashierTransactionData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('cashierId')) {
                obj['cashierId'] = ApiClient.convertToType(data['cashierId'], 'Number');
            }
            if (data.hasOwnProperty('txnType')) {
                obj['txnType'] = CashierTxnType.constructFromObject(data['txnType']);
            }
            if (data.hasOwnProperty('txnAmount')) {
                obj['txnAmount'] = ApiClient.convertToType(data['txnAmount'], 'Number');
            }
            if (data.hasOwnProperty('txnDate')) {
                obj['txnDate'] = ApiClient.convertToType(data['txnDate'], 'Date');
            }
            if (data.hasOwnProperty('entityId')) {
                obj['entityId'] = ApiClient.convertToType(data['entityId'], 'Number');
            }
            if (data.hasOwnProperty('entityType')) {
                obj['entityType'] = ApiClient.convertToType(data['entityType'], 'String');
            }
            if (data.hasOwnProperty('txnNote')) {
                obj['txnNote'] = ApiClient.convertToType(data['txnNote'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('tellerId')) {
                obj['tellerId'] = ApiClient.convertToType(data['tellerId'], 'Number');
            }
            if (data.hasOwnProperty('tellerName')) {
                obj['tellerName'] = ApiClient.convertToType(data['tellerName'], 'String');
            }
            if (data.hasOwnProperty('cashierName')) {
                obj['cashierName'] = ApiClient.convertToType(data['cashierName'], 'String');
            }
            if (data.hasOwnProperty('cashierData')) {
                obj['cashierData'] = CashierData.constructFromObject(data['cashierData']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
CashierTransactionData.prototype['id'] = undefined;

/**
 * @member {Number} cashierId
 */
CashierTransactionData.prototype['cashierId'] = undefined;

/**
 * @member {module:model/CashierTxnType} txnType
 */
CashierTransactionData.prototype['txnType'] = undefined;

/**
 * @member {Number} txnAmount
 */
CashierTransactionData.prototype['txnAmount'] = undefined;

/**
 * @member {Date} txnDate
 */
CashierTransactionData.prototype['txnDate'] = undefined;

/**
 * @member {Number} entityId
 */
CashierTransactionData.prototype['entityId'] = undefined;

/**
 * @member {String} entityType
 */
CashierTransactionData.prototype['entityType'] = undefined;

/**
 * @member {String} txnNote
 */
CashierTransactionData.prototype['txnNote'] = undefined;

/**
 * @member {Date} createdDate
 */
CashierTransactionData.prototype['createdDate'] = undefined;

/**
 * @member {Number} officeId
 */
CashierTransactionData.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
CashierTransactionData.prototype['officeName'] = undefined;

/**
 * @member {Number} tellerId
 */
CashierTransactionData.prototype['tellerId'] = undefined;

/**
 * @member {String} tellerName
 */
CashierTransactionData.prototype['tellerName'] = undefined;

/**
 * @member {String} cashierName
 */
CashierTransactionData.prototype['cashierName'] = undefined;

/**
 * @member {module:model/CashierData} cashierData
 */
CashierTransactionData.prototype['cashierData'] = undefined;

/**
 * @member {Date} startDate
 */
CashierTransactionData.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
CashierTransactionData.prototype['endDate'] = undefined;






export default CashierTransactionData;

