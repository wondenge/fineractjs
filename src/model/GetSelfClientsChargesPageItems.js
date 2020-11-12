  

import ApiClient from '../ApiClient';
import GetSelfClientsChargeCalculationType from './GetSelfClientsChargeCalculationType';
import GetSelfClientsChargeTimeType from './GetSelfClientsChargeTimeType';
import GetSelfClientsSavingsAccountsCurrency from './GetSelfClientsSavingsAccountsCurrency';

/**
 * The GetSelfClientsChargesPageItems model module.
 * @module model/GetSelfClientsChargesPageItems
 * @version 1.0
 */
class GetSelfClientsChargesPageItems {
    /**
     * Constructs a new <code>GetSelfClientsChargesPageItems</code>.
     * @alias module:model/GetSelfClientsChargesPageItems
     */
    constructor() { 
        
        GetSelfClientsChargesPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsChargesPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsChargesPageItems} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsChargesPageItems} The populated <code>GetSelfClientsChargesPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsChargesPageItems();

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
GetSelfClientsChargesPageItems.prototype['id'] = undefined;

/**
 * @member {Number} clientId
 */
GetSelfClientsChargesPageItems.prototype['clientId'] = undefined;

/**
 * @member {Number} chargeId
 */
GetSelfClientsChargesPageItems.prototype['chargeId'] = undefined;

/**
 * @member {String} name
 */
GetSelfClientsChargesPageItems.prototype['name'] = undefined;

/**
 * @member {module:model/GetSelfClientsChargeTimeType} chargeTimeType
 */
GetSelfClientsChargesPageItems.prototype['chargeTimeType'] = undefined;

/**
 * @member {Date} dueDate
 */
GetSelfClientsChargesPageItems.prototype['dueDate'] = undefined;

/**
 * @member {module:model/GetSelfClientsChargeCalculationType} chargeCalculationType
 */
GetSelfClientsChargesPageItems.prototype['chargeCalculationType'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsCurrency} currency
 */
GetSelfClientsChargesPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfClientsChargesPageItems.prototype['amount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetSelfClientsChargesPageItems.prototype['amountPaid'] = undefined;

/**
 * @member {Number} amountWaived
 */
GetSelfClientsChargesPageItems.prototype['amountWaived'] = undefined;

/**
 * @member {Number} amountWrittenOff
 */
GetSelfClientsChargesPageItems.prototype['amountWrittenOff'] = undefined;

/**
 * @member {Number} amountOutstanding
 */
GetSelfClientsChargesPageItems.prototype['amountOutstanding'] = undefined;

/**
 * @member {Boolean} penalty
 */
GetSelfClientsChargesPageItems.prototype['penalty'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetSelfClientsChargesPageItems.prototype['isActive'] = undefined;

/**
 * @member {Boolean} isPaid
 */
GetSelfClientsChargesPageItems.prototype['isPaid'] = undefined;

/**
 * @member {Boolean} isWaived
 */
GetSelfClientsChargesPageItems.prototype['isWaived'] = undefined;






export default GetSelfClientsChargesPageItems;

