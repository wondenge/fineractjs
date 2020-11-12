

import ApiClient from '../ApiClient';
import GetLoanCurrency from './GetLoanCurrency';
import GetSelfLoansChargeCalculationType from './GetSelfLoansChargeCalculationType';
import GetSelfLoansChargeTimeType from './GetSelfLoansChargeTimeType';

/**
 * The GetSelfLoansLoanIdChargesResponse model module.
 * @module model/GetSelfLoansLoanIdChargesResponse
 * @version 1.0
 */
class GetSelfLoansLoanIdChargesResponse {
    /**
     * Constructs a new <code>GetSelfLoansLoanIdChargesResponse</code>.
     * GetSelfLoansLoanIdChargesResponse
     * @alias module:model/GetSelfLoansLoanIdChargesResponse
     */
    constructor() { 
        
        GetSelfLoansLoanIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfLoansLoanIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfLoansLoanIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfLoansLoanIdChargesResponse} The populated <code>GetSelfLoansLoanIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfLoansLoanIdChargesResponse();

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
                obj['chargeTimeType'] = GetSelfLoansChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetSelfLoansChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('amountPercentageAppliedTo')) {
                obj['amountPercentageAppliedTo'] = ApiClient.convertToType(data['amountPercentageAppliedTo'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetLoanCurrency.constructFromObject(data['currency']);
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
GetSelfLoansLoanIdChargesResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSelfLoansLoanIdChargesResponse.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetSelfLoansLoanIdChargesResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetSelfLoansChargeTimeType} chargeTimeType
 */
GetSelfLoansLoanIdChargesResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetSelfLoansChargeCalculationType} chargeCalculationType
 */
GetSelfLoansLoanIdChargesResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetSelfLoansLoanIdChargesResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetLoanCurrency} currency
 */
GetSelfLoansLoanIdChargesResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfLoansLoanIdChargesResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetSelfLoansLoanIdChargesResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSelfLoansLoanIdChargesResponse.prototype['penalty'] = undefined;






export default GetSelfLoansLoanIdChargesResponse;

