

import ApiClient from '../ApiClient';
import GetClientTransactionsCurrency from './GetClientTransactionsCurrency';
import GetClientsClientIdTransactionsType from './GetClientsClientIdTransactionsType';

/**
 * The GetClientsPageItems model module.
 * @module model/GetClientsPageItems
 * @version 1.0
 */
class GetClientsPageItems {
    /**
     * Constructs a new <code>GetClientsPageItems</code>.
     * @alias module:model/GetClientsPageItems
     */
    constructor() { 
        
        GetClientsPageItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsPageItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsPageItems} obj Optional instance to populate.
     * @return {module:model/GetClientsPageItems} The populated <code>GetClientsPageItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsPageItems();

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
                obj['type'] = GetClientsClientIdTransactionsType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetClientTransactionsCurrency.constructFromObject(data['currency']);
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
GetClientsPageItems.prototype['id'] = undefined;

/**
 * @member {Number} officeId
 */
GetClientsPageItems.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetClientsPageItems.prototype['officeName'] = undefined;

/**
 * @member {module:model/GetClientsClientIdTransactionsType} type
 */
GetClientsPageItems.prototype['type'] = undefined;

/**
 * @member {Date} date
 */
GetClientsPageItems.prototype['date'] = undefined;

/**
 * @member {module:model/GetClientTransactionsCurrency} currency
 */
GetClientsPageItems.prototype['currency'] = undefined;

/**
 * @member {Number} amount
 */
GetClientsPageItems.prototype['amount'] = undefined;

/**
 * @member {Date} submittedOnDate
 */
GetClientsPageItems.prototype['submittedOnDate'] = undefined;

/**
 * @member {Boolean} reversed
 */
GetClientsPageItems.prototype['reversed'] = undefined;






export default GetClientsPageItems;

