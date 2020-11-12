

import ApiClient from '../ApiClient';
import CashierTxnType from './CashierTxnType';

/**
 * The GetTellersTellerIdCashiersCashiersIdTransactionsResponse model module.
 * @module model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersCashiersIdTransactionsResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersCashiersIdTransactionsResponse</code>.
     * GetTellersTellerIdCashiersCashiersIdTransactionsResponse
     * @alias module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersCashiersIdTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersCashiersIdTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersCashiersIdTransactionsResponse} The populated <code>GetTellersTellerIdCashiersCashiersIdTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersCashiersIdTransactionsResponse();

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
            if (data.hasOwnProperty('cashierName')) {
                obj['cashierName'] = ApiClient.convertToType(data['cashierName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['id'] = undefined;

/**
 * @member {Number} cashierId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['cashierId'] = undefined;

/**
 * @member {module:model/CashierTxnType} txnType
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['txnType'] = undefined;

/**
 * @member {Number} txnAmount
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['txnAmount'] = undefined;

/**
 * @member {Date} txnDate
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['txnDate'] = undefined;

/**
 * @member {Number} entityId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['entityId'] = undefined;

/**
 * @member {String} entityType
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['entityType'] = undefined;

/**
 * @member {String} txnNote
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['txnNote'] = undefined;

/**
 * @member {Date} createdDate
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['createdDate'] = undefined;

/**
 * @member {Number} officeId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['tellerId'] = undefined;

/**
 * @member {String} cashierName
 */
GetTellersTellerIdCashiersCashiersIdTransactionsResponse.prototype['cashierName'] = undefined;






export default GetTellersTellerIdCashiersCashiersIdTransactionsResponse;

