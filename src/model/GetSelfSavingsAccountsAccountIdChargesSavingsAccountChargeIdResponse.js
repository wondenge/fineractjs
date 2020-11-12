

import ApiClient from '../ApiClient';
import GetSelfSavingsChargeCalculationType from './GetSelfSavingsChargeCalculationType';
import GetSelfSavingsChargeTimeType from './GetSelfSavingsChargeTimeType';
import GetSelfSavingsCurrency from './GetSelfSavingsCurrency';

/**
 * The GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse model module.
 * @module model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse
 * @version 1.0
 */
class GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse {
    /**
     * Constructs a new <code>GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse</code>.
     * GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse
     * @alias module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse
     */
    constructor() { 
        
        GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse} The populated <code>GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse();

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
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetSelfSavingsChargeTimeType} chargeTimeType
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetSelfSavingsChargeCalculationType} chargeCalculationType
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetSelfSavingsCurrency} currency
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse.prototype['penalty'] = undefined;






export default GetSelfSavingsAccountsAccountIdChargesSavingsAccountChargeIdResponse;

