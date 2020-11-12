

import ApiClient from '../ApiClient';
import GetChargesChargeCalculationType from './GetChargesChargeCalculationType';
import GetChargesChargeTimeType from './GetChargesChargeTimeType';
import GetChargesCurrencyResponse from './GetChargesCurrencyResponse';

/**
 * The GetSavingsAccountsSavingsAccountIdChargesResponse model module.
 * @module model/GetSavingsAccountsSavingsAccountIdChargesResponse
 * @version 1.0
 */
class GetSavingsAccountsSavingsAccountIdChargesResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsSavingsAccountIdChargesResponse</code>.
     * GetSavingsAccountsSavingsAccountIdChargesResponse
     * @alias module:model/GetSavingsAccountsSavingsAccountIdChargesResponse
     */
    constructor() { 
        
        GetSavingsAccountsSavingsAccountIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsSavingsAccountIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsSavingsAccountIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsSavingsAccountIdChargesResponse} The populated <code>GetSavingsAccountsSavingsAccountIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsSavingsAccountIdChargesResponse();

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
                obj['chargeTimeType'] = GetChargesChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetChargesChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('amountPercentageAppliedTo')) {
                obj['amountPercentageAppliedTo'] = ApiClient.convertToType(data['amountPercentageAppliedTo'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetChargesCurrencyResponse.constructFromObject(data['currency']);
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
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['chargeId'] = undefined;

/**
 * @member {Number} accountId
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['accountId'] = undefined;

/**
 * @member {String} name
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetChargesChargeTimeType} chargeTimeType
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetChargesChargeCalculationType} chargeCalculationType
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetChargesCurrencyResponse} currency
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsAccountsSavingsAccountIdChargesResponse.prototype['penalty'] = undefined;






export default GetSavingsAccountsSavingsAccountIdChargesResponse;

