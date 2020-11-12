

import ApiClient from '../ApiClient';
import PageCashierTransactionData from './PageCashierTransactionData';

/**
 * The GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse model module.
 * @module model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse</code>.
     * GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse
     * @alias module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse} The populated <code>GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse();

            if (data.hasOwnProperty('sumCashAllocation')) {
                obj['sumCashAllocation'] = ApiClient.convertToType(data['sumCashAllocation'], 'Number');
            }
            if (data.hasOwnProperty('sumInwardCash')) {
                obj['sumInwardCash'] = ApiClient.convertToType(data['sumInwardCash'], 'Number');
            }
            if (data.hasOwnProperty('sumOutwardCash')) {
                obj['sumOutwardCash'] = ApiClient.convertToType(data['sumOutwardCash'], 'Number');
            }
            if (data.hasOwnProperty('sumCashSettlement')) {
                obj['sumCashSettlement'] = ApiClient.convertToType(data['sumCashSettlement'], 'Number');
            }
            if (data.hasOwnProperty('netCash')) {
                obj['netCash'] = ApiClient.convertToType(data['netCash'], 'Number');
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
            if (data.hasOwnProperty('cashierId')) {
                obj['cashierId'] = ApiClient.convertToType(data['cashierId'], 'Number');
            }
            if (data.hasOwnProperty('cashierName')) {
                obj['cashierName'] = ApiClient.convertToType(data['cashierName'], 'String');
            }
            if (data.hasOwnProperty('cashierTransactions')) {
                obj['cashierTransactions'] = PageCashierTransactionData.constructFromObject(data['cashierTransactions']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} sumCashAllocation
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['sumCashAllocation'] = undefined;

/**
 * @member {Number} sumInwardCash
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['sumInwardCash'] = undefined;

/**
 * @member {Number} sumOutwardCash
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['sumOutwardCash'] = undefined;

/**
 * @member {Number} sumCashSettlement
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['sumCashSettlement'] = undefined;

/**
 * @member {Number} netCash
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['netCash'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['officeName'] = undefined;

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['tellerId'] = undefined;

/**
 * @member {String} tellerName
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['tellerName'] = undefined;

/**
 * @member {Number} cashierId
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['cashierId'] = undefined;

/**
 * @member {String} cashierName
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['cashierName'] = undefined;

/**
 * @member {module:model/PageCashierTransactionData} cashierTransactions
 */
GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse.prototype['cashierTransactions'] = undefined;






export default GetTellersTellerIdCashiersCashiersIdSummaryAndTransactionsResponse;

