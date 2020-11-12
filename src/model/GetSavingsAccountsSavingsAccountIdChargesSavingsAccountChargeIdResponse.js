

import ApiClient from '../ApiClient';
import GetChargesChargeCalculationType from './GetChargesChargeCalculationType';
import GetChargesChargeTimeType from './GetChargesChargeTimeType';
import GetChargesCurrencyResponse from './GetChargesCurrencyResponse';

/**
 * The GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse model module.
 * @module model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
 * @version 1.0
 */
class GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse {
    /**
     * Constructs a new <code>GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code>.
     * GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     * @alias module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse
     */
    constructor() { 
        
        GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse} The populated <code>GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
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
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetChargesChargeTimeType} chargeTimeType
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetChargesChargeCalculationType} chargeCalculationType
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetChargesCurrencyResponse} currency
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse.prototype['penalty'] = undefined;






export default GetSavingsAccountsSavingsAccountIdChargesSavingsAccountChargeIdResponse;

