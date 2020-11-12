

import ApiClient from '../ApiClient';
import GetLoanChargeCalculationType from './GetLoanChargeCalculationType';
import GetLoanChargeCurrency from './GetLoanChargeCurrency';
import GetLoanChargeTimeType from './GetLoanChargeTimeType';

/**
 * The GetLoansLoanIdChargesChargeIdResponse model module.
 * @module model/GetLoansLoanIdChargesChargeIdResponse
 * @version 1.0
 */
class GetLoansLoanIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>GetLoansLoanIdChargesChargeIdResponse</code>.
     * GetLoansLoanIdChargesChargeIdResponse
     * @alias module:model/GetLoansLoanIdChargesChargeIdResponse
     */
    constructor() { 
        
        GetLoansLoanIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdChargesChargeIdResponse} The populated <code>GetLoansLoanIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdChargesChargeIdResponse();

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
                obj['chargeTimeType'] = GetLoanChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetLoanChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('amountPercentageAppliedTo')) {
                obj['amountPercentageAppliedTo'] = ApiClient.convertToType(data['amountPercentageAppliedTo'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanChargeCurrency.constructFromObject(data['currency']);
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
GetLoansLoanIdChargesChargeIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetLoanChargeTimeType} chargeTimeType
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetLoanChargeCalculationType} chargeCalculationType
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetLoanChargeCurrency} currency
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetLoansLoanIdChargesChargeIdResponse.prototype['penalty'] = undefined;






export default GetLoansLoanIdChargesChargeIdResponse;

