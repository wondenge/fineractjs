

import ApiClient from '../ApiClient';
import GetAccountsPurchasedSharesStatus from './GetAccountsPurchasedSharesStatus';
import GetAccountsPurchasedSharesType from './GetAccountsPurchasedSharesType';

/**
 * The GetAccountsPurchasedShares model module.
 * @module model/GetAccountsPurchasedShares
 * @version 1.0
 */
class GetAccountsPurchasedShares {
    /**
     * Constructs a new <code>GetAccountsPurchasedShares</code>.
     * @alias module:model/GetAccountsPurchasedShares
     */
    constructor() { 
        
        GetAccountsPurchasedShares.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsPurchasedShares</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsPurchasedShares} obj Optional instance to populate.
     * @return {module:model/GetAccountsPurchasedShares} The populated <code>GetAccountsPurchasedShares</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsPurchasedShares();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('accountId')) {
                obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
            }
            if (data.hasOwnProperty('purchasedDate')) {
                obj['purchasedDate'] = ApiClient.convertToType(data['purchasedDate'], 'Date');
            }
            if (data.hasOwnProperty('numberOfShares')) {
                obj['numberOfShares'] = ApiClient.convertToType(data['numberOfShares'], 'Number');
            }
            if (data.hasOwnProperty('purchasedPrice')) {
                obj['purchasedPrice'] = ApiClient.convertToType(data['purchasedPrice'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GetAccountsPurchasedSharesStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetAccountsPurchasedSharesType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeAmount')) {
                obj['chargeAmount'] = ApiClient.convertToType(data['chargeAmount'], 'Number');
            }
            if (data.hasOwnProperty('amountPaid')) {
                obj['amountPaid'] = ApiClient.convertToType(data['amountPaid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetAccountsPurchasedShares.prototype['id'] = undefined;

/**
 * @member {Number} accountId
 */
GetAccountsPurchasedShares.prototype['accountId'] = undefined;

/**
 * @member {Date} purchasedDate
 */
GetAccountsPurchasedShares.prototype['purchasedDate'] = undefined;

/**
 * @member {Number} numberOfShares
 */
GetAccountsPurchasedShares.prototype['numberOfShares'] = undefined;

/**
 * @member {Number} purchasedPrice
 */
GetAccountsPurchasedShares.prototype['purchasedPrice'] = undefined;

/**
 * @member {module:model/GetAccountsPurchasedSharesStatus} status
 */
GetAccountsPurchasedShares.prototype['status'] = undefined;

/**
 * @member {module:model/GetAccountsPurchasedSharesType} type
 */
GetAccountsPurchasedShares.prototype['type'] = undefined;

/**
 * @member {Number} amount
 */
GetAccountsPurchasedShares.prototype['amount'] = undefined;

/**
 * @member {Number} chargeAmount
 */
GetAccountsPurchasedShares.prototype['chargeAmount'] = undefined;

/**
 * @member {Number} amountPaid
 */
GetAccountsPurchasedShares.prototype['amountPaid'] = undefined;






export default GetAccountsPurchasedShares;

