

import ApiClient from '../ApiClient';
import GetAccountsChargeCalculationType from './GetAccountsChargeCalculationType';
import GetAccountsChargeTimeType from './GetAccountsChargeTimeType';
import GetAccountsChargesCurrency from './GetAccountsChargesCurrency';

/**
 * The GetAccountsCharges model module.
 * @module model/GetAccountsCharges
 * @version 1.0
 */
class GetAccountsCharges {
    /**
     * Constructs a new <code>GetAccountsCharges</code>.
     * @alias module:model/GetAccountsCharges
     */
    constructor() { 
        
        GetAccountsCharges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsCharges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsCharges} obj Optional instance to populate.
     * @return {module:model/GetAccountsCharges} The populated <code>GetAccountsCharges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsCharges();

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
                obj['chargeTimeType'] = GetAccountsChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetAccountsChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('amountPercentageAppliedTo')) {
                obj['amountPercentageAppliedTo'] = ApiClient.convertToType(data['amountPercentageAppliedTo'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetAccountsChargesCurrency.constructFromObject(data['currency']);
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
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsCharges.prototype['id'] = undefined;

/**
 * @member {Number} chargeId
 */
GetAccountsCharges.prototype['chargeId'] = undefined;

/**
 * @member {Number} accountId
 */
GetAccountsCharges.prototype['accountId'] = undefined;

/**
 * @member {String} name
 */
GetAccountsCharges.prototype['name'] = undefined;

/**
 * @member {module:model/GetAccountsChargeTimeType} chargeTimeType
 */
GetAccountsCharges.prototype['chargeTimeType'] = undefined;

/**
 * @member {module:model/GetAccountsChargeCalculationType} chargeCalculationType
 */
GetAccountsCharges.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} percentage
 */
GetAccountsCharges.prototype['percentage'] = undefined;

/**
 * @member {Number} amountPercentageAppliedTo
 */
GetAccountsCharges.prototype['amountPercentageAppliedTo'] = undefined;

/**
 * @member {module:model/GetAccountsChargesCurrency} currency
 */
GetAccountsCharges.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetAccountsCharges.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetAccountsCharges.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetAccountsCharges.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetAccountsCharges.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetAccountsCharges.prototype['amountOutstanding'] = undefined;

/**
 * @member {Number} amountOrPercentage
 */
GetAccountsCharges.prototype['amountOrPercentage'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetAccountsCharges.prototype['isActive'] = undefined;






export default GetAccountsCharges;

