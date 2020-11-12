

import ApiClient from '../ApiClient';
import GetSelfSavingsChargeCalculationType from './GetSelfSavingsChargeCalculationType';
import GetSelfSavingsChargeTimeType from './GetSelfSavingsChargeTimeType';
import GetSelfSavingsCurrency from './GetSelfSavingsCurrency';

/**
 * The GetSelfSavingsAccountsAccountIdChargesResponse model module.
 * @module model/GetSelfSavingsAccountsAccountIdChargesResponse
 * @version 1.0
 */
class GetSelfSavingsAccountsAccountIdChargesResponse {
    /**
     * Constructs a new <code>GetSelfSavingsAccountsAccountIdChargesResponse</code>.
     * GetSelfSavingsAccountsAccountIdChargesResponse
     * @alias module:model/GetSelfSavingsAccountsAccountIdChargesResponse
     */
    constructor() { 
        
        GetSelfSavingsAccountsAccountIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsAccountsAccountIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsAccountsAccountIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsAccountsAccountIdChargesResponse} The populated <code>GetSelfSavingsAccountsAccountIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsAccountsAccountIdChargesResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetSelfSavingsChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetSelfSavingsChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('amountPercentageAppliedTo')) {
                obj['amountPercentageAppliedTo'] = ApiClient.convertToType(data['amountPercentageAppliedTo'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amountPaid')) {
                obj['amountPaid'] = ApiClient.convertToType(data['amountPaid'], 'Number');
            }
            if (data.hasOwnProperty('amountWaived')) {
                obj['amountWaived'] = ApiClient.convertToType(data['amountWaived'], 'Number');
            }
            if (data.hasOwnProperty('amountWrittenOff')) {
                obj['amountWrittenOff'] = ApiClient.convertToType(data['amountWrittenOff'], 'Number');
            }
            if (data.hasOwnProperty('amountOutstanding')) {
                obj['amountOutstanding'] = ApiClient.convertToType(data['amountOutstanding'], 'Number');
            }
            if (data.hasOwnProperty('amountOrPercentage')) {
                obj['amountOrPercentage'] = ApiClient.convertToType(data['amountOrPercentage'], 'Number');
            }
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['chargeId'] = undefined;

/**
 * @member {Number} accountId
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['accountId'] = undefined;

/**
 * @member {String} name
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetSelfSavingsChargeTimeType} chargeTimeType
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsChargeCalculationType} chargeCalculationType
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetSelfSavingsCurrency} currency
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSelfSavingsAccountsAccountIdChargesResponse.prototype['penalty'] = undefined;






export default GetSelfSavingsAccountsAccountIdChargesResponse;

