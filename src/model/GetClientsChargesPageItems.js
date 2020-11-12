

import ApiClient from '../ApiClient';
import GetClientChargeCalculationType from './GetClientChargeCalculationType';
import GetClientChargeCurrency from './GetClientChargeCurrency';
import GetClientChargeTimeType from './GetClientChargeTimeType';

/**
 * The GetClientsChargesPageItems model module.
 * @module model/GetClientsChargesPageItems
 * @version 1.0
 */
class GetClientsChargesPageItems {
    /**
     * Constructs a new <code>GetClientsChargesPageItems</code>.
     * @alias module:model/GetClientsChargesPageItems
     */
    constructor() { 
        
        GetClientsChargesPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsChargesPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsChargesPageItems} obj Optional instance to populate.
     * @return {module:model/GetClientsChargesPageItems} The populated <code>GetClientsChargesPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsChargesPageItems();

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
                obj['chargeTimeType'] = GetClientChargeTimeType.constructFromObject(data['chargeTimeType']);
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = GetClientChargeCalculationType.constructFromObject(data['chargeCalculationType']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetClientChargeCurrency.constructFromObject(data['currency']);
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
GetClientsChargesPageItems.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetClientsChargesPageItems.prototype['clientId'] = undefined;

/**
 * @member {Number} chargeId
 */
GetClientsChargesPageItems.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetClientsChargesPageItems.prototype['name'] = undefined;

/**
 * @member {module:model/GetClientChargeTimeType} chargeTimeType
 */
GetClientsChargesPageItems.prototype['chargeTimeType'] = undefined;

/**
 * @member {Date} dueDate
 */
GetClientsChargesPageItems.prototype['dueDate'] = undefined;

/**
 * @member {module:model/GetClientChargeCalculationType} chargeCalculationType
 */
GetClientsChargesPageItems.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetClientChargeCurrency} currency
 */
GetClientsChargesPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetClientsChargesPageItems.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetClientsChargesPageItems.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetClientsChargesPageItems.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetClientsChargesPageItems.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetClientsChargesPageItems.prototype['amountOutstanding'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetClientsChargesPageItems.prototype['penalty'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetClientsChargesPageItems.prototype['isActive'] = undefined;

/**
 * @member {Boolean} isPaid
 */
GetClientsChargesPageItems.prototype['isPaid'] = undefined;

/**
 * @member {Boolean} isWaived
 */
GetClientsChargesPageItems.prototype['isWaived'] = undefined;






export default GetClientsChargesPageItems;

