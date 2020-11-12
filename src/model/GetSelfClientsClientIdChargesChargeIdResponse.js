

import ApiClient from '../ApiClient';
import GetSelfClientsChargeCalculationType from './GetSelfClientsChargeCalculationType';
import GetSelfClientsChargeTimeType from './GetSelfClientsChargeTimeType';
import GetSelfClientsSavingsAccountsCurrency from './GetSelfClientsSavingsAccountsCurrency';

/**
 * The GetSelfClientsClientIdChargesChargeIdResponse model module.
 * @module model/GetSelfClientsClientIdChargesChargeIdResponse
 * @version 1.0
 */
class GetSelfClientsClientIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>GetSelfClientsClientIdChargesChargeIdResponse</code>.
     * GetSelfClientsClientIdChargesChargeIdResponse
     * @alias module:model/GetSelfClientsClientIdChargesChargeIdResponse
     */
    constructor() { 
        
        GetSelfClientsClientIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdChargesChargeIdResponse} The populated <code>GetSelfClientsClientIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdChargesChargeIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('chargeId')) {
                obj['chargeId'] = ApiClient.convertToType(data['chargeId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = GetSelfClientsChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetSelfClientsChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfClientsSavingsAccountsCurrency.constructFromObject(data['currency']);
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
            if (data.hasOwnProperty('penalty')) {
                obj['penalty'] = ApiClient.convertToType(data['penalty'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('isPaid')) {
                obj['isPaid'] = ApiClient.convertToType(data['isPaid'], 'Boolean');
            }
            if (data.hasOwnProperty('isWaived')) {
                obj['isWaived'] = ApiClient.convertToType(data['isWaived'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['name'] = undefined;

/**
 * @member {module:model/GetSelfClientsChargeTimeType} chargeTimeType
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['chargeTimeType'] = undefined;

/**
 * @member {Date} dueDate
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['dueDate'] = undefined;

/**
 * @member {module:model/GetSelfClientsChargeCalculationType} chargeCalculationType
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsCurrency} currency
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['amountOutstanding'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['penalty'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['isActive'] = undefined;

/**
 * @member {Boolean} isPaid
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['isPaid'] = undefined;

/**
 * @member {Boolean} isWaived
 */
GetSelfClientsClientIdChargesChargeIdResponse.prototype['isWaived'] = undefined;






export default GetSelfClientsClientIdChargesChargeIdResponse;

