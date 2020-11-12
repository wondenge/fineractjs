

import ApiClient from '../ApiClient';
import GetSelfClientsClientIdTransactionsType from './GetSelfClientsClientIdTransactionsType';
import GetSelfClientsSavingsAccountsCurrency from './GetSelfClientsSavingsAccountsCurrency';

/**
 * The GetSelfClientsClientIdTransactionsPageItems model module.
 * @module model/GetSelfClientsClientIdTransactionsPageItems
 * @version 1.0
 */
class GetSelfClientsClientIdTransactionsPageItems {
    /**
     * Constructs a new <code>GetSelfClientsClientIdTransactionsPageItems</code>.
     * @alias module:model/GetSelfClientsClientIdTransactionsPageItems
     */
    constructor() { 
        
        GetSelfClientsClientIdTransactionsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfClientsClientIdTransactionsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfClientsClientIdTransactionsPageItems} obj Optional instance to populate.
     * @return {module:model/GetSelfClientsClientIdTransactionsPageItems} The populated <code>GetSelfClientsClientIdTransactionsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfClientsClientIdTransactionsPageItems();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = GetSelfClientsClientIdTransactionsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfClientsSavingsAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('reversed')) {
                obj['reversed'] = ApiClient.convertToType(data['reversed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetSelfClientsClientIdTransactionsType} type
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['date'] = undefined;

/**
 * @member {module:model/GetSelfClientsSavingsAccountsCurrency} currency
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['amount'] = undefined;

/**
 * @member {Date} submittedOnDate
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['submittedOnDate'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetSelfClientsClientIdTransactionsPageItems.prototype['reversed'] = undefined;






export default GetSelfClientsClientIdTransactionsPageItems;

