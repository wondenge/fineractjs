

import ApiClient from '../ApiClient';
import GetAccountsCharges from './GetAccountsCharges';
import GetAccountsCurrency from './GetAccountsCurrency';
import GetAccountsLockPeriodTypeEnum from './GetAccountsLockPeriodTypeEnum';
import GetAccountsPurchasedShares from './GetAccountsPurchasedShares';
import GetAccountsStatus from './GetAccountsStatus';
import GetAccountsSummary from './GetAccountsSummary';
import GetAccountsTimeline from './GetAccountsTimeline';

/**
 * The GetAccountsTypeAccountIdResponse model module.
 * @module model/GetAccountsTypeAccountIdResponse
 * @version 1.0
 */
class GetAccountsTypeAccountIdResponse {
    /**
     * Constructs a new <code>GetAccountsTypeAccountIdResponse</code>.
     * GetAccountsTypeAccountIdResponse
     * @alias module:model/GetAccountsTypeAccountIdResponse
     */
    constructor() { 
        
        GetAccountsTypeAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTypeAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTypeAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/GetAccountsTypeAccountIdResponse} The populated <code>GetAccountsTypeAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTypeAccountIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountNo')) {
                obj['accountNo'] = ApiClient.convertToType(data['accountNo'], 'Number');
            }
            if (data.hasOwnProperty('savingsAccountNumber')) {
                obj['savingsAccountNumber'] = ApiClient.convertToType(data['savingsAccountNumber'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('clientName')) {
                obj['clientName'] = ApiClient.convertToType(data['clientName'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetAccountsStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('timeline')) {
                obj['timeline'] = GetAccountsTimeline.constructFromObject(data['timeline']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = GetAccountsSummary.constructFromObject(data['summary']);
            }
            if (data.hasOwnProperty('purchasedShares')) {
                obj['purchasedShares'] = ApiClient.convertToType(data['purchasedShares'], [GetAccountsPurchasedShares]);
            }
            if (data.hasOwnProperty('savingsAccountId')) {
                obj['savingsAccountId'] = ApiClient.convertToType(data['savingsAccountId'], 'Number');
            }
            if (data.hasOwnProperty('currentMarketPrice')) {
                obj['currentMarketPrice'] = ApiClient.convertToType(data['currentMarketPrice'], 'Number');
            }
            if (data.hasOwnProperty('lockinPeriod')) {
                obj['lockinPeriod'] = ApiClient.convertToType(data['lockinPeriod'], 'Number');
            }
            if (data.hasOwnProperty('lockPeriodTypeEnum')) {
                obj['lockPeriodTypeEnum'] = GetAccountsLockPeriodTypeEnum.constructFromObject(data['lockPeriodTypeEnum']);
            }
            if (data.hasOwnProperty('minimumActivePeriod')) {
                obj['minimumActivePeriod'] = ApiClient.convertToType(data['minimumActivePeriod'], 'Number');
            }
            if (data.hasOwnProperty('minimumActivePeriodTypeEnum')) {
                obj['minimumActivePeriodTypeEnum'] = GetAccountsLockPeriodTypeEnum.constructFromObject(data['minimumActivePeriodTypeEnum']);
            }
            if (data.hasOwnProperty('allowDividendCalculationForInactiveClients')) {
                obj['allowDividendCalculationForInactiveClients'] = ApiClient.convertToType(data['allowDividendCalculationForInactiveClients'], 'Boolean');
            }
            if (data.hasOwnProperty('charges')) {
                obj['charges'] = ApiClient.convertToType(data['charges'], [GetAccountsCharges]);
            }
            if (data.hasOwnProperty('dividends')) {
                obj['dividends'] = ApiClient.convertToType(data['dividends'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsTypeAccountIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} accountNo
 */
GetAccountsTypeAccountIdResponse.prototype['accountNo'] = undefined;

/**
 * @member {Number} savingsAccountNumber
 */
GetAccountsTypeAccountIdResponse.prototype['savingsAccountNumber'] = undefined;

/**
 * @member {Number} clientId
 */
GetAccountsTypeAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {String} clientName
 */
GetAccountsTypeAccountIdResponse.prototype['clientName'] = undefined;

/**
 * @member {Number} productId
 */
GetAccountsTypeAccountIdResponse.prototype['productId'] = undefined;

/**
 * @member {String} productName
 */
GetAccountsTypeAccountIdResponse.prototype['productName'] = undefined;

/**
 * @member {module:model/GetAccountsStatus} status
 */
GetAccountsTypeAccountIdResponse.prototype['status'] = undefined;

/**
 * @member {module:model/GetAccountsTimeline} timeline
 */
GetAccountsTypeAccountIdResponse.prototype['timeline'] = undefined;

/**
 * @member {module:model/GetAccountsCurrency} currency
 */
GetAccountsTypeAccountIdResponse.prototype['currency'] = undefined;

/**
 * @member {module:model/GetAccountsSummary} summary
 */
GetAccountsTypeAccountIdResponse.prototype['summary'] = undefined;

/**
 * @member {Array.<module:model/GetAccountsPurchasedShares>} purchasedShares
 */
GetAccountsTypeAccountIdResponse.prototype['purchasedShares'] = undefined;

/**
 * @member {Number} savingsAccountId
 */
GetAccountsTypeAccountIdResponse.prototype['savingsAccountId'] = undefined;

/**
 * @member {Number} currentMarketPrice
 */
GetAccountsTypeAccountIdResponse.prototype['currentMarketPrice'] = undefined;

/**
 * @member {Number} lockinPeriod
 */
GetAccountsTypeAccountIdResponse.prototype['lockinPeriod'] = undefined;

/**
 * @member {module:model/GetAccountsLockPeriodTypeEnum} lockPeriodTypeEnum
 */
GetAccountsTypeAccountIdResponse.prototype['lockPeriodTypeEnum'] = undefined;

/**
 * @member {Number} minimumActivePeriod
 */
GetAccountsTypeAccountIdResponse.prototype['minimumActivePeriod'] = undefined;

/**
 * @member {module:model/GetAccountsLockPeriodTypeEnum} minimumActivePeriodTypeEnum
 */
GetAccountsTypeAccountIdResponse.prototype['minimumActivePeriodTypeEnum'] = undefined;

/**
 * @member {Boolean} allowDividendCalculationForInactiveClients
 */
GetAccountsTypeAccountIdResponse.prototype['allowDividendCalculationForInactiveClients'] = undefined;

/**
 * @member {Array.<module:model/GetAccountsCharges>} charges
 */
GetAccountsTypeAccountIdResponse.prototype['charges'] = undefined;

/**
 * @member {Array.<String>} dividends
 */
GetAccountsTypeAccountIdResponse.prototype['dividends'] = undefined;






export default GetAccountsTypeAccountIdResponse;

